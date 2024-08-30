import User from "../model/user.model.js";
import brcypt from "bcrypt";

export const signup = async (req, res) => {
    console.log(req.body);
    const {username, email, password} = req.body;
    console.log(username, email, password);


    if(!username.trim() || !email.trim() || !password.trim()) {
        return res.status(400).json({message: "All fields required"});
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
        return res.status(500).json({message: error});
    }



}