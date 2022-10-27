import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:3001/',
});

export const productAPI = {
    getProduct: () => {
        return instance.get(`products`)
    },
    orderProduct: (category) => {
        return instance.get(`products?q=${category}`).then(response => {
            return { data: response.data.filter(el => el.category === category) }
        })
    }
}

export const userAPI = {
    register: (data) => {
        return instance.post(`users`, { ...data }).then(response => {
            return response
        })
    },
    exist: (email) => {
        return instance.get(`users?q=${email}`).then(response => {
            if (response.data === 0) {
                return response.data;
            } else {
                return 'User is exist'
            }
        })
    },
    setUser: (email) => {
        return instance.get(`users?q=${email}`).then(response => {
            console.log(response);
            return response.data
        })
    },
}