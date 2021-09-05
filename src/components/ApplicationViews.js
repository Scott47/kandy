import React from "react"
import { Route } from "react-router"
import { NewEmployeeForm } from "./employees/EmployeeForm"
import { EmployeeList } from "./employees/EmployeeList"
import { LocationList } from "./locations/LocationList"
import { ProductList } from "./products/ProductList"
import { CustomerList } from "./customers/CustomerList"

export const ApplicationViews = () => {

    return (
        <>
        <Route exact path="/">
            <h2>Welcome to Kandy Korner</h2>
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
        <Route exact path="/customers">
            <CustomerList />
        </Route>
        </>
    )
}