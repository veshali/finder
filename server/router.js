const express = require('express');

const {ObjectId} = require('mongodb');
const _ = require('lodash');
var{mongoose}= require('./db/mongoose');
var{User}= require('./models/user');
var{authenticate}= require('./middleware/authenticate');
var userController=require('./controllers/user-controller');
var restaurentcontroller=require('./controllers/restaurent-controller');
var itemcontroller=require('./controllers/item-controllers');

const router=express.Router();

router.get('/',userController.home);

// signup request
router.post('/signup',userController.signup);

//login request

router.post('/login',userController.login);

//logout request
router.delete('/users/me/logout',authenticate,userController.logout);


//profile with token
router.get('/users/me',authenticate,userController.loginWithToken);

router.post('/addrestaurent',restaurentcontroller.addrestaurent);

router.get('/home',restaurentcontroller.home);

router.post('/additem',itemcontroller.additem);

router.get('/homeItem',itemcontroller.homeItem);

module.exports=router;
