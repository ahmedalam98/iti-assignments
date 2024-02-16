const Ajv = require("ajv");

const ajv = new Ajv();

let OrderSchema = {
  type: "object",
  properties: {
    items: {
      type: "array",
      items: { type: "string" },
    },
    price: { type: "integer", minimum: 0, maximum: 3000 },
  },
  required: ["items", "price"],
  additionalProperties: false,
};

module.exports = ajv.compile(OrderSchema);
