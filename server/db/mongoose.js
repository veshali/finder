var mongoose = require('mongoose');
mongoose.promise=global.promise;

//const mongodb_url=process.env.MONGODB_URI || 'mongodb://localhost:27017/Finder';
const mongodb_url='mongodb+srv://veshali:veshali123@cluster0.udgco.gcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongodb_url,{ useNewUrlParser: true ,useUnifiedTopology: true, useCreateIndex: true,},()=>{
  console.log(" mongodb connceted successfully : ",mongodb_url);
});

module.exports={mongoose};
