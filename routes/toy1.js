var express = require('express');
const Toy1Model = require('../models/toy1Model');
var router = express.Router();

router.get('/', async (req, res) => {
    var Toys1 = await Toy1Model.find();
    res.render('toy1/toy1List', { Toys1: Toys1 });
  });
  
  router.get('/delete/:id', async (req, res) => {
    // var id = req.params.id;
    // await StudentModel.findByIdAndDelete(id)
    // .then(console.log ("Delete student successfully !"))
    // .catch(err => console.log("Delete student failed !")); 
    // res.redirect('/student');
    await Toy1Model.findByIdAndDelete(req.params.id);
    res.redirect('/toy1');
  });
  
  router.get('/add', (req, res) => {
    res.render('toy1/toy1Add');
  });
  
  router.post('/add', async (req, res) => {
    var toy1 = req.body;
    await Toy1Model.create(toy1)
       .then(console.log('Add toy successfully !'))
       .catch(err => console.log(err));
    res.redirect('/toy1');
  });
  
  router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var toy1 = await Toy1Model.findById(id);
    res.render('toy1/toy1Edit', { toy1: toy1 });
  });
  
  router.post('/edit/:id', async (req, res) => {
    // var id = req.params.id;
    // var student = req.body;
    await Toy1Model.findByIdAndUpdate(req.params.id, req.body)
       .then(console.log('Edit toy successfully !'))
       .catch(err => console.log(err));
   res.redirect('/toy1');
  });

  router.post('/search', async (req, res) => {
    var searchName = req.body.keyword
    var products = await Toy1Model.find({name : new RegExp(searchName, "i")})
    res.render('/toy1list', { products : products })
  })
  
  router.get('/sort/price/asc', async (req, res) => {
    var products = await Toy1Model.find().sort({price: 1})
    res.render('/toy1list', { products : products })
  })
  
  router.get('/sort/price/desc', async (req, res) => {
    var products = await Toy1Model.find().sort({price: -1})
    res.render('/toy1list', { products : products })
  })
  module.exports = router;