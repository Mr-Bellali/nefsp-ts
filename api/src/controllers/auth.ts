import { v4 as uuidv4 } from "uuid";
import hashPassword from "../utils/hashPassword";
import { createUser, getUser } from "../services/auth";
import { Request, Response } from "express";
import comparePasswords from "../utils/comparePasswords";
import generateToken from "../utils/jwt";
import { config } from "dotenv";
config();
import generator from "generate-password"
import { sendMail } from "../utils/mailer";
import { signupSchema } from "../config/schemas";


// new signup controller 
export const sellerSignUpController = async (req: Request, res: Response) => {
  try {

    console.log(req.body)

    const parsedData = signupSchema.safeParse(req.body);

    console.log(parsedData)

    if (!parsedData.success) {
      return res.status(400).json({ error: 'invalid input data', details: parsedData.error.errors });
    }

    const { storename, storeaddress, storetype, email } = parsedData.data;

    console.log("store name: ", storename)
    console.log("store adress: ", storeaddress)
    console.log("store type: ",storetype)
    console.log("email: ", email)


    const userId = uuidv4();

    const splitedEmail = email.split('@');
    const name = splitedEmail[0];

    const password = generator.generate({
      length: 8,
      numbers: true
    });

    const hashedPass = await hashPassword(password);

    const createdUser = await createUser(
      userId,
      name,
      email,
      hashedPass,
      storeaddress, 
      46,        // City ID for Rabat (default)
      storename,     
      storetype,     
      storeaddress,  
      'SELLER'     
    );


  const from: string = 'NESFP team';
  const to: string = 'bellali.yassine52@gmail.com';
  const subject: string = 'credantials for login into platform';
  const mailTemplate: string = `your account have been created seccuessfully, you can add aditional infos after you login to the platform.\nYou can use those credantials. \nemail: ${email}\npassword: ${password}`;

  sendMail( from, to, subject, mailTemplate);


    return res.status(201).json({ message: "User created successfully", user: createdUser});

  } catch (error) {
    console.error("Error during seller sign-up:", error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};



export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    console.log("recievied email: ", email);
    console.log("recievied password: ", password);

    if (!email || !password) {
      return res.status(403).json({ error: "please fill all the fields" });
    }

    const user: any = await getUser(email);

    console.log(user);

    console.log("hashed password", user.password);

    if (!user) {
      res.status(404).json({ error: "incorrect email or password" });
    }

    const passwordMatch = await comparePasswords(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Incorrect email or password" });
    }

    const secretKey = process.env.ACCESS_TOKEN_SECRET;

    const token = generateToken(user, secretKey);

    console.log(token);
    return res.status(200).json({ token });
  } catch (error: any) {
    console.log(error);
    res
      .status(500)
      .json({ error: `something in the server is wrong: ${error}` });
  }
};
