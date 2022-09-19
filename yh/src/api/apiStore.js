import Vue from 'vue'
import axios from 'axios'
const baseUrl = process.env.NODE_ENV === 'development' ? 'http://yhh5.zhiyunzixun.com/api/' : '/api/';
//创建 axios 实例
let service = axios.create({
    baseURL: baseUrl,
    timeout: 60000,
})



//请求拦截
service.interceptors.request.use((config) => {
    // console.log('config--->', config)
    config.headers["Content-type"] = "application/json;charset=UTF-8";
    return config
}, (error) => {
    // 请求错误处理
    return Promise.reject(error)
})

//响应拦截
service.interceptors.response.use((response) => {
    //console.log(response)
    if (response.status != 200) {
        //请求返回的状态!=200的情况
        Vue.prototype.$notify({
            message: response.data.message,
            background: '#ed4014',
            className: 'notify-box'
        })
        Vue.prototype.$toast.clear()
            // return Promise.reject(response)
        return response.data
    } else {
        return Promise.resolve(response.data)
    }
}, (error) => {
    Vue.prototype.$toast.clear()
    return Promise.reject(error)
})

//封装请求方法
const apiStore = {
    post(url, params = {}, loading = true) {
        let config = {
            method: 'POST',
            loading: loading,
        }
        return apiStore.callData(url, params, config)
    },
    get(url, params = {}, loading = true) {
        let config = {
            method: 'GET',
            loading: loading,
        }
        return apiStore.callData(url, params, config)
    },

    callData(url, params = {}, config) {
        //params = Object.assign({},VERSION_INFO,params);
        let loading = config.loading;
        if (loading) {
            Vue.prototype.$toast.loading({
                duration: 100000,
                message: '请求中...',
                forbidClick: true,
            })
        }
        let data = config.method.toLocaleLowerCase() === 'get' ? 'params' : 'data';
        params = config.method.toLocaleLowerCase() === 'get' ? params : JSON.stringify(params);
        return service({
            method: config.method,
            url,
            [data]: params,
        }).then((response) => {
            if (loading) {
                Vue.prototype.$toast.clear();
            }
            // if (response.code == 0) {
            //     return Promise.resolve(response)
            // } else {
            //     console.log(111)
            //     return Promise.resolve(response)
            // }
            return Promise.resolve(response)

        }).catch((error) => {
            if (loading) {
                Vue.prototype.$toast.clear();
            }
            if (error.resultMsg) {
                Vue.prototype.$toast(error.resultMsg)
            }
            return Promise.reject(error)
        })
    }
}

export default {
    apiStore
}