import { SendData } from '../component/Utils';
import axios from 'axios';

// 액션타입 정의
export const AUTHENTICATE = 'Navbar/AUTHENTICATE';
export const AUTHENTICATED_SUCCESS = 'Navbar/AUTHENTICATED_SUCCESS';
export const AUTHENTICATE_REQUEST = 'Navbar/AUTHENTICATE_REQUEST';
export const AUTHENTICATE_FAILURE = 'Navbar/AUTHENTICATE_FAILURE';

export const LOGOUT = 'Navbar/LOGOUT';
export const LOGOUT_SUCCESS = 'Navbar/LOGOUT_SUCCESS';
export const LOGOUT_REQUEST = 'Navbar/AUTHENTICATE_REQUEST';
export const LOGOUT_FAILURE = 'Navbar/AUTHENTICATE_FAILURE';





// 액션 생성 함수 정의
export const Autenticate = () => ({ type : AUTHENTICATE });
export const Autenticated_Success = ( user ) => ({ type : AUTHENTICATED_SUCCESS  , payload : user });
export const Autenticate_Request = () => ({ type : AUTHENTICATE_REQUEST});
export const Autenticate_Failure = () => ({ type : AUTHENTICATE_FAILURE });

export const Logout = () => ({ type : LOGOUT });
export const Logout_Success = () => ({ type : LOGOUT_SUCCESS });
export const Logout_Request = () => ({ type : LOGOUT_REQUEST});
export const Logout_Failure = () => ({ type : LOGOUT_FAILURE });


export const Logout_Async = () => async (dispatch , getState) =>{
	dispatch(Logout_Request);
	console.log('async_logout')
	try{
		var info = localStorage.getItem('user');
		var url = "/api/users/logout"
		var response = await axios.post( url , { info } , { headers:{ "Content-Type" : "application/json"} , withCredential : true });
		//await SendData( "/api/users/logout" , info  );
		console.log(response);
		dispatch(Logout_Success);
	}catch{
		dispatch(Logout_Failure);
	}
	
}
