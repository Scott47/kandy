
export const getProducts = () => {
    return fetch('http://localhost:8088/products?_sort=productTypeId&_expand=productType')
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
            throw res
        })
}

export const getLocations = () => {
    return fetch('http://localhost:8088/locations')
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
            throw res
        })
}

export const getEmployees = () => {
    return fetch('http://localhost:8088/employees?_expand=location')
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
            throw res
        })
}

export const getCustomers = () => {
    return fetch('http://localhost:8088/customers')
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
            throw res
        })
}

export const getPurchases = (id) => {
    return fetch(`http://localhost:8088/purchases?_expand=product&customerId=${id}`)
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
            throw res
        })
}

export const hireEmployee = (emp) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(emp)
    }
    return fetch(`http://localhost:8088/employees`, fetchOptions)
        .then(response => response.json())
}
export const fireEmployee = (id) => {
    const fetchOptions = {
        method: "DELETE",
    }
    return fetch(`http://localhost:8088/employees/${id}`, fetchOptions)
}

export const purchaseKandy = (kandy) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(kandy)
    }
    return fetch(`http://localhost:8088/purchases`, fetchOptions)
        .then(response => response.json())
}

export const existingUserCheck = (email) => {
    return fetch(`http://localhost:8088/customers?email=${email}`)
        .then(res => res.json())

}