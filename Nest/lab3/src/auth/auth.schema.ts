import * as mongoose from 'mongoose'
export const AuthSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:Number,
    role:String
})