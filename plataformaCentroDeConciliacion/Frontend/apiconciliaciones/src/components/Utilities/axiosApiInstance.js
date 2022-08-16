// import { useNavigate } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import config from '../../config.json'

const axios = require('axios');
const axiosApiInstance = axios.create();



const refreshAccessToken = async() => {
  
  const refresh_token = JSON.parse(localStorage.getItem('conciliacionesToken'))["refresh_token"]
  console.log(refresh_token)
  await axios.post(config.apiGatewayURL + "/auth/refresh", {}, {
    headers: {
      Authorization: "Bearer " + refresh_token
    }
  })
  .then(response => {
    console.log(response)
    localStorage.setItem("conciliacionesToken", JSON.stringify({access_token: response.data["access_token"], refresh_token: refresh_token}))
    return(response.data["access_token"])
  })
  .catch(error => {
    localStorage.removeItem("conciliacionesToken")
    console.log(error)
    window.location.href = config.webAppURL;
  })
}

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async config => {
    const value = await localStorage.getItem('conciliacionesToken')
    const keys = JSON.parse(value)
    try {
      config.headers = {
        'Authorization': `Bearer ${keys.access_token}`,
        // 'Accept': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded'
      }
      return config;
    }
    catch(error) {
      console.log(error)
    }
    
  },
  error => {
    Promise.reject(error)
    
  });

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    console.log("Entrando")
    const access_token = await refreshAccessToken();
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
    return axiosApiInstance(originalRequest);
  }
  return Promise.reject(error);
});

export default axiosApiInstance
