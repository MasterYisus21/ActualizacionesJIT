import axios from 'axios';
import config from '../config.json'

// Import necesary for notification center
import { toast } from 'react-toastify';

const axiosBasicInstanceApiSolicitudes = axios.create({
    baseURL: config.ApiSolicitudes,
    timeout: 10000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

const axiosTokenInstanceApiSolicitudes = axios.create({
    baseURL: config.ApiSolicitudes,
    timeout: 10000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

axiosTokenInstanceApiSolicitudes.interceptors.response.use((response) => {
    return response;
}, (error) => {
    toast.error(`Ocurrió un error con estado ${error.response.status}`, {
        position: toast.POSITION.BOTTOM_RIGHT
    })
    return Promise.reject(error);
})

const axiosBasicInstanceApiExpedientes = axios.create({
    baseURL: config.ApiExpedientes,
    timeout: 10000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

const refreshAccessToken = async () => {

    const refresh_token = JSON.parse(localStorage.getItem('tokens'))["refresh_token"]
    console.log(refresh_token)
    await axios.post(config.apiGatewayURL + "/auth/refresh", {}, {
        headers: {
            Authorization: "Bearer " + refresh_token
        }
    })
        .then(response => {
            console.log(response)
            localStorage.setItem("tokens", JSON.stringify({ access_token: response.data["access_token"], refresh_token: refresh_token }))
            return (response.data["access_token"])
        })
        .catch(error => {
            localStorage.removeItem("tokens")
            console.log(error)
            window.location.href = config.webAppURL;
        })
}


const axiosTokenInstanceApiExpedientes = axios.create({
    baseURL: config.ApiExpedientes,
    timeout: 10000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

axiosTokenInstanceApiExpedientes.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        console.log("Entrando")
        const access_token = await refreshAccessToken();
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        return axiosTokenInstanceApiExpedientes(originalRequest);
    }
    toast.error(`Ocurrió un error con estado ${error.response.status}`, {
        position: toast.POSITION.BOTTOM_RIGHT
    })
    return Promise.reject(error);
})

axiosTokenInstanceApiExpedientes.interceptors.request.use(
    async config => {
        const value = await localStorage.getItem('tokens')
        const keys = JSON.parse(value)
        console.log(config.headers);
        try {
            config.headers = {
                'Authorization': `Bearer ${keys.access_token}`,
                // 'Accept': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded'
            }
            console.log(config.headers);
            return config;
        }
        catch (error) {
            console.log(error)
        }
    },
    error => {
        Promise.reject(error)
    });

axiosTokenInstanceApiExpedientes.interceptors.response.use((response) => {
    return response;
}, (error) => {
    toast.error(`Ocurrió un error con estado ${error.response.status}`, {
        position: toast.POSITION.BOTTOM_RIGHT
    })
    return Promise.reject(error);
})


export {
    axiosBasicInstanceApiSolicitudes, axiosBasicInstanceApiExpedientes, axiosTokenInstanceApiSolicitudes, axiosTokenInstanceApiExpedientes
}
