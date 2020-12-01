import React , { Component , useEffect  } from 'react';
import styled  from 'styled-components';


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
		font-size : 15px;
		padding-left : 5px;
	}
	&:focus{
		outline :5px solid;
        outline-color : rgba(0,123,255,0.3);
		font-color : black;
		z-index:10;
		position : relative;
	
	}
`

const Button = styled.button`
	margin-top : 10px;
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

const LoginForm = ( { name  , password , onChangeName , onChangePassword , onSubmit }) => {
	
	return(	
		<Form onSubmit = { onSubmit}>
			<img src ="/login.svg" width = "100px"></img>
			<Text>Please sign in</Text>
			<Input type="text" placeholder = "Username" BorderRadius = "10px 20px 30px" value = { name } onChange = { onChangeName }></Input><br/>
			<Input type="password"  placeholder = "Password" value = { password } onChange = { onChangePassword }></Input><br/>
			<Button>Sign in</Button>
		</Form>);
}

export default LoginForm;