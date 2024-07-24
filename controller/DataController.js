const DataModel = require('../schemaModel/schema')
const asyncHandler = require('express-async-handler')



const AddData = asyncHandler(async(req,res)=>{


    const {name,university,Date:DOB,rating,Subjects} = req.body;



    const createNew = await DataModel.create({
        name,
        University: university, 
        DOB,
        rating,
        Subjects
    });

    
    res.status(201).json({ success: true, data: createNew, message: "Data added successfully" });


})


const Datatake = asyncHandler(async(req,res)=>{
    const universityData = await DataModel.find()

    res.status(201).json({ success: true, Data: universityData });

})


module.exports={
    AddData,
    Datatake

}