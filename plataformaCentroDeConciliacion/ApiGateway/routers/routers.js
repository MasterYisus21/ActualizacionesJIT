

const express = require('express')
const router = express.Router()
const views = require('../views/views')

router.get('/paises',views.getpaises)



module.exports = router 