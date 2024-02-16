const AuthModel = require("../Models/AuthModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Utility Function to find user

async function FoundUser(email) {
  return await AuthModel.findOne({ email: email }).exec();
}

// ------------------------- Register ------------------------- //

let register = async (req, res) => {
  var body = req.body;
  let foundUser = await FoundUser(body.email);
  if (foundUser) return res.status(404).send("User Already Exist!");

  var salt = await bcrypt.genSalt(10);
  var hashedPassword = await bcrypt.hash(body.password, salt);

  body.email = body.email.toLowerCase();
  body.password = hashedPassword;

  var newUser = new AuthModel(body);
  await newUser.save();

  res.status(201).send("User Added Successfully");
};

// ------------------------- Login ------------------------- //

let login = async (req, res) => {
  var body = req.body;
  body.email = body.email.toLowerCase();

  let foundUser = await FoundUser(body.email);

  if (!foundUser) return res.status(404).send("Invalid Email or Password");

  var passwordValid = await bcrypt.compare(body.password, foundUser.password);

  if (!passwordValid) return res.status(404).send("Invalid Email or Password");

  // ----------------------------------------------------------- //
  // ----------------------------------------------------------- //

  // Autherization - JWT ( JSON Web Token ) //

  // - Create and assign a token
  // 1) It accepts two parameters ( payload, secret key )
  // 2.1) In real life, the secret key should be stored in the environment variables
  // 2.2) & you will need the(id) of the user to be added to the payload not just the name
  var token = jwt.sign(
    { name: foundUser.name, isAdmin: foundUser.isAdmin },
    "secret"
  );

  // - For testing the token
  // Take the token and paste it in the jwt.io website - debugger - to see the payload
  // console.log(token);

  // - Send the token in the header to the client to be used in the next requests
  // The client should store the token in the local storage or cookies
  // You will see the token in the header of the response in the browser or Postman with the key ( x-auth-token )
  res.header("x-auth-token", token);

  res.status(200).send("Logged In Successfully");
};

let authorize = (req, res) => {
  let header = req.headers;
  let token = header["x-auth-token"];

  if (token) {
    let decodedToken = jwt.verify(token, "secret");
    return decodedToken.isAdmin;
  }
  return false;
};

module.exports = { register, login, authorize };
