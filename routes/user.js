const { response } = require('express');
var express = require('express');
var router = express.Router();
var producthelper = require('../helpers/product-helpers')
var userhelper =require('../helpers/user-helpers')


/* GET home page. */
router.get('/', function (req, res, next){

  producthelper.getAllproducts().then((products)=>{
    res.render('user/view products', { products })

  })
  
});
router.get('/login',(req,res)=>{
  res.render('user/login')

})
router.get('/signup',(req,res)=>{
  res.render('user/signup')

})
router.post('/signup',(req,res)=>{
  userhelper.doSignup(req.body).then((response)=>{
    console.log(response);
  
  })
})
router.post('/login',(req,res)=>{
  userhelper.doLogin(req.body).then((response)=>{
    if(response.status){
      res.redirect('/')
    }else{
      res.redirect('/login')
    }

  })

})
module.exports = router;
