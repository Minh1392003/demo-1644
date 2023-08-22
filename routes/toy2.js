var express = require('express');
const Toy2Model = require('../models/toy2Model');
var router = express.Router();

router.get('/', async (req, res) => {
    var Toys2 = await Toy2Model.find();
    res.render('toy2/toy2List', { Toys2: Toys2 });
  });
  
  router.get('/delete/:id', async (req, res) => {
    // var id = req.params.id;
    // await StudentModel.findByIdAndDelete(id)
    // .then(console.log ("Delete student successfully !"))
    // .catch(err => console.log("Delete student failed !")); 
    // res.redirect('/student');
    await Toy2Model.findByIdAndDelete(req.params.id);
    res.redirect('/toy2');
  });
  
  router.get('/add', (req, res) => {
    res.render('toy2/toy2Add');
  });
  
  router.post('/add', async (req, res) => {
    var toy2 = req.body;
    await Toy2Model.create(toy2)
       .then(console.log('Add toy successfully !'))
       .catch(err => console.log(err));
    res.redirect('/toy2');
  });
  
  router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var toy2 = await Toy2Model.findById(id);
    res.render('toy2/toy2Edit', { toy2: toy2});
  });
  
  router.post('/edit/:id', async (req, res) => {
    // var id = req.params.id;
    // var student = req.body;
    await Toy2Model.findByIdAndUpdate(req.params.id, req.body)
       .then(console.log('Edit toy successfully !'))
       .catch(err => console.log(err));
   res.redirect('/toy2');
  });


  module.exports = router;