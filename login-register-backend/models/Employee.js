import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

export const EmployeeModel = mongoose.model("employees", EmployeeSchema);