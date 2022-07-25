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

const updateData = async (req,res)=>{

    const {id} = req.params;

        //getting the update data from client
    const data = req.body

    const updatedData = await nincheData.findByIdAndUpdate(id,{...data,id},{new:true});

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message:'no post with that id'})

    res.json(updatedData)
}

const deleteData = async (req,res)=>{

    const {id} = req.params;

    const deletedData = await nincheData.findByIdAndDelete(id,{...data,id},{new:true})

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with that id')

    res.json({message:'Data deleted successfully'})
}
const getByname = async(req,res)=>{
    const {name} = req.params;
    try {
        const getAll = await nincheData.find();
        
        const filterData= await getAll.filter(data=>{
        
           if(data.shopName.toLowerCase() === name.toLowerCase()){
            return data
           }
        })
        return filterData
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

module.exports ={getData,addData,getByname,deleteData,updateData};