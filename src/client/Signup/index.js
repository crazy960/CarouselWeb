import React , { Component } from 'react';
import styled , { createGlobalStyle }from 'styled-components';
import { Redirect } from 'react-router-dom';
import  axios from 'axios';

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
	height : 310px;
`
const Button = styled.button`
	
	background-color : rgb(73,193,162);
	width : 340px;
	height : 50px;
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
	
	state = {
		username : "" ,
		useremail : "" , 
		userpassword : "" ,
		
		isNameValid : false ,
		isEmailValid : false ,
		isPasswordValid : false ,
		
		redirect : false

	}

	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.sendData = this.sendData.bind(this);
	
		
	}

	sendData(){
		const url = "/api/users"
		const signUp = {
			name : this.state.username ,
			email : this.state.useremail ,
			password : this.state.userpassword
			
		}
		
		const config = {
			headers : {
			"Content-Type"  : "application/json"
			}
		}
		
		return axios.post(url , signUp , config);
		
		
	}

	handleSubmit(e){
		
		e.preventDefault();
		
		this.sendData()
		.then( function(response){
			console.log("success");
			console.log(response.data);
			console.log(response.status);
			
			this.setState({
				redirect : true
			})
			
			
			
		}.bind(this) , function(reject){
			console.log("reject");
			console.log(reject);
			
		})
		.catch(function(err){
			console.log("err");
			if(err.response){
				console.log(err.response.data);
			}
			else if(err.request){
				console.log(err.request);
			}
			else{
				console.log(err.message);
			}
		});;
		
		

		
		
	}

	handleNameChange(e){

		if(e.target.value.length > 1)
			this.setState({
				isNameValid : true ,
				username : e.target.value
			});
		else
			this.setState({
				isNameValid : false ,
				username : e.target.value
			});
		
		
	}
	handleEmailChange(e){

		if(e.target.value.indexOf("@") >= 0)
			this.setState({
				isEmailValid : true ,
				useremail : e.target.value
			});
		else
			this.setState({
				isEmailValid : false ,
				useremail : e.target.value
			});
		
		
	}
	handlePasswordChange(e){

		if(e.target.value.length > 8)
			this.setState({
				isPasswordValid : true ,
				userpassword : e.target.value
			});
		else
			this.setState({
				isPasswordValid : false ,
				userpassword : e.target.value
			});
		

	}

	

	render(){
		if(this.state.redirect)
		{
			return <Redirect to ="/"/>
		}
		return(<Container>
				<GlobalStyle/>
				
					<FormContainer onSubmit = {this.handleSubmit}>
						<Top>
							<div>
								<Text FontSize="30px" FontWeight="700" Width = "340px">Sign Up</Text>
								<Text Color="rgb(155,173,199)" Width = "340px">it's free and only take a minutes</Text>
							</div>
						</Top>
						<InputBoxContainer>
							<InputBox Top = "20px">
								<Text Color="rgb(155,173,199)" Width = "340px" Margin="0 0 10px 0">Username</Text>
								<Input value = {this.state.username} onChange = {this.handleNameChange} name = "username"></Input>
							</InputBox>
							<InputBox Top = "20px">
								<Text Color="rgb(155,173,199)" Width = "340px" Margin="0 0 10px 0">Email</Text>
								<Input value = {this.state.useremail} onChange = {this.handleEmailChange} name = "useremail"></Input>
							</InputBox>
							<InputBox Top = "20px">
								<Text Color="rgb(155,173,199)" Width = "340px" Margin="0 0 10px 0">Password</Text>
								<Input value = {this.state.password} onChange = {this.handlePasswordChange} name = "userpassword"></Input>
							</InputBox>
						
						</InputBoxContainer>
						<br/>
						<Button>Sign up</Button>
					
					</FormContainer>

				
			  </Container>);
	}
}

export default Signup;