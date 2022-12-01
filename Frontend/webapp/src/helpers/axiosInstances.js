import axios from 'axios';
import config from '../config.json'

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

const axiosBasicInstanceApiExpedientes = axios.create({
    baseURL: config.ApiExpedientes,
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});


export {
    axiosBasicInstanceApiSolicitudes, axiosBasicInstanceApiExpedientes
}
