const express = require('express');
const router  = express.Router();
const {getData,addData,updateData,deleteData} = require('../controllers/control');

router.get('/',getData)
                .post('/',addData)
                .patch('/:id',updateData)
                .delete('/:id',deleteData);

module.exports = router;