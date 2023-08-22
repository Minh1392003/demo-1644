var express = require('express');
const Toy3Model = require('../models/toy3Model');
var router = express.Router();

router.get('/', async (req, res) => {
    var Toys3 = await Toy3Model.find();
    res.render('toy3/toy3List', { Toys3: Toys3 });
  });
  
  router.get('/delete/:id', async (req, res) => {
    // var id = req.params.id;
    // await StudentModel.findByIdAndDelete(id)
    // .then(console.log ("Delete student successfully !"))
    // .catch(err => console.log("Delete student failed !")); 
    // res.redirect('/student');
    await Toy3Model.findByIdAndDelete(req.params.id);
    res.redirect('/toy3');
  });
  
  router.get('/add', (req, res) => {
    res.render('toy3/toy3Add');
  });
  
  router.post('/add', async (req, res) => {
    var toy3 = req.body;
    await Toy3Model.create(toy3)
       .then(console.log('Add toy successfully !'))
       .catch(err => console.log(err));
    res.redirect('/toy3');
  });
  
  router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var toy3 = await Toy3Model.findById(id);
    res.render('toy3/toy3Edit', { toy3: toy3});
  });
  
  router.post('/edit/:id', async (req, res) => {
    // var id = req.params.id;
    // var student = req.body;
    await Toy3Model.findByIdAndUpdate(req.params.id, req.body)
       .then(console.log('Edit toy successfully !'))
       .catch(err => console.log(err));
   res.redirect('/toy3');
  });
  module.exports = router;