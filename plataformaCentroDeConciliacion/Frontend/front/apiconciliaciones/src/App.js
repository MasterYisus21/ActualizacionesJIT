import React, {useEffect,useState} from  'react' // rfce
import axios from 'axios';

const api = axios.create({

  baseURL:'http://localhost:3001/api/gateway/v1'
})
function App() {
  
  const [backendData, setBackendData ] = useState([{}])

  useEffect(()=> {
    axios.get("/paises")//  se hace la peticion
    

    .then(
      data=>{ // Data va a quedar en setBackendData
        setBackendData(data.backendData)
      }
    )
  },[]) //  debemos usar los [] para que la peticion solo se ejecute una vez 

  return (
    <p> {backendData}</p>
  )
}

export default App