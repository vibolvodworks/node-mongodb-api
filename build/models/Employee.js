"use strict";
let mongoose = require("mongoose");
const Schema = mongoose.Schema;
const employeeSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    age: {
        type: Number
    },
}, { timestamps: true });
const EmployeeModel = mongoose.model("Employee", employeeSchema);
module.exports = EmployeeModel;
