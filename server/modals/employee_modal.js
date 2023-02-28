const mongoose = require("mongoose");
const schema = mongoose.Schema;

const employeeschema = new schema({
  name: {
    type: String,
  },
  jobTitle:{
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  education: [],
  experience:[]
});

const Employee = mongoose.model("employees", employeeschema);

module.exports = Employee;
