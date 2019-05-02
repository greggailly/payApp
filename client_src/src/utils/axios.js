import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5000',
})

const api = (method, endpoint, payload, token) => {
    return (
        instance({
            method: method,
            url: endpoint,
            data: payload,
            headers: { Authorization: `Bearer ${token}` }
        })
    )
}



export default api