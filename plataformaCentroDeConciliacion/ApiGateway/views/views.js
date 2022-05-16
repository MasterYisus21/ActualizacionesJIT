
const axios = require('axios') 

const views = {}
views.getpaises = (req,res)=>{
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/paises/")
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.sendStatus(500)
    })
    
}

module.exports = views
