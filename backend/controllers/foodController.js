import foodModel from '../models/foodModel.js'
import fs from 'fs'
import cloudinary from '../config/cloudinary.js'

// ✅ Add food item — now uploads image to Cloudinary
const addFood = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No image file uploaded" });
        }

        const streamUpload = (req) => {
            return new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    {
                        folder: "cravee",
                    },
                    (error, result) => {
                        if (result) {
                            resolve(result);
                        } else {
                            reject(error);
                        }
                    }
                );
                stream.end(req.file.buffer);
            });
        };

        const result = await streamUpload(req);

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: result.secure_url, // Save Cloudinary URL
        });

        await food.save();
        res.json({ success: true, message: "Food Added" });

    } catch (error) {
        console.log("Add Food Error:", error);
        res.status(500).json({ success: false, message: "Error adding food" });
    }
};

// ✅ All food list (no change)
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// ✅ Remove food item (local file system unlink skipped for Cloudinary images)
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);

        // OPTIONAL: if you want to delete from Cloudinary too (extract public_id)
        // Not required unless you're managing storage quota

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

export { addFood, listFood, removeFood }
