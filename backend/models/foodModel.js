import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },       // ✅ Cloudinary image URL
  category: { type: String, required: true },
  public_id: { type: String }                    // ✅ New field (optional, for deleting from Cloudinary)
});

// Reuse the model if it already exists
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;
