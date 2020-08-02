const _ = require('lodash');


const {Item} = require('./../models/Items')
const {Restaurent} = require('./../models/restaurent')
const {User} = require('./../models/user')



exports.additem=async(req,res)=>{

try {
	var user=await User.findUserByToken(req.headers['x-auth']);
	var restaurent=await Restaurent.findRestaurentByUserId(user._id);
	req.body.restaurentId=restaurent._id;
  var body=_.pick(req.body,['name','category','price','photo','restaurentId']);
  var item= new Item(body);
  await item.save();
  res.send(body);

} catch (e) {
  res.status(400).send(e);
}


}


exports.homeItem=async(req,res)=>{
	try{
		var body=await Item.find({restaurentId:req.params.id});
		res.send({body});
	}
	catch(e)
	{
		 res.status(400).send(e);
	}
}