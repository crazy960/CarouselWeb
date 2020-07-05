import React , { Component } from 'react';
import styled , { createGlobalStyle } from 'styled-components';

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

const Form = styled.form`
    width : 100%;
	
`
const Text = styled.h1`
    font-size : 1.6rem;
	font-weight : 400;
`

const Input = styled.input`
	min-width : 300px;
	min-height : 40px;
	border-radius : ${props=>props.BorderRadius || "0"}
	border : 0;
	&::placeholder {
		color : gray;
	}
	&::focus{
		outline :10px solid;
        border-color : rgba(108,108,200,0.8);
	
	}
`
const Button = styled.button`
	min-width : 310px;
	min-height : 45px;
	background-color : rgb(0,123,255);
	cursor : pointer;
	border : 0;
	color : white;
	border-radius : 5px;
	font-size : 1.1rem;
	&:hover{
		background-color : rgb(0,105,217);
	
	}
`

class Login extends Component {
	
	render(){
		return(
			<Container>
				<GlobalStyle/>
				<Form>
					<Text>Please sign in</Text>
					<Input type="text" placeholder = "Email address"></Input><br/>
					<Input type="password"  placeholder = "Password"></Input><br/>
					<Button>Sign in</Button>
				</Form>
				
			</Container>);
	}
}

export default Login;