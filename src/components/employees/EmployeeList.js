import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getEmployees } from '../ApiManager'
import { Employee } from './Employee'

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const history = useHistory()

    useEffect(() => getEmployees().then(e => setEmployees(e)), [])

    return (
        <>
            <div>
                <button id="newEmployee" onClick={() => history.push("/employee/create")}>New Employee</button>
            </div>
            {
                employees.map(employee => <Employee key={employee.id} employee={employee} setter={setEmployees}/>)
            }
        </>
    )
}