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
    },
    pagination: (page,currentCategory, limit='20') => {
        if(currentCategory > 1){
        return instance.get(`products?q=${currentCategory}&_page=${page}&_limit=${limit}`).then(response => {
            return response;
        })
    } else {
        return instance.get(`products?_page=${page}&_limit=${limit}`).then(response => {
            return response;
        })
    }
    },
    search: (data) => {
        return instance.get(`products?q=${data}`).then( response => {
            return response
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
            console.log(response);
            if(response.data.length === 0){
                return response.data;
            } else {
                return 'User is exist'
            }
        })
    },
    setUser: (email) => {
        return instance.get(`users?q=${email}`).then(response => {
            return response.data
        })
    },
    login: (email, password) => {
        return instance.get(`users?q=${email}`).then(response => {
            if (response.data.length === 1) {
                if (response.data[0].email === email && response.data[0].password === password) {
                    return response
                } else {
                    const message = 'Incorrect email or password'
                    return message
                }
            }
        })
    }
}