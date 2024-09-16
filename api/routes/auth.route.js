import express from "express";
import { signup } from "../controllers/auth.controller.js";


const router = express.Router();
router.post('/signup', signup); // This file act as a route to the controller/auth.controller.js which handles the business logic.

export default router;