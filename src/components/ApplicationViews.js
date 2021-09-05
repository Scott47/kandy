import React from "react"
import { Route } from "react-router"
import { LocationList } from "./locations/LocationList"
import { ProductList } from "./products/ProductList"

export const ApplicationViews = () => {

    return (
        <>
        <Route exact path="/">
            
        </Route>
        <Route exact path="/locations">
            <LocationList />
        </Route>
        <Route exact path="/products">
            <ProductList/>
        </Route>
        </>
    )
}