import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getEmployees } from '../ApiManager'

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => getEmployees().then(e => setEmployees(e)), [])

    return (
        <>
            {
                employees.map(employee => <p key={employee.id}><Link to="#">{employee.name}</Link></p>)
            }
        </>
    )
}