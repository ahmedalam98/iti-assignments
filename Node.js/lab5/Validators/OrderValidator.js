const Ajv = require("ajv");
const ajv = new Ajv();
// const ProductValidator = require("./ProductValidator");

// --------------------- Order Schema --------------------- //

const orderSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    // products: {
    //   $ref: "ProductValidator",
    // },
    totalPrice: { type: "integer", minimum: 10 },
  },
  required: [
    "id",
    "totalPrice",
    // "products"
  ],
  additionalProperties: false,
};

module.exports = ajv.compile(orderSchema);
