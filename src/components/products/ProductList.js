import React, { useState, useEffect } from "react"
import { Product } from "./Product"
import { getProducts } from "../ApiManager"

export const ProductList = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        getProducts()
            .then((p) => setProducts(p))
            .catch(error => {
                console.error("error getting products:", error)
                setError(error)
            })
    },
        []
    )
    if (error) return "Products are currently unavailable for this store"
    return (
        <>
            <h3>Products</h3>
            {products.map(product => <Product key={product.id} product={product} />)}
        </>
    )
}