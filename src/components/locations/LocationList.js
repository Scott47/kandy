import React, { useState, useEffect } from "react"
import { Location } from "./Location"
import { getLocations } from "../ApiManager"

export const LocationList = () => {
    const [ locations, setLocations ] = useState([])
    const [ error, setError ] = useState(null)

    useEffect(() => {
        getLocations()
            .then((l) => setLocations(l))
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
        <h3>LOCATIONS</h3>
            {
                locations.map(location => <Location key={location.id} location={location} />)
            }
        </>
    )
}