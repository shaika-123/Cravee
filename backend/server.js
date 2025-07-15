import express from "express";
import cors from "cors";
import 'dotenv/config'; // ✅ Load .env variables first

import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App config
const app = express();
const port = process.env.PORT || 4000;

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ✅ Enables form-data parsing
app.use(cors());

// ✅ Connect to DB
connectDB();

// ✅ API Routes
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// ✅ Root route
app.get("/", (req, res) => {
  res.send("API Working");
});

// ✅ Start server
app.listen(port, () => {
  console.log(`✅ Server started on http://localhost:${port}`);
});
