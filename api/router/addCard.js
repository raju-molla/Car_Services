const express = require('express');
const router = express.Router();
const  {card, getAll} = require('../controller/addCard/addCard.js')
router.post('/addCard', card);
router.get('/all', getAll);
module.exports=router;