import React from 'react'
import EmployeeView from '../../Components/Employee-View/EmployeeView'
import Navbar from '../../Components/Navebar/Navebar'

function ViewEmployee() {
  return (
    <div>
        <div><Navbar/></div>
        <div><EmployeeView/></div>
    </div>
  )
}

export default ViewEmployee