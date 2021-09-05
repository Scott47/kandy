
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