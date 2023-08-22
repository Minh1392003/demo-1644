var express = require('express');
const Toy1Models = require('../models/toy1Model');
const Toy2Models = require('../models/toy2Model');
const Toy3Models = require('../models/toy3Model');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index' );
});

router.get('/listcar', async (req, res) => {
  var tos1 = await Toy1Models.find({});
  res.render('listcar', { tos1: tos1 });
})

router.get('/listlego', async (req, res) => {
  var tos2 = await Toy2Models.find({});
  res.render('listlego', { tos2: tos2 });
})

router.get('/listplane', async (req, res) => {
  var tos3 = await Toy3Models.find({});
  res.render('listplane', { tos3: tos3 });
})

router.get('/detailproduct1/:id', async (req, res) => {
  const id = req.params.id;
  const detail = await Toy1Models.findById(id);
  res.render('detailproduct1', { detail: detail });
});

router.get('/detailproduct2/:id', async (req, res) => {
  const id = req.params.id;
  const detail1 = await Toy2Models.findById(id);
  res.render('detailproduct2', { detail1: detail1 });
});

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
  var products = await Toy1Models.find({name : new RegExp(searchName, "i")})
  res.render('toy1/toy1List', { products : products })
})

router.get('/sort/price/asc', async (req, res) => {
  var products = await Toy1Models.find().sort({price: 1})
  res.render('toy1/toy1List', { products : products })
})

router.get('/sort/price/desc', async (req, res) => {
  var products = await Toy1Models.find().sort({price: -1})
  res.render('toy1/toy1List', { products : products })
})

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
