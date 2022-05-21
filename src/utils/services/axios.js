import axios from 'axios'
import { userToken } from './auth.service'

export const baseUrl = process.env.NODE_ENV === 'production' 
    ? "https://samuel-memories.herokuapp.com"
    : "http://localhost:5000"

const API = axios.create({ baseURL: baseUrl })

API.interceptors.request.use(req => {

    if (userToken) {
        req.headers.Authorization = `Bearer ${JSON.parse(userToken)}`
    }

    return req
})

export default API