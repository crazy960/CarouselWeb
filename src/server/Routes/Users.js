var express = require('express');

var router = express.Router();

var User = require('../Model/userModel');
const userService = require('../Service/User.Service');

router.post('/create' ,  create );
router.post('/authenticate' , authenticate);
router.post('/logout' , logout );

function create( req , res , next ){
	userService.create(req.body.name , req.body.email , req.body.password , req.ip)
	.then( function(resolve){
		
		const jwtCookieOptions = {
			httpOnly : true ,
			expires : new Date( Date.now() + 1000*60*15) // 15m
		};
		const refreshCookieOptions = {
			httpOnly : true ,
			expires : new Date( Date.now() + 1000*60*60*24*7) // 7d 
		};
		res.cookie('jwt' , resolve.jwtToken , jwtCookieOptions );
		res.cookie('refresh' , resolve.refreshToken , refreshCookieOptions);
		res.json(resolve.user.name);
	})
	.catch(next);
	
	
}

function authenticate( req , res , next ){
	userService.authenticate( req.body.name , req.body.password , req.ip)
	.then( function(resolve){
		const jwtCookieOptions = {
			httpOnly : true ,
			expires : new Date( Date.now() + 1000*60*15)
		};
		const refreshCookieOptions = {
			httpOnly : true ,
			expires : new Date( Date.now() + 1000*60*60*24*7)
		};
		
		res.cookie( 'jwt' , resolve.jwtToken , jwtCookieOptions);
		res.cookie( 'refresh' , resolve.refreshToken , refreshCookieOptions);
		res.json(resolve.user.name);
	})
	.catch(next);
}

function logout ( req , res , next ){
	console.log('logout' );
	console.log(req.body.name );
	const jwtCookieOptions = {
		httpOnly : true ,
		expires : new Date( Date.now())
	};
	const refreshCookieOptions = {
		httpOnly : true ,
		expires : new Date( Date.now())
	};
	userService.revokeToken( req.cookies.refresh , req.ip);
	userService.find(req.body.name)
	.then( function(resolve){
		res.clearCookie( 'jwt' , jwtCookieOptions );
		res.clearCookie( 'refresh' , refreshCookieOptions);
		res.sendStatus(200);
	})
	.catch(next);
	
}

module.exports = router;