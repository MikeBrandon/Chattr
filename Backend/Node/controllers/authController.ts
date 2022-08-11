const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

import { UserModel } from "../model/UserModel";
import { LogInData, SignUpData } from "../Types/authTypes";
import { validateSignUp } from "../utils/auth";
import { sendMail } from "../utils/mailer";
import { madeId } from "../utils/reusables";

export const register = async (req: any, res: any, next: any) => {
  try {
    const signUpData: SignUpData = req.body;
    if (!validateSignUp(signUpData)) {
      return res.status(400).json({ msg: "Incorrect Data Format Submitted" });
    }

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

export const logIn = async (req: any, res: any, next: any) => {
  try {
    const logInData: LogInData = req.body;

    const user = await UserModel.findOne({
      email: logInData.email,
    });
    if (!user)
      return res.status(400).json({ msg: "Incorrect Username or Password" });

    const passwordValid = await bcrypt.compare(
      logInData.password,
      user.password
    );
    if (!passwordValid)
      return res.status(400).json({ msg: "Incorrect Username or Password" });

    var auth_token = jwt.sign(
      {
        uid: user._id,
        email: user.email,
        username: user.username,
      },
      process.env.JWT_KEY,
      {
        expiresIn: "2h",
      }
    );
    return res
      .status(200)
      .json({ msg: "User Logged In Successfully", auth_token });
  } catch (error) {
    next(error);
  }
};

export const reset = async (req: any, res: any, next: any) => {
  try {
    const email: string = req.query.email;

    const user = await UserModel.findOne({
      email,
    });
    if (!user) return res.status(200).send();

    const resetToken = jwt.sign(
      { email, type: "reset" },
      process.env.JWT_RESET_KEY,
      {
        expiresIn: "5m",
      }
    );

    // TODO Find better mailing solution
    sendMail(
      email,
      "Reset Chatrr Password!",
      `Your Chatrr Reset Link is ${process.env.BASE_URL}/redirect?token=${resetToken} and is available for 5m`
    );

    return res.status(200).send();
  } catch (error) {
    next(error);
  }
};

export const redirect = async (req: any, res: any, next: any) => {
  try {
    switch (req.user.type) {
      case "reset":
        const newpass = madeId(8);
        const hashedPassword = await bcrypt.hash(newpass, 10);
        await UserModel.findOneAndUpdate(
          { email: req.user.email },
          { password: hashedPassword }
        );

        // TODO Find better mailing solution
        sendMail(
          req.user.email,
          "New Chatrr Password!",
          `Your new Chatrr Password is ${newpass}`
        );
        break;
      default:
        break;
    }

    return res.status(200).send();
  } catch (error) {
    next(error);
  }
};

export const verifyRoute = async (req: any, res: any, next: any) => {
  try {
    var auth_token = jwt.sign(
      {
        uid: req.user.uid,
        email: req.user.email,
        username: req.user.username,
      },
      process.env.JWT_KEY,
      {
        expiresIn: "2h",
      }
    );
    return res
      .status(200)
      .json({ msg: "User Logged In Successfully", auth_token });
  } catch (error) {
    next(error);
  }
};
