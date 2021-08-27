import React, { useState, useEffect } from "react"
import { Location } from "./Location"

export const LocationList = () => {
    const [ locations, setLocation ] = useState([])
    const [ error, setError ] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8088/locations')
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw res
            })
            .then((l) => setLocation(l))
            .catch(error => {
                console.error("error getting locations:", error)
                setError(error)
        })
    },
        []
    )

if (error) return "Your server isn't running, but at least you don't have to catch it."

    return (
        <>
            {
                locations.map(location => <Location key={location.id} location={location} />)
            }
        </>
    )
}