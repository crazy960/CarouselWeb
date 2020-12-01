const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const config = require('./config.json');
const db = require('./Module/db');
const errHandler = require('./Module/errorHandler');
const PORT = 10050;

app.use(bodyparser.json());
app.use( bodyparser.urlencoded({ extended: true }));
app.use(cookieparser());


app.use(function (req, res, next) { // 1
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true'); 
  next();
});



app.use('/api/users' , require('./Routes/Users'));

app.use(errHandler);


 
app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
})