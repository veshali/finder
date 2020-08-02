const _ = require('lodash');


const {Restaurent} = require('./../models/restaurent')
const {User} = require('./../models/user')




exports.addrestaurent=async(req,res)=>{

try {
	var user=await User.findUserByToken(req.headers['x-auth']);
	req.body.userId=user._id;
	console.log(req.body);
  var body=_.pick(req.body,['name','address','ratings','userId']);
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