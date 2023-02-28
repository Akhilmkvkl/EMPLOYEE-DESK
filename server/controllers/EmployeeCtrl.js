const Employee = require("../modals/employee_modal");
const { ObjectId } = require("mongodb");

const EmployeeCtrl = {
  addEmployee: (req, res) => {
    try {
      const values = req.body.values;
      console.log(values);
      const employeeDetails = new Employee({
        name: values.name,
        jobTitle: values.jobTitle,
        Phone: values.phone,
        email: values.email,
        education: values.education,
        experience: values.experience,
      });
      console.log("jii");
      employeeDetails
        .save()
        .then(() => {
          res.send({ msg: "Employee Added successfully" });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
      res.status(400).send({ err: "An error occured" });
    }
  },

  getEmployee: (req, res) => {
    try {
      Employee.find().then((employeeDetails) => {
        if (employeeDetails) {
          res.send({ msg: "successfully fetched", employeeDetails });
        }
      });
    } catch (error) {
      res.status(400).send({ msg: "An error while fetching" });
    }
  },

  deleteEmployee:(req,res)=>{
    try {
        const id=req.body.id
        console.log(id);
        
        Employee.deleteOne({_id:ObjectId(id)})
        .then(()=>{
            res.send({msg:"successfully deleted"})
        })
    } catch (error) {
        
    }
  }
};

module.exports = EmployeeCtrl;
