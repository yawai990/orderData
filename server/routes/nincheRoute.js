const express = require('express');
const nincherouter  = express.Router();
const {getData,addData,getByname,deleteData,updateData} = require('../controllers/nincheControl');

nincherouter.get('/',getData)
                    .get('/:name',getByname)
                    .post('/',addData)
                    .patch('/:id',updateData)
                    .delete('/:id',deleteData)

module.exports = nincherouter;