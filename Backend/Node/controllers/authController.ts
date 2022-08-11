const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

import { UserModel } from "../model/UserModel";
import { SignUpData } from "../Types/authTypes";

export const register = async (req: any, res: any, next: any) => {
  try {
    const signUpData: SignUpData = req.body;
    const usernameCheck = await UserModel.findOne({
      username: signUpData.username,
    });
    if (usernameCheck)
      return res.status(400).json({ msg: "Username is Already in Use" });
    const emailCheck = await UserModel.findOne({
      email: signUpData.email,
    });
    if (emailCheck)
      return res.status(400).json({ msg: "Email is Already in Use" });
    const hashedPassword = await bcrypt.hash(signUpData.password, 10);
    const user = await UserModel.create({
      email: signUpData.email,
      username: signUpData.username,
      password: hashedPassword,
    });
    var auth_token = jwt.sign(
      {
        uid: user._id,
        email: signUpData.email,
        username: signUpData.username,
      },
      process.env.JWT_KEY,
      {
        expiresIn: "2h",
      }
    );
    return res.status(200).json({ msg: "User created", auth_token });
  } catch (error) {
    next(error);
  }
};
