import React from 'react'

export const Location = ({ location }) => {
    return (
        <section className="location">
            <h3 className="location--address">{location.address}</h3>
            <p className="location--phone">{location.name}</p>
            <p className="location--access">
                {location.isAccessible === true ? "All are welcome"
                : "accessibility renovations coming soon!"}</p>
        </section>
    )
}