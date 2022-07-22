const express = require('express');
const  bodyParser = require('body-parser');
const cors = require('cors'); 
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const app = express();
const router = require('./routes/Route');
const nincherouter = require('./routes/nincheRoute');

dotenv.config();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/mass',router);
app.use('/ninche',nincherouter)

const CONNECTION_URL = "mongodb+srv://yawai:yawaiaung100399@mass.1oe3o7i.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
                  .then(()=>app.listen(PORT,e=> console.log(`server is running in ${PORT}`)))
                  .catch(err=>console.log(err))
