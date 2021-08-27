import React from 'react'

export const Product = ({ product }) => {
    return (
        <>
            <h3 className="product--name">{product.name}</h3>
            <p className="product--type">Type: {product.productType?.productType}</p>
            <p className="product--price">Price: ${product.price.toFixed(2)}</p>
        </>
    )
}