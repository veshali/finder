const mongoose = require('mongoose');
const _ = require('lodash');


var ItemSchema=new mongoose.Schema({

name:{
  type:String,
  minlength:1,
  required:true,
},
category:{
  type:String,
  minlength:1,
  required:true,
},
price:{
  type:String,
  minlength:1,
  required:true,
},
photo:{
	type:String,
	required:true,
	default:"123.jpg",
}
});


var Item=mongoose.model('item',ItemSchema);

module.exports={Item};
