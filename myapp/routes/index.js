const express = require('express');
const libro = require('../models/schemas');
const router = express.Router();
const Libro = require('../models/schemas');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', async (req,res)=>{
  const libros = await libro.find();
  try{
    res.render('index', {
      libros});
  } catch (error){
    res.status(500).send(error);
  }
});

router.get('/libros', function(req, res, next) {
  res.render('index', { title: 'Libros' });
});
module.exports = router;
