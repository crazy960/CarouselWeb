const express = require('express');
const router = express.Router();
const config = require('../config.json');
const jwt = require('jsonwebtoken');
const db = require('../Module/db');
const crypto = require('crypto');
const bcrypt = require('bcrypt');


async function createUser( username , email , password , ipAddr){
	
	var user = await db.User.findOne({ name : username });
	if(user)
		throw "user exist";
	

	user = new db.User({
		name : username ,
		email : email , 
		password : password
	});
	
	
	await user.save();
	
	
	const jwtToken = generateJasonWebToken(user);
	const refreshToken = generateRefreshToken( user , ipAddr);

	await refreshToken.save();
	
	return { user , jwtToken , refreshToken };
	
}

async function authenticateUser( username , password , ipAddr ){
	
	var user = await db.User.findOne( {
		name : username ,
	} );
	
	if(!user)
		throw "Can't Find User";
	console.log(user.comparePassword(password));
	if(!user.comparePassword(password))
		throw "password incorrect";
	
	const jwtToken = generateJasonWebToken(user);
	const refreshToken = generateRefreshToken( user , ipAddr);
	
	await refreshToken.save();
	
	console.log( 'dddsa')
	
	return { user , jwtToken , refreshToken };
	
}
async function findUser( username ){
	var user = await db.User.findOne({
		name : username
	});
	console.log("findUser"+user);
	if(!user)
		throw "Cant't Find User";
	
	console.log("findUser"+user);
	return user;
}

function generateRefreshToken( user , ipAddr){
	return new db.refreshToken({
		user : user.id ,
		token : generateRandomToken() ,
		createdByIp : ipAddr
	});
}

function generateJasonWebToken( user ){
	return jwt.sign( {id: user.id , sub: user.id} , config.secret , { expiresIn : '15m'});
	
}

function generateRandomToken(){
	return crypto.randomBytes(64).toString();
}

async function revokeToken( token , ipAddr ){
	var token = await db.refreshToken.findOne({
		token : token
	});
	
	if(!token)
		return;
	
	token.revoked = Date.now();
	token.revokedByIp = ipaddr;
	
	return;
	
}


module.exports = {
	create : createUser ,
	authenticate : authenticateUser  ,
	find : findUser ,
	revokeToken : revokeToken
}
