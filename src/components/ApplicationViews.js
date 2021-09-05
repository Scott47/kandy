import React from "react"
import { Route } from "react-router"
import { NewEmployeeForm } from "./employees/EmployeeForm"
import { EmployeeList } from "./employees/EmployeeList"
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
        <Route path="/employees">
            <EmployeeList />
        </Route>
        <Route exact path="/employee/create">
            <NewEmployeeForm/>
        </Route>
        </>
    )
}