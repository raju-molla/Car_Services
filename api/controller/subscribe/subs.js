const Sub = require('../../models/sub/sub.js');

const subPost = async(req,res)=>{
    try{
        const sub = new Sub(req.body);
        const data = await sub.save();
        res.json({
            data
        })
    }
    catch(err){
        console.log(err);
    }
}
module.exports={
    subPost
}