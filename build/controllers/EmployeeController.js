"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employee = require("../models/Employee");
const index = (req, res) => {
    Employee.find().then((response) => {
        res.json({ response });
    }).catch(() => {
        res.json({ 'message': 'An arror accured!' });
    });
};
const show = (req, res) => {
    let employeeId = req.params.id;
    console.log(employeeId, 'id');
    Employee.findById(employeeId).then((response) => {
        res.json({ response });
    }).catch(() => {
        res.json({ 'message': 'An arror accured!' });
    });
};
const add = (req, res) => {
    console.log('here');
    let employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    });
    employee.save().then(() => {
        res.json({ 'message': 'Add employess success' });
    }).catch(() => {
        res.json({ 'message': 'An arror accured!' });
    });
};
const update = (req, res) => {
    let employeeId = req.params.id;
    let employeeUpdated = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    };
    Employee.findByIdAndUpdate(employeeId, { $set: employeeUpdated }).then(() => {
        res.json({ 'message': 'Updated employee success' });
    }).catch(() => {
        res.json({ 'message': 'An arror accured!' });
    });
};
const remove = (req, res) => {
    let employeeId = req.params.id;
    Employee.findByIdAndRemove(employeeId).then(() => {
        res.json({ 'message': "remove successfully" });
    }).catch(() => {
        res.json({ 'message': 'An arror accured!' });
    });
};
module.exports = {
    index, show, add, update, remove
};
