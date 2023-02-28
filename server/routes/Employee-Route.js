const express = require("express");
const router = express.Router();
const EmployeeCtrl=require('../controllers/EmployeeCtrl')


router.post('/add-Employee',EmployeeCtrl.addEmployee)
router.post("/getEmployees",EmployeeCtrl.getEmployee)
router.post("/delete-Employees",EmployeeCtrl.deleteEmployee)



module.exports=router