import React from 'react';
import { Component } from 'react';
import  axios from 'axios';

class AppTest extends React.Component {
	state = {
		userName : "" ,
		userEmail : "" ,
		userPassword : ""
	}

	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.addData = this.addData.bind(this);
		
	}


	addData(){
		const url = '/api';
		/* // multi-part data 를 전송할 때 사용한다.
		const sendData = new FormData();
		sendData.append('name' , this.state.userName);
		sendData.append('email' , this.state.userEmail);
		*/
		const sendData = {
			name : this.state.userName ,
			email : this.state.userEmail , 
			password : this.state.userPassword
		}
		
		const config = {
			headers: {
	
			'Content-Type': 'application/json'
			}
		}
		
		return axios.post(url , sendData ,config);
		
		
		
	}

	handleSubmit(e){
		e.preventDefault();
		this.addData()
		.then(function(response){
			 console.log(response.data);
		} , function(reject){
			 console.log(reject.data);
		})
		
		return false;
		
	}


	handleValueChange(e){
		let changeValue = {};
		changeValue[e.target.name] = e.target.value;
		this.setState(changeValue);
		
	}
	
	render(){
		return(
			<form onSubmit = {this.handleSubmit}>
				<h1>test http </h1>
				이름: <input type="text" name="userName" value ={this.state.name} onChange = {this.handleValueChange.bind(this)} /><br/>
				이메일 : <input type='text' name="userEmail" value = {this.state.email} onChange = {this.handleValueChange.bind(this)}/><br/>
				비밀번호 : <input type='text' name="userPassword" value = {this.state.password} onChange = {this.handleValueChange.bind(this)}/><br/>
				<button type = 'submit'>submit</button>

				
			</form>
		);
	}
}

export default AppTest;