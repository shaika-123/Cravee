import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import upload from "../middleware/multer.js"; // ⬅️ Cloudinary-based multer config

const foodRouter = express.Router();

// Route to add food with image upload to Cloudinary
foodRouter.post("/add", upload.single("image"), addFood);

// Route to get all food items
foodRouter.get("/list", listFood);

// Route to remove a food item
foodRouter.post("/remove", removeFood);

export default foodRouter;
