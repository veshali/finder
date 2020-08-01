const _ = require('lodash');


const {Restaurent} = require('./../models/restaurent')



exports.addrestaurent=async(req,res)=>{

try {
  var body=_.pick(req.body,['name','address','ratings']);
  var restaurent= new Restaurent(body);
  await restaurent.save();
  res.send(body);

} catch (e) {
  res.status(400).send(e);
}

}


exports.home=async(req,res)=>{
	try{
		var body=await Restaurent.find();
		res.send({body});
	}
	catch(e)
	{
		 res.status(400).send(e);
	}
}