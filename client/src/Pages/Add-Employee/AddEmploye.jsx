import React from 'react'
import EmployeeForm from '../../Components/EmployeeForm/EmployeeForm'
import Navbar from '../../Components/Navebar/Navebar'

function AddEmployee() {
  return (
    <div>
        <div><Navbar/></div>
        <div><EmployeeForm/></div>
    </div>
  )
}

export default AddEmployee