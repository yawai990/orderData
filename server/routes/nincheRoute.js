const express = require('express');
const nincherouter  = express.Router();
const {getData,addData} = require('../controllers/nincheControl');

nincherouter.get('/',getData)
                .post('/',addData);

module.exports = nincherouter;