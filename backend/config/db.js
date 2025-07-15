import mongoose from "mongoose";
import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from the backend root directory
dotenv.config({ path: path.join(__dirname, '..', '.env') });

export const connectDB = async () => {
    try {
        if (!process.env.MONGO_URL) {
            console.error("❌ MongoDB URL not found in environment variables");
            process.exit(1);
        }
        
        await mongoose.connect(process.env.MONGO_URL);
        console.log("✅ Database Connected");
    } catch (err) {
        console.error("❌ Connection Error:", err);
        process.exit(1);
    }
};
