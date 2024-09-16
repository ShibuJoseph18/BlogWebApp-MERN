import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.route.js";
import signUp from "./routes/auth.route.js";

dotenv.config();

const app = express();
const port = 3000;

// app.use() - If route is not mentioned, the middleware functions is applied to all routes.

// express.json() - It converts raw json that comes request from the browser to js objects 
// and add a property called 'body' that can be interpreted by the routes using 'req.body'.

// While handling middlewares position is important, Since we need the body property
// to use in routes and the middleware is responsible for it, we need declare the middle before the routes.
app.use(express.json());

mongoose
    .connect(process.env.MONGODB_ACCESS)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((error) => {
        console.log(`Database Connection${error}`);
    });



app.use("/api/user", userRoutes);
app.use("/api/auth", signUp); // It provides the base path for signUp route

app.use((err, req, res, next) => {
    console.log("error",req.body);
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});