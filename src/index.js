import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config();


connectDB()
.then(() => {
    console.log("Database connected successfully");
})
.catch((error) => {
    console.error("Database connection failed:", error);
});


