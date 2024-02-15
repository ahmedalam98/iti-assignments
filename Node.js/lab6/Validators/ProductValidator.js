const Ajv = require("ajv");
const ajv = new Ajv();

const productSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    name: { type: "string" },
    price: { type: "integer", minimum: 1 },
  },
  required: ["id", "name", "price"],
  additionalProperties: false,
};

module.exports = ajv.compile(productSchema);
