const mongoose = require('mongoose');
const config = require('../config.json');


// mongodb 에서 use test 로 test db 생성 후
// db.createUser({ user : "root" , pwd : "1234" , roles : ["dbOwner"]}) 로 root 유저 생성함
mongoose.connect( config.DBConnectionString , { useNewUrlParser : true , user : config.DBUser , pass : config.DBPass } ,
				function(err){
					if(err)
						console.log("mongoose connection err");
					else
						console.log("mongoose connection success!!");
});

module.exports = {
	User : require('../Model/userModel') ,
	refreshToken : require('../Model/refreshTokenModel')
}