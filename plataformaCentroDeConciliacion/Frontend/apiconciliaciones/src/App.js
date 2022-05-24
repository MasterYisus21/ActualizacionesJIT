import React, {useEffect,useState} from  'react' // rfce
import axios from 'axios';


function App() {
  
  
  const[equipo,setequipo]=useState([])


  useEffect(()=> {  // le estamos indicando a React que el componente tiene que hacer algo después de renderizarse. React recordará la función que le hemos pasado (nos referiremos a ella como nuestro “efecto”), y la llamará más tarde después de actualizar el DOM. 

    
    obtenerdatos()
  },[]) //  debemos usar los [] para que la peticion solo se ejecute una vez 




  const obtenerdatos= async ()=>{
     
    const data= await axios.get('http://localhost:3001/api/gateway/v1/paises/1')
    .then (response => {

     this.setequipo(response.data)
     
    })    

  }

  return (
    
    <div>
    <ul>
      {
      equipo.map(item => (
          <li key="item.Id"> { item.Nombre}</li>
        ))
      }
    </ul>

    <p> Nosotros</p>

    </div>
  )
}

export default App