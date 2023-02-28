const express = require("express");
const router = express.Router();
const EmployeeCtrl=require('../controllers/EmployeeCtrl')


router.post('/add-Employee',EmployeeCtrl.addEmployee)
router.get("/get-Employees",EmployeeCtrl.getEmployee)
router.post("/delete-Employees",EmployeeCtrl.deleteEmployee)



module.exports=router