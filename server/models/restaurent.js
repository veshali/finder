const mongoose = require('mongoose');
const _ = require('lodash');


var RestaurentSchema=new mongoose.Schema({

userId:{
type:mongoose.Schema.Types.ObjectId,
ref:'users'
},

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


RestaurentSchema.statics.findRestaurentByUserId=function  (userId) {
var Restaurent=this;

var res= Restaurent.findOne({
  'userId':userId,
});
return res;

}

var Restaurent=mongoose.model('restaurent',RestaurentSchema,'restaurents');

module.exports={Restaurent};
