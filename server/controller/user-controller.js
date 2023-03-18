import User from "../model/user-schema.js";

export const userSignup = async (request, response) => {
  try {
    // checking whether the entered email and phone number exists in DB or not
    let exist = await User.findOne({ email: request.body.email });
    exist = await User.findOne({ phone: request.body.phone });

    if (exist) {
      return response.status(401).json({ message: "User already exist" });
    }
    const user = request.body;
    const newUser = new User(user);
    await newUser.save();
    return response.status(200).json({ message: user });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

// export const userLogin = async (request, response) => {
//   try {
//     const username = request.body.username;
//     const password = request.body.password;

//     let user = await User.findOne({ username: username, password: password });
//     if (user) {
//       return response.status(200).json(`${username} login successfull`);
//     } else {
//       return response.status(401).json('Invalid login');

//     }
//   } catch (error) {
//     response.status(500).json(error.message)
//   }
// };

export const userLogin = async (request, response) => {
  // finding for user data using email and password
  try {
    let user = await User.findOne({
      email: request.body.email,
      password: request.body.password,
    });
    
    // console.log("Here", user);
    
    // const loggedInUserName = user.firstname; 
    // console.log(loggedInUserName);

    if (user) {
      return response
        .status(200)
        .json(`${user.firstname}`);
    } else {
      return response.status(401).json("Invalid Login");
    }
  } catch (error) {
    return response.status(401).json({error});
  }
};
