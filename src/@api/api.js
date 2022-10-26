import axios from "axios"

export const productAPI = {
    getProduct: () => {
        return axios.get(`http://localhost:3001/products`)
    },
    orderProduct: (category) => {
        return axios.get(`http://localhost:3001/products?q=${category}`).then(response => {
            return { data: response.data.filter(el => el.category === category) }
        })
    }
}