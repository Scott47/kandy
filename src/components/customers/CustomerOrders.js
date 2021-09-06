import React, { useState, useEffect } from "react"
import { getPurchases } from "../ApiManager"

export const CustomerOrders = () => {
    const [purchases, setPurchases] = useState([])
    const currentCustomer = +localStorage.getItem("kandy_customer")

    useEffect(() => getPurchases(currentCustomer).then((p) => setPurchases(p)))

    return (
        <>
            {
                purchases.map(purchase => <p key={purchase.id}>{purchase.product?.name}</p>)
            }
        </>
    )
}