import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Use memory storage for Cloudinary uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
