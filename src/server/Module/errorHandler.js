const express = require('express');


function errorHandler( err , req , res , next ){
	switch(true){
		case typeof err === 'string':
			res.sendStatus(404);
			break;
		default :
			res.sendStatus(404);
			break;
	}
}


module.exports = errorHandler;