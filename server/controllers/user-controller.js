const _ = require('lodash');

const {User} = require('./../models/user');



exports.home=(req,res)=>{
  res.send({message:"home page"});
}




// exports.signup=(req,res)=>{
//   var body=_.pick(req.body,['email','password']);
//   var user=new User(body);
//   user.save().then(( )=>{
//   return user.generateAuthToken();
//   })
//   .then((token)=>{
//     res.header('x-auth',token).send({user,token:token});
//   })
//   .catch((e)=>{
//     res.status(400).send(e);
//   });
// }


exports.signup= async(req,res)=>{
try {
  var body=_.pick(req.body,['email','password']);
  var user= new User(body);
  await user.save();
  var token =await user.generateAuthToken();
  res.header('x-auth',token).send({user,token:token});

} catch (e) {
  res.status(400).send(e);
}

}


exports.login=(req,res)=>{
  var body=_.pick(req.body,['email','password']);

  User.findUserByCredentials(body.email,body.password).then((user)=>{
      return user.generateAuthToken().then((token)=>{
        res.header('x-auth',token).send({user,token:token});
      });
    res.send(user);
  }).catch((e)=>{
    res.sendStatus(400).send();
  });
}

exports.logout=(req,res)=>{
  req.user.removeToken(req.token).then(()=>{
    res.sendStatus(200).send();
  }).catch((e)=>{
    res.sendStatus(400).send();
  });
}




exports.loginWithToken=(req,res)=>{
    res.send(req.user);
}
