import axios from 'axios'

export const baseUrl = "http://localhost:5000"

const API = axios.create({ baseURL: baseUrl })

API.interceptors.request.use(req => {

    if (localStorage.getItem('memories-user-token')) {
        req.headers.Authorization = `Token ${JSON.parse(localStorage.getItem('memories-user-token'))}`
    }

    return req
})

export default API