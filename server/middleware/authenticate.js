var{User}= require('./../models/user');

var authenticate=(req,res,next)=>{
  var token=req.header('x-auth');

  User.findUserByToken(token).then((user)=>{
    if(!user)
  return Promise.reject();

  req.user=user;
  req.token=token;
  next();
    // res.send(user);

  }).catch((e)=>{
    res.sendStatus(401).send();
  });
}

module.exports={authenticate};
