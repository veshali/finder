const _ = require('lodash');


const {Item} = require('./../models/Items')



exports.additem=async(req,res)=>{

try {
  var body=_.pick(req.body,['name','category','price','photo']);
  var item= new Item(body);
  await item.save();
  res.send(body);

} catch (e) {
  res.status(400).send(e);
}

}


exports.homeItem=async(req,res)=>{
	try{
		var body=await Item.find();
		res.send({body});
	}
	catch(e)
	{
		 res.status(400).send(e);
	}
}