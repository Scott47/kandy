import React from "react"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"

export const KandyKorner = () => {

    return (
        <>
            <h1 className="kandy-korner--header">Welcome to KandyKorner</h1>
            <NavBar />
            <ApplicationViews />
        </>
    )
}