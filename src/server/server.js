const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const PORT = 10050;

app.use(bodyparser.json());
app.use( bodyparser.urlencoded({ extended: true }));

app.use(function (req, res, next) { // 1
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// mongodb 에서 use test 로 test db 생성 후
// db.createUser({ user : "root" , pwd : "1234" , roles : ["dbOwner"]}) 로 root 유저 생성함
mongoose.connect('mongodb://127.0.0.1:27017/test' , { useNewUrlParser : true , user : 'root' , pass : '1234' } ,
				function(err){
					if(err)
						console.log("mongoose connection err");
					else
						console.log("mongoose connection success!!");
})
 /*
app.post('/api/users',(req,res)=>{
	
	console.log(req.body);
	res.sendStatus(200);

});
*/

app.use('/api/users' , require('./Routes/Users'));


 
app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
})