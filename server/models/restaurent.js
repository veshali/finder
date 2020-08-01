const mongoose = require('mongoose');
const _ = require('lodash');


var RestaurentSchema=new mongoose.Schema({

name:{
  type:String,
  minlength:1,
  required:true,
},
ratings:{
  type:String,
  minlength:1,
  required:true,
},
address:{
  type:String,
  minlength:1,
  required:true,
}
});


var Restaurent=mongoose.model('restaurent',RestaurentSchema);

module.exports={Restaurent};
