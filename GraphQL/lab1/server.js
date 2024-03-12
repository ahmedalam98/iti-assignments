const express = require("express");
const app = express();
const port = process.env.PORT || 7000;
const mongoose = require("mongoose");
const ourSchema = require("./Schema/schema");
const express_GraphQl = require("express-graphql").graphqlHTTP;

mongoose.connect("mongodb://localhost:27017/GraphTask");
mongoose.connection.once("open", () => {
  console.log("Connected Successfully to DB");
});

app.use("/graphql", express_GraphQl({ schema: ourSchema, graphiql: true }));

app.listen(port, () =>
  console.log(`listening on http://localhost:${port}/graphql`)
);
