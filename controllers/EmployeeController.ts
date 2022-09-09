
const Employee = require("../models/Employee");
import { Request, Response } from 'express'

const index = (req: Request, res: Response) => {
    Employee.find().then((response: Response) => {
        res.json({response});
    }).catch(() => {
        res.json({'message': 'An arror accured!'})
    });
}

const show = (req: Request, res: Response) => {
    let employeeId = req.params.id;
    console.log(employeeId, 'id');
    Employee.findById(employeeId).then((response: Response) => {
        res.json({response});
    }).catch(() => {
        res.json({'message': 'An arror accured!'})
    });
}

const add = (req: Request, res: Response) => {
    console.log('here');
    let employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    });
    employee.save().then(() => {
        res.json({'message': 'Add employess success'});
    }).catch(() => {
        res.json({'message': 'An arror accured!'})
    });
}

const update = (req: Request, res: Response) => {
    let employeeId = req.params.id;
    let employeeUpdated = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    };
    Employee.findByIdAndUpdate(employeeId, {$set: employeeUpdated}).then(() => {
        res.json({'message': 'Updated employee success'});
    }).catch(() => {
        res.json({'message': 'An arror accured!'})
    });
}

const remove = (req: Request, res: Response) => {
    let employeeId = req.params.id;
    Employee.findByIdAndRemove(employeeId).then(() => {
        res.json({'message': "remove successfully"});
    }).catch(() => {
        res.json({'message': 'An arror accured!'})
    });
}

module.exports = {
    index, show, add, update, remove
}