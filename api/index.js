import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();
const port = 3000;

mongoose
    .connect(process.env.MONGODB_RESOURCE)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((error) => {
        console.log(`Database Connection${error}`);
    });



app.use("/api/user", userRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})