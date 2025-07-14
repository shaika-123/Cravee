import foodModel from '../models/foodModel.js';
import cloudinary from '../config/cloudinary.js';

// ✅ Add food item — uploads image to Cloudinary
const addFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image file uploaded" });
    }

    // Upload image buffer using stream
    const streamUpload = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "cravee" },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          }
        );
        stream.end(fileBuffer);
      });
    };

    const result = await streamUpload(req.file.buffer);

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: result.secure_url, // Store Cloudinary image URL
    });

    await food.save();
    res.json({ success: true, message: "Food Added" });

  } catch (error) {
    console.error("Add Food Error:", error);
    res.status(500).json({ success: false, message: "Error adding food" });
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

// ✅ Delete food item (Cloudinary delete optional)
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    if (!food) {
      return res.status(404).json({ success: false, message: "Food not found" });
    }

    // OPTIONAL: Delete from Cloudinary (only if public_id is known)
    // const publicId = food.image.split("/").pop().split(".")[0];
    // await cloudinary.uploader.destroy(`cravee/${publicId}`);

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });

  } catch (error) {
    console.error("Remove Food Error:", error);
    res.status(500).json({ success: false, message: "Error removing food" });
  }
};

export { addFood, listFood, removeFood };
