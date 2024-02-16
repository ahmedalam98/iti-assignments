const express = require("express");
const app = express();
const PORT = process.env.PORT || 2024;

const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/ITI_Node";

mongoose.connect(DB_URL, {
  autoIndex: true,
});

// ---------------------- Middlewares ---------------------- //

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ---------------------- Routes ---------------------- //

const AuthRoutes = require("./Routes/AuthRoutes");
app.use("/auth", AuthRoutes);

const OrderRoutes = require("./Routes/OrderRoutes");
app.use("/orders", OrderRoutes);

const ProductRoutes = require("./Routes/ProductRoutes");
app.use("/products", ProductRoutes);

// ---------------------- Server ---------------------- //

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
