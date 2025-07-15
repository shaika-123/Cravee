import foodModel from '../models/foodModel.js';
import cloudinary from '../config/cloudinary.js';

// ✅ Add food item — uploads image to Cloudinary
const addFood = async (req, res) => {
  try {
    console.log('=== ADD FOOD REQUEST ===');
    console.log('Request body:', req.body);
    console.log('File info:', req.file);
    console.log('Environment check - Cloudinary config:', {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME ? 'Set' : 'Missing',
      api_key: process.env.CLOUDINARY_API_KEY ? 'Set' : 'Missing',
      api_secret: process.env.CLOUDINARY_API_SECRET ? 'Set' : 'Missing'
    });

    if (!req.file) {
      console.log('❌ No file uploaded');
      return res.status(400).json({ 
        success: false, 
        message: "No image file uploaded" 
      });
    }

    // Check if file buffer exists
    if (!req.file.buffer) {
      console.log('❌ Invalid file buffer');
      return res.status(400).json({ 
        success: false, 
        message: "Invalid file buffer" 
      });
    }

    console.log('File details:', {
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size,
      bufferLength: req.file.buffer.length
    });

    // Validate required fields FIRST (before uploading to Cloudinary)
    if (!req.body.name || !req.body.description || !req.body.price || !req.body.category) {
      return res.status(400).json({ 
        success: false, 
        message: "Missing required fields: name, description, price, and category are required" 
      });
    }

    // Validate price is a valid number
    const price = Number(req.body.price);
    if (isNaN(price) || price <= 0) {
      return res.status(400).json({ 
        success: false, 
        message: "Price must be a valid positive number" 
      });
    }

    console.log('Uploading to Cloudinary...');

    try {
      // Convert buffer to base64 for more reliable upload
      const base64String = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
      
      const result = await cloudinary.uploader.upload(base64String, {
        folder: "cravee",
        resource_type: "image"
      });
      
      console.log('✅ Cloudinary upload success:', result.secure_url);

      const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: Number(req.body.price),
        category: req.body.category,
        image: result.secure_url, // Store Cloudinary image URL
      });

      await food.save();
      console.log('Food saved successfully:', food);
      
      res.json({ 
        success: true, 
        message: "Food Added Successfully",
        data: food 
      });

    } catch (cloudinaryError) {
      console.error('Cloudinary upload error:', cloudinaryError);
      return res.status(500).json({ 
        success: false, 
        message: "Cloudinary upload failed: " + cloudinaryError.message 
      });
    }

  } catch (error) {
    console.error("Add Food Error:", error);
    
    // More specific error messages
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        success: false, 
        message: "Validation error: " + error.message 
      });
    }
    
    if (error.http_code) {
      // Cloudinary specific error
      return res.status(500).json({ 
        success: false, 
        message: "Cloudinary upload failed: " + error.message 
      });
    }

    res.status(500).json({ 
      success: false, 
      message: "Internal server error: " + error.message 
    });
  }
};

// ✅ Get all food items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.error("List Food Error:", error);
    res.status(500).json({ success: false, message: "Error fetching food list" });
  }
};

// ✅ Delete food item (with proper Cloudinary cleanup)
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    if (!food) {
      return res.status(404).json({ success: false, message: "Food not found" });
    }

    // Extract public_id from Cloudinary URL for deletion
    try {
      const urlParts = food.image.split('/');
      const publicIdWithExtension = urlParts[urlParts.length - 1];
      const publicId = `cravee/${publicIdWithExtension.split('.')[0]}`;
      
      await cloudinary.uploader.destroy(publicId);
      console.log('Image deleted from Cloudinary:', publicId);
    } catch (cloudinaryError) {
      console.error('Cloudinary deletion error:', cloudinaryError);
      // Continue with food deletion even if Cloudinary deletion fails
    }

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });

  } catch (error) {
    console.error("Remove Food Error:", error);
    res.status(500).json({ success: false, message: "Error removing food" });
  }
};

export { addFood, listFood, removeFood };