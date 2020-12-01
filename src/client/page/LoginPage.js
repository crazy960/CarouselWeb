import React ,{ Component , useEffect , useState } from 'react';
import styled , { createGlobalStyle } from 'styled-components';
import { SendData } from '../component/Utils';
import { Redirect } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import * as NavActions from '../actions/Navbar';
import LoginFormContainer from '../container/LoginFormContainer';


const GlobalStyle = createGlobalStyle`
body {
	margin : 0;
	padding : 0;
    width : 100%;
    height : 100%;

}
`

const Container = styled.div`
	width : 100vw;
	height : 100vh;
	background-color : rgb(245,245,245);
    align-items : center;
    margin : 0;
    position : fixed;
	display : flex;
`


const LoginPage = () => {
	
	
	const dispatch = useDispatch();
	const isauthenticated = useSelector(state => state.Navbar.authenticated);
	
	useEffect(()=>{
		if(isauthenticated)
			return(<Redirect to = '/' />);
			
	});
	
	const handleSubmit = async(e) => {
		/*
		e.preventDefault();
		try{
			const response = await SendData( "/api/users/authenticate" ,  { name : name , password : password });
			console.log(response);
			localStorage.setItem("user",response.data);
			dispatch(NavActions.Autenticated_Success(response.data));
			//return(<Redirect to = '/' />)
		}
		catch{
			console.log("aa");
		}
		*/
	}
	
	
	return(
		<Container>
			<GlobalStyle/>
				<LoginFormContainer />
		</Container>);
	
	
	
}

export default LoginPage;