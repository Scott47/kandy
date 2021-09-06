import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { getEmployees, purchaseKandy } from '../ApiManager'

export const Product = ({ product }) => {
    const [ employees, setEmployees ] = useState([])
    const [ purchase, setPurchase ] = useState({timestamp: 0, productId: 0, employeeId: 0, customerId: 0})
    const history = useHistory()

    useEffect(() => getEmployees().then((e) => setEmployees(e)), [])

    const buyKandy = () => {

        const newPurchase= {
            timestamp: Date.now(),
            productId: product.id,
            employeeId: purchase.employeeId,
            customerId: +localStorage.getItem("kandy_customer")
        }
        purchaseKandy(newPurchase).then(() => history.push("/products"))
    }

    const updatePurchaseState = (propToModify, newValue) => {
        const newObject = { ...purchase }  
        newObject[propToModify] = newValue
        setPurchase(newObject)              
      }

    return (
        <>
            <h3 className="product--name">{product.name}</h3>
            <p className="product--type">Type: {product.productType?.productType}</p>
            <p className="product--price">Price: ${product.price.toFixed(2)}</p>
            <select htmlFor="employee" onChange={(evt) => {
                            updatePurchaseState("employeeId", +evt.target.value)}}>
                <option value="0">Select an service rep for purchase...</option>
                {
                    employees.map(e => <option key={e.id} value={e.id}>{e.name}</option>)
                }
            </select>
            <div className="purchas-procduct">
                <button id={product.id} onClick={(e) => {
                    e.preventDefault()
                    buyKandy()}}>click to purchase</button>
            </div>
        </>
    )
}