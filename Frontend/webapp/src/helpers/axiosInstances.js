import axios from 'axios';
import config from '../config.json'

// Import necesary for notification center
import { toast } from 'react-toastify';

const axiosBasicInstanceApiSolicitudes = axios.create({
    baseURL: config.ApiSolicitudes,
    timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

const axiosTokenInstanceApiSolicitudes = axios.create({
    baseURL: config.ApiSolicitudes,
    timeout: 1000,
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
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

axiosBasicInstanceApiExpedientes.interceptors.response.use((response) => {
    return response;
}, (error) => {
    toast.error(`Ocurrió un error con estado ${error.response.status}`, {
        position: toast.POSITION.BOTTOM_RIGHT
    })
    return Promise.reject(error);
})


const axiosTokenInstanceApiExpedientes = axios.create({
    baseURL: config.ApiExpedientes,
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
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
