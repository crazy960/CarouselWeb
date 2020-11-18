import React , { Component } from 'react';
import styled , { createGlobalStyle } from 'styled-components';
import { SendData } from '../component/Utils';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

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



class Login extends Component {
	state = {
		userName : "" ,
		userPwd : "" ,
		isLogin : false
	}
	constructor(props){
		super(props);

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
	}

	componentDidMount()
	{
		var user = localStorage.getItem('user');
		if(user)
			this.setState({ isLogin : true});
	}

    handleSubmit(e)
	{
		e.preventDefault();
		
		const url = "/api/users/authenticate";
		
		const userinfo = {
			name : this.state.userName ,
			password : this.state.userPwd
		}
		
		
		SendData(url , userinfo)
		.then(function(response){
			localStorage.setItem('user',response.data);
			this.setState({ isLogin : true});
			
			
		}.bind(this) , function(reject){
			
		})
		.catch(function(err){
			
		})
	/*
	host.sendData()
	.then(function(response){
		localStorage.setItem('user',response.data);
		this.setState({ isLogin : true});
			
			
	}.bind(host) , function(reject){
			
	})
	.catch(function(err){
			
	})
	*/
	}
	
	
	handleNameChange(e){
		
		this.setState({
			userName : e.target.value
		})
		
		
	}
	handlePasswordChange(e){

		this.setState({
			userPwd : e.target.value
		});
		
	}
/*
	handleSubmit(e){
		e.preventDefault();
		
		this.sendData()
		.then(function(response){
			localStorage.setItem('user',response.data);
			this.setState({ isLogin : true});
			
			
		}.bind(this) , function(reject){
			
		})
		.catch(function(err){
			
		})
		
		
	
	}
	*/
	
	render(){
		if(this.state.isLogin)
		{
			return(<Redirect to = '/'/>);
		}
		return(
			<Container>
				<GlobalStyle/>
				<Form onSubmit = {this.handleSubmit}>
					<img src ="/login.svg" width = "100px"></img>
					<Text>Please sign in</Text>
					<Input type="text" placeholder = "Username" BorderRadius = "10px 20px 30px" value = { this.state.userName } onChange = { this.handleNameChange }></Input><br/>
					<Input type="password"  placeholder = "Password" value = { this.state.userPwd } onChange = { this.handlePasswordChange }></Input><br/>
					<Button>Sign in</Button>
				</Form>
				
			</Container>);
	}
}

export default Login;