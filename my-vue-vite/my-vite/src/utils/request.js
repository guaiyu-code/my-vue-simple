import axios from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 30
})


// request 拦截器
service.interceptors.request.use(
    config => {
        config.headers = {
            'Content-Type': 'application/json',
            'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVVUlEIjoiZGIzNDk2ZWUtNzA5MS00N2YyLWIyNzMtNTIyYTEwNjEzZThiIiwiSUQiOjEsIlVzZXJuYW1lIjoiYWRtaW4iLCJOaWNrTmFtZSI6Iui2hee6p-euoeeQhuWRmCIsIkF1dGhvcml0eUlkIjoiODg4IiwiQnVmZmVyVGltZSI6ODY0MDAsImV4cCI6MTY1MTU2OTYxNCwiaXNzIjoicW1QbHVzIiwibmJmIjoxNjUwOTYzODE0fQ.7kCleJWcMgomz2nAHrAM-AQ476SEOl22fIJXqjYP20g',
            'x-user-id': 1,
            ...config.headers
        }
        return config
    },
    error => {
        ElMessage({
            showClose: true,
            message: error,
            type: 'error'
        })
        return error
    }
)
// response 拦截器

export default service
