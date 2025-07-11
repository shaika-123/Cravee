import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("✅ Database Connected"))
        .catch((err) => console.error("❌ Connection Error:", err));
};
