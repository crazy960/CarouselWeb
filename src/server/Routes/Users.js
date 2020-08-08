var express = require('express');

var router = express.Router();

var User = require('../Model/userModel');

router.post('/' , function(req , res){
	console.log("Create Users");
	console.log(req.body);
	User.create({
		name : req.body.name ,
		email : req.body.email ,
		password : req.body.password
	} , function(err , user){
		if(err){
			//console.log(err);
			res.sendStatus(400);
		}
		else{
			//console.log(user);
			res.sendStatus(201);
		}
			
	})
	
	
	
});


module.exports = router;