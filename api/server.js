const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path')
const addCard = require('./router/addCard.js')
const subPost = require('./router/subscribe.js')
app.use(
    cors({
        origin: "http://localhost:3000"
    })
)


app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, "images");
    },
    filename: (req,file,cb) =>{
        cb(null, req.body.name);
    }
})

const upload = multer({storage:storage});
app.post('/api/upload', upload.single('file'),(req,res)=>{
    res.status(200).json('fill has been uploaded');
})



app.use(addCard);
app.use(subPost);
app.get('*',(req,res)=>{
    res.json({
        mgs: "api is not found!"
    })
})


//database connect 
mongoose.connect('mongodb://localhost:27017/cars')
.then(()=>{console.log('database connected')})
.catch(err=>{console.log(err)});

let port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`server is running at port ${port}`);
})