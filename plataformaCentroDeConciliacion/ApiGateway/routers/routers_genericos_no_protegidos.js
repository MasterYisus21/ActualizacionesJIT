const express = require('express')

const router = express.Router()
const views_generales = require('../views/views_generales')
const views_solicitud = require('../views/views_solicitud')
const axios = require('axios'); 
const config =require ('../config.json')
const identificacion=1234

