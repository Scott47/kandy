import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { getLocations, hireEmployee } from "../ApiManager"

export const NewEmployeeForm = () => {
    const [newHire, setNewHire] = useState({ name: "", locationId: 0, manager: false, fulltime: false, hourlyrate: 0 })
    const [locations, setLocations] = useState([])
    const history = useHistory()

    useEffect(() => getLocations().then(l => setLocations(l)), [])

    const submitNewHire = () => {
        const newEmployee = {
            name: newHire.name,
            locationId: newHire.locationId,
            manager: newHire.manager,
            fulltime: newHire.fulltime,
            hourlyrate: newHire.hourlyrate 
        }
        hireEmployee(newEmployee).then(() => history.push("/employees"))
    }
    return (
        <form className="employeeForm" onSubmit={(e) => e.preventDefault()}>
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Employee Name"
                        onChange={(evt) => {
                            const currentEmployee = { ...newHire }
                            currentEmployee.name = evt.target.value
                            setNewHire(currentEmployee)
                        }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <select htmlFor="location" onChange={(evt) => {
                            const currentEmployee = { ...newHire }
                            currentEmployee.locationId = +evt.target.value
                            setNewHire(currentEmployee)
                        }}><option value="0">Please select a location...</option>
                    {
                        locations.map(location => <option key={location.id} value={location.id}>{location.address}</option>)
                    }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Check this box if manager.</label>
                    <input type="checkbox"
                        onChange={(evt) => {
                            const currentEmployee = { ...newHire }
                            currentEmployee.manager = evt.target.checked
                            setNewHire(currentEmployee)
                        }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fulltime">Check this box if full-time.</label>
                    <input type="checkbox"
                        onChange={(evt) => {
                            const currentEmployee = { ...newHire }
                            currentEmployee.fulltime = evt.target.checked
                            setNewHire(currentEmployee)
                        }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Hourly Rate:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="hourly rate"
                        onChange={(evt) => {
                            const currentEmployee = { ...newHire }
                            currentEmployee.hourlyrate = +evt.target.value
                            setNewHire(currentEmployee)
                        }} />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={(e) => submitNewHire(e)}>
                Submit New Hire
            </button>
        </form>
    )
}


