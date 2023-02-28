import React from 'react'
import EmployeeTable from '../../Components/Employe-List/EmployeeTable'
import Navebar from '../../Components/Navebar/Navebar'

function Homepage() {
  return (
    <div>
        <div><Navebar/></div>
        <div><EmployeeTable/></div>
    </div>

  )
}

export default Homepage