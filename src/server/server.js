const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const PORT = 10050;

app.use(bodyparser.json());
app.use( bodyparser.urlencoded({ extended: true }));

app.use(function (req, res, next) { // 1
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
	console.log(req.body);
  next();
});
 
app.post('/api',(req,res)=>{
	
	console.log(req.body);
	res.sendStatus(200);

});

app.get('/',(req,res)=>{
	
	console.log(req.query);
	res.sendStatus(200);

})
 
app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
})