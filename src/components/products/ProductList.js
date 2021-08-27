import React, { useState, useEffect } from "react"
import { Product } from "./Product"

export const ProductList = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8088/products?_expand=productType')
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw res
            })
            .then((p) => setProducts(p))
            .catch(error => {
                console.error("error getting products:", error)
                setError(error)
            })
    },
        []
    )

    return (
        <>
            <h3>Products</h3>
            {products.map(product => <Product key={product.id} product={product} />)}
        </>
    )
}