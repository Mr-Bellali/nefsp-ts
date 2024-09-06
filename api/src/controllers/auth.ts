import { v4 as uuidv4 } from "uuid";
import hashPassword from "../utils/hashPassword";
import { createUser, getUser } from "../models/auth";
import { Request, Response } from "express";
import comparePasswords from "../utils/comparePasswords";
import generateToken from "../utils/jwt";
import { config } from 'dotenv';
config();

export const signUpController = async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    const userId = uuidv4();
    const { name, email, password, phonenumber, adress, cityId, role } =
      req.body;

    console.log("id", userId);
    console.log(
      "received data:",
      name,
      email,
      password,
      phonenumber,
      adress,
      cityId,
      role
    );

    // Check if all required fields exist
    if (!name || !email || !password || !phonenumber) {
      return res.status(400).json({ error: "The fields are required!" });
    }

    // Check if profiletype is "admin", and deny if it is
    if (role === "ADMIN") {
      return res
        .status(400)
        .json({ error: "Operation not allowed" });
    }

    // Hash the password
    const hashedPass = await hashPassword(password);

    console.log("\n\n\n\nhashed pass: ", hashedPass, "\n\n\n\n\n\n\n\n");

    // Create the user
    const createdUser = await createUser(
      userId,
      name,
      email,
      hashedPass,
      phonenumber,
      adress,
      cityId,
      role
    );

    return res.status(201).json({ user: createdUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    console.log("recievied email: ", email)
    console.log("recievied password: ", password)


    if (!email || !password) {
      return res.status(403).json({ error: "please fill all the fields" });
    }


    const user:any = await getUser(email)

    console.log(user)

    console.log("hashed password",user.password)

    if (!user) {
      res.status(404).json({ error: "incorrect email or password" });
    }

    const passwordMatch = await comparePasswords(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Incorrect email or password" });
    }

    const token = generateToken(user);

    console.log(token)
    return res.status(200).json({ token });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: `something in the server is wrong: ${error}` });
  }
};
