var mongoose = require('mongoose');


var tokenSchema = mongoose.Schema({
	user : { type : mongoose.Schema.Types.ObjectId , ref : "user"} ,
	expireAt : { type : Date , default : Date.now , index : { expires : '7d'} } , // TT: 
	token : String ,
	created : { type : Date , default : Date.now} ,
	createdByIp : String ,
	revoked : Date ,
	revokedByIp : String ,
	replacedByToken : String
});


module.exports = mongoose.model('refreshToken',tokenSchema);


