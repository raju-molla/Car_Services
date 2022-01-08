const express =require('express');
const router = express.Router();
const {subPost} =  require('../controller/subscribe/subs.js')
router.post('/sub', subPost);
module.exports= router