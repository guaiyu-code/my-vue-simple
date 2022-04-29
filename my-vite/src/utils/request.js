import axios from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 900
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
service.interceptors.response.use(
    response => {
        if (response.data.code === 0 || response.headers.success === 'true') {
            return response.data
        } else {
            ElMessage({
                showClose: true,
                message: response.data.msg || decodeURI(response.headers.msg),
                type: 'error'
              })
            return response.data.msg ? response.data : response
        }
    },
    error => {
        if(!error.response) {
            ElMessageBox.confirm(`
                <p>检测到请求错误</p>
                <p>${error}</p>
                `, '请求报错', {
                dangerouslyUseHTMLString: true,
                distinguishCancelAndClose: true,
                confirmButtonText: '稍后重试',
                cancelButtonText: '取消'
                })
            return
        }
        switch (error.response.status) {
            case 500:
                ElMessageBox.confirm(`
                <p>检测到接口错误${error}</p>
                <p>错误码<span style="color:red"> 500 </span>
                `, "接口错误", {
                    dangerouslyUseHTMLString: true,
                    distinguishCancelAndClose: true,
                    confirmButtonText: '清理缓存',
                    cancelButtonText: '取消' 
                })
                break
            case 404:
                ElMessageBox.confirm(`
                <p>检测到接口错误${error}</p>
                <p>错误码<span style="color:red"> 500 </span>
                `, "接口错误", {
                    dangerouslyUseHTMLString: true,
                    distinguishCancelAndClose: true,
                    confirmButtonText: '我知道了',
                    cancelButtonText: '取消' 
                })
                break
        }
        return error
    }
)

export default service
