import axios from "axios"

export const productAPI = {
    getProduct: () => {
        return axios.get(`http://localhost:3001/products`)
    },
    orderProduct: (category, order = 'asc') => {
        let orders;
        order === 'Alphabet' ? orders = 'asc' : orders = 'desc'
        if (category) {
            return axios.get(`http://localhost:3001/products?q=${category}&_order=${orders}`).then(response=>{
                return {data: response.data.filter(el => el.category === category)}
            })
        }
        else {
            return axios.get(`http://localhost:3001/products?_order=${orders}`)
        }
    }
}