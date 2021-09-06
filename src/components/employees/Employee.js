import React from 'react'
import { Link } from 'react-router-dom'
import { fireEmployee, getEmployees } from "../ApiManager"

export const Employee = ({ employee, setter }) => {
    return (
        <>
            <p><Link to="#">{employee.name}</Link></p>
            <button id={employee.id} onClick={() => fireEmployee(employee.id).then(() => getEmployees().then((e) => setter(e)))}>Fire Employee</button>
        </>
    )

}