import React , { Component } from 'react';
import styled , { createGlobalStyle }from 'styled-components';

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
	background-color : rgb(52,74,113);
	align-items : center;
	justify-content : center;
	display : flex;
	position : fixed;
	
`
const FormContainer = styled.form`
	width : 400px;
	height : 650px;
	background-color : white;
	position : relative;
	border : 0;
	border-radius : 4px;
`

const Top = styled.div`

	width : 100%;
	height : 120px;
	border-bottom : 1px solid;
	border-color : rgb(155,173,199);

	display : flex;
	justify-content : center;
	align-items : center;

`
const Input = styled.input`
	width : 330px;
	height : 40px;
	border-radius : 4px;
	border : 1px solid rgb(155,173,199);
	&:focus{
		box-shadow : 0px 0px 3px 5px rgba(191,222,255,0.7);
		outline : none;
	}
`
const Text = styled.div`
	margin : ${props=>props.Margin || "0"};
	color :  ${props=>props.Color || "black"};
	text-align : left;
	font-size : ${props=>props.FontSize || "15px"};
	font-weight : ${props=>props.FontWeight || "normal"};
	width : ${props=>props.Width || "100%"};
`


const InputBox = styled.div`
	display : flex;
	flex-direction : column;
	justify-content : center;
	align-items : center;
	margin-top : ${props=>props.Top || "0"};
	margin-bottom : ${props=>props.Bottom || "0"};
	
`

const InputBoxContainer = styled.div`
	display : flex;
	flex-direction : column;
	height : 400px;
`
const Button = styled.button`
	
	background-color : rgb(73,193,162);
	width : 340px;
	height : 40px;
	border : 0;
	color : white;
	border : 0;
	border-radius : 4px;
	font-size : 16px;
	font-weight : 700;
	&:hover
	{
		background-color : rgb(60,176,148);
		cursor : pointer;
	}
	
`

class Signup extends Component {
	render(){
		return(<Container>
				<GlobalStyle/>
				<FormContainer>
					<Top>
						<div>
							<Text FontSize="30px" FontWeight="700" Width = "340px">Sign Up</Text>
							<Text Color="rgb(155,173,199)" Width = "340px">it's free and only take a minutes</Text>
						</div>
					</Top>
					<InputBoxContainer>
						<InputBox Top = "20px">
							<Text Color="rgb(155,173,199)" Width = "340px" Margin="0 0 10px 0">Username</Text>
							<Input></Input>
						</InputBox>
						<InputBox Top = "20px">
							<Text Color="rgb(155,173,199)" Width = "340px" Margin="0 0 10px 0">Email</Text>
							<Input></Input>
						</InputBox>
						<InputBox Top = "20px">
							<Text Color="rgb(155,173,199)" Width = "340px" Margin="0 0 10px 0">Password</Text>
							<Input></Input>
						</InputBox>
						<InputBox Top = "20px">
							<Text Color="rgb(155,173,199)" Width = "340px" Margin="0 0 10px 0">Confirm Password</Text>
							<Input></Input>
						</InputBox>
					</InputBoxContainer>
					<br/>
					<Button>Sign up</Button>
					
				</FormContainer>
				
			  </Container>);
	}
}

export default Signup;