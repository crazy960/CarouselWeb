var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Role = require('../Module/Role')

var userSchema = new mongoose.Schema({
	name : { type : String , unique : true } ,
	password : { type : String  } ,
	email : { type : String } ,
	date : { type : Date , default : Date.now } ,
	role : { type : String , default : Role.User }
	
});

userSchema.pre('save' , function(next){
	var user = this;
	if(this.isModified('password')){
		bcrypt.genSalt( 10 , function(err , salt){
			
			if(err)
				return next(err);
			
			bcrypt.hash( user.password , salt , function(err , hash){

				if(err)
					return next(err);

				user.password = hash;
				next();
			});
			
		});
		
	}
});




userSchema.method('comparePassword' , function(plainText){

	return bcrypt.compareSync(plainText , this.password );
		
	
});


module.exports = mongoose.model('user' ,userSchema);

