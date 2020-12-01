import React , { Component , useEffect , useState  } from 'react';
import LoginForm from '../component/LoginForm'

const LoginFormContainer = ({ onHandleLogin }) => {
	
	const [ name , setName ] = useState("");
	const [ password , setPassword ] = useState("");
	
	
	return(<LoginForm name = { name } password = { password } 
			   onChangeName = { e =>setName(e.target.value) } onChangePassword = { e=>setPassword(e.target.value) } 
			   onHandleSubmit = { onHandleLogin } />);
}


export default LoginFormContainer;