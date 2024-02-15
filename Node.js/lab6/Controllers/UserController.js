const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Any function is goind to deal with the database should be async because it will take time to connect to the database
let registerUser = async (req, res) => {
  // using mongoose schema validation to validate the new user data

  let newUser = new User(req.body);

  // Wait for the promise to resolve
  let foundUser = await User.findOne({ email: newUser.email }).exec();

  if (foundUser) {
    return res.status(400).json({ message: "User already exists" });
  }
  // If the user does not exist, hash the password with (bcrypt) pkg and save the user to the database

  // Hash the password
  let salt = await bcrypt.genSalt(10);
  let hashedPassword = await bcrypt.hash(newUser.password, salt);

  // Save the user to the database
  newUser.email = newUser.email.toLowerCase(); // to avoid case sensitivity from the user
  newUser.password = hashedPassword;
  let encryptedUser = new User(newUser);
  await encryptedUser.save();
  res.status(201).json({ message: "User added successfully" });
};

// ----------------------------------------------------------- //

let loginUser = async (req, res) => {
  let oldUser = req.body;

  // Convert the email to lowercase to avoid case sensitivity from the user
  oldUser.email = oldUser.email.toLowerCase();
  let foundUser = await User.findOne({ email: oldUser.email }).exec();

  if (!foundUser) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // Compare the HASHED passwords
  let validPassword = await bcrypt.compare(
    oldUser.password,
    foundUser.password
  );

  if (!validPassword) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // ----------------------------------------------------------- //
  // ----------------------------------------------------------- //

  // Autherization - JWT ( JSON Web Token ) //

  // - Create and assign a token
  // 1) It accepts two parameters ( payload, secret key )
  // 2.1) In real life, the secret key should be stored in the environment variables
  // 2.2) & you will need the(id) of the user to be added to the payload not just the name
  let token = jwt.sign(
    { name: foundUser.name, isAdmin: foundUser.isAdmin },
    "secretkey"
  );

  // - For testing the token
  // Take the token and paste it in the jwt.io website - debugger - to see the payload
  // console.log(token);

  // - Send the token in the header to the client to be used in the next requests
  // The client should store the token in the local storage or cookies
  // You will see the token in the header of the response in the browser or Postman with the key ( x-auth-token )
  res.header("x-auth-token", token);

  res.status(200).json({ message: "Logged in successfully" });
};

module.exports = {
  registerUser,
  loginUser,
};
