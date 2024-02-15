// Code to run the server
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const path = require("path");

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use("/", (req, res) => {
//   res.send("<p>Go to <h2>/orders</h2> OR <h2>/products</h2>  routes </p>");
// });

// Routes
const OrderRoutes = require("./Routes/OrderRoutes");
app.use("/api/orders", OrderRoutes);

const ProductRoutes = require("./Routes/ProductRoutes");
app.use("/api/products", ProductRoutes);

const UserRoutes = require("./Routes/Auth");
app.use("/api/users", UserRoutes);

// Port Listening
app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
