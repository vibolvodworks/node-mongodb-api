const express = require("express");
const router = express.Router();
const EmplyeeController = require("../controllers/EmployeeController");

router.get('/', EmplyeeController.index);
router.get('/show/:id', EmplyeeController.show);
router.post('/add', EmplyeeController.add);
router.put('/update/:id', EmplyeeController.update);
router.delete('/remove/:id', EmplyeeController.remove);

module.exports = router;