const moongose  = require('mongoose');
const { db } = require('../models/customer');
const massData =require('../models/customer');

const getData =async (req,res)=>{
       try {
        const MassData = await massData.find();

        res.json(MassData)
       } catch (error) {
        res.status(404).json({message:error.message})
       }
};

const addData =async(req,res)=>{
       const data = req.body;

       const newData = new massData(data);
       try {
        await newData.save()

        res.status(201).json(newData)
       } catch (error) {
        res.status(409).json({messge:error.message})
       }
};

const updateData =async(req,res)=>{
    const {id:_id} = req.params;
    const data = req.body;
    
    if(!moongose.Types.ObjectId.isValid(_id)) return res.status(404).send('no data with that id')

    const updatedData = await massData.findByIdAndUpdate(_id,{...data,_id},{new:true});
        res.json(updatedData)
};

const deleteData =async (req,res)=>{
    const id = req.params.id;
    
    if(!moongose.Types.ObjectId.isValid(id)) return res.status(404).send("no post with that id");

    await massData.findByIdAndDelete(id);
        res.json({
            messge:'data deleted successfully'
        })
};

module.exports = {getData,addData,updateData,deleteData};