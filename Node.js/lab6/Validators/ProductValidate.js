const Ajv = require("ajv");

const ajv = new Ajv();

let ProductSchema = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 5, maxLength: 30 },
    price: { type: "integer", minimum: 0, maximum: 500 },
  },
  required: ["name", "price"],
  additionalProperties: false,
};

module.exports = ajv.compile(ProductSchema);
