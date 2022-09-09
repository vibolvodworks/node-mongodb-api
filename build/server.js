"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmployeeRoute = require("./routes/employee");
const Joi = require('joi');
const express_1 = __importDefault(require("express"));
const mongoose = require('mongoose');
const morgan = require("morgan");
mongoose.connect('mongodb://localhost:27017/testdb');
const db = mongoose.connection;
db.on('error', (error) => {
    console.log(error);
});
db.once('open', () => {
    console.log('Database is connected');
});
const app = (0, express_1.default)();
app.use(morgan('dev'));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use("/api/employee", EmployeeRoute);
