var mongoose = require('mongoose');
mongoose.promise=global.promise;

const mongodb_url=process.env.MONGO_URL || 'mongodb://localhost:27017/Finder';
//const mongodb_url='mongodb+srv://veshali:veshali123@cluster0.udgco.gcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongodb_url,{ useNewUrlParser: true ,useUnifiedTopology: true, useCreateIndex: true,},()=>{
  console.log(" mongodb connceted successfully : ",mongodb_url);
});

module.exports={mongoose};






/*



  signIn(String email, pass) async {

    SharedPreferences sharedPreferences = await SharedPreferences.getInstance();
    final data=jsonEncode({
      'email': email,
      'password': pass
    });

    var jsonResponse = null;
    var response = await http.post("https://finder-api.herokuapp.com/login",headers:{"Content-type": "application/json"}, body: data);

    print("enter: "+response.body);

    if(response.statusCode ==200)  {
      jsonResponse = json.decode(response.body);
      if(jsonResponse != null) {
        setState(() {
          _isLoading = false;
        });
        sharedPreferences.setString("token", jsonResponse['token']);
        Navigator.of(context).pushAndRemoveUntil(MaterialPageRoute(builder: (BuildContext context) => MainPage()), (Route<dynamic> route) => false);
      }
    }
    else {
      setState(() {
        _isLoading = false;
      });
      print(response.body);
    }
  }


*/