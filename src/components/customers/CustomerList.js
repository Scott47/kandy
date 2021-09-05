import React, { useState, useEffect } from "react"
import { getCustomers } from "../ApiManager"

export const CustomerList = () => {
    const [ customers, setCustomers ] = useState([])
    const [ error, setError ] = useState(null)

    useEffect(() => {
        getCustomers()
            .then((l) => setCustomers(l))
            .catch(error => {
                console.error("error getting customers:", error)
                setError(error)
        })
    },
        []
    )

    if (error) return "There are no customers to view at this time."

    return (
        <>
        <h3>Customers</h3>
            {
                customers.map(customer => <p key={customer.id}>{customer.name}</p> )
            }
        </>
    )
}