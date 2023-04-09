import User from "../model/user-schema.js";
import Jwt from "jsonwebtoken";
const jwt = Jwt;

const JWT_SECRET_KEY = "hi$hi";

export const userSignup = async (req, response) => {
  try {
    // checking whether the entered email and phone number exists in DB or not
    let exist = await User.findOne({ email: req.body.email });
    exist = await User.findOne({ phone: req.body.phone });

    if (exist) {
      return response.status(401).json({ message: "User already exist" });
    }

    // const user = req.body;
    // const newUser = new User(user);
    // await newUser.save();

   let user = await User.create({
      firstname: req.body.firstname,
      email: req.body.email,
      password: req.body.password,
      confirmpassword: req.body.confirmpassword,
      phone: req.body.phone,
    });

    // creating payload of user
    const data = {
      user: {
        id: user.id,
      },
    };

    const authToken = jwt.sign(data, JWT_SECRET_KEY);

    return response.status(200).json({ username: user.firstname, authToken: authToken });
  } catch (error) {
    return response.status(500).json({ error });
  }
};

export const userLogin = async (req, response) => {
  // finding for user data using email and password
  console.log("Login backend", req.body);
  
  try {
    let user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (user) {
      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET_KEY);
      return response
        .status(200)
        .json({ username: user.firstname, authToken: authToken });
    } else {
      return response.status(401).json("Invalid Login");
    }
  } catch (error) {
    return response.status(500).json({ error });
  }
};
