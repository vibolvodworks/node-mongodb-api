const EmployeeRoute = require("./routes/employee");
const Joi = require('joi');
import express from 'express';
const mongoose = require('mongoose');
const morgan = require("morgan");

mongoose.connect('mongodb://localhost:27017/testdb');
const db = mongoose.connection;
db.on('error', (error: Object) => {
    console.log(error);
});

db.once('open', () => {
    console.log('Database is connected');
});

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use("/api/employee", EmployeeRoute);