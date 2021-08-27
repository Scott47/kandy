import React from "react"
import { LocationList } from "./locations/LocationList"
import { ProductList} from "./products/ProductList"

export const KandyKorner = () => {

    return (
        <>
            <h1 className="kandy-korner--header">Welcome to KandyKorner</h1>
            <LocationList />
            <ProductList />
        </>
    )
}