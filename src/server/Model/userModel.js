var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name : String ,
	password : { type : String , trim : true } ,
	date : { type : Date , default : Date.now } ,
	email : { type : String , unique : true}
	
});


var User = mongoose.model('user' ,userSchema);

module.exports = User;