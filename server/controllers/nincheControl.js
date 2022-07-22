const mongoose = require('mongoose');
const nincheData = require('../models/ninche');

const getData = async(req,res)=>{
    try {
        const NincheData = await nincheData.find();

        res.json(NincheData)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

const addData =async(req,res)=>{
    const data = req.body;

    const newData = new nincheData(data);
    try {
     await newData.save()

     res.status(201).json(newData)
    } catch (error) {
     res.status(409).json({messge:error.message})
    }
};

module.exports ={getData,addData}