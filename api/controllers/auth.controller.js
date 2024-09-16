import User from "../model/user.model.js";
import brcypt from "bcrypt";
import { errorHandler } from "../utils/error.js";



export const signup = async (req, res, next) => {

    console.log(req.body);
    const {username, email, password} = req.body;
    console.log(username, email, password);


    if(!username || !email || !password) {
        return next(errorHandler(400, "All fields are required"));
    }

    const hashPassword = brcypt.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashPassword,
    })

    try {
        await newUser.save();
        return res.status(200).json("SignIn Successfull");
    } catch (error) {
        return next(error);
    }
    
}