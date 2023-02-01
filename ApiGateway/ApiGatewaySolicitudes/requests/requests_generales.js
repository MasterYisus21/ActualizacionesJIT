
const error = require("./requests_error.js")
const axios = require("axios");
requests = {}
requests.get = async (req, res, url, simbolo) => {
    try {
 
        if ((req.url.indexOf('?')) > 0) {
            const query = simbolo + req.url.slice(req.url.indexOf('?') + 1)
            url = url + query
        }

        axios.get(url)

            .then(result => {

                res.status(200).json(result.data)
            })
            .catch(err => {

                res.sendStatus(error(err))
            })

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}

module.exports = requests