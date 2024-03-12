import * as mongoose from "mongoose"

export const OrderSchema = new mongoose.Schema({
    products: [{ type: String }],
    totalPrice: Number,
})