
import axios from 'axios';

export function SendData(url , data ){
	const config = {
			headers : {
				"Content-Type" : "application/json"
			} ,
			withCredential : true
	}
	
	return axios.post( url , data , config);
}