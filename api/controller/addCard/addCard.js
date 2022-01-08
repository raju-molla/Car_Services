const AddCard = require('../../models/addCard/addCard.js');
const mongoose = require('mongoose');

const card =  async(req,res) => {
    try{
         const data = req.body;
        //  console.log(data);
        const newData = new AddCard(req.body);
         const cardData = await newData.save();
         
         res.json({
             cardData
         })
    }
    catch(err){
        res.json(err);
    }
}

const getAll= async(req,res)=>{
    try{
        const data  = await AddCard.find({isDelete:false});
        if(data.length){
            return res.status(201).json({
                data
            })
        }else{
            return res.json({
                mgs: 'database empty!'
            })
        }

    }
    catch(err){
        return res.json({
            err
        })
    }

    
}
module.exports={
    card,
    getAll
}