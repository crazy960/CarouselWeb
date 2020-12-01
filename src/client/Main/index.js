import React , { Component } from 'react';
import styled from 'styled-components';
import Nav from '../component/Nav';
import NavSlide from '../component/NavSlide';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import NavbarContainer from '../container/NavbarContainer';

class Main extends Component {
	state = {
		userName : "",
		isLogin : false
	}
	constructor(props){
		super(props);
		
		this.onHandleLogout = this.onHandleLogout.bind(this);
		this.sendData = this.sendData.bind(this);
		
	}
	
	componentDidMount()
	{
		var user = localStorage.getItem('user');
		if(user){
			this.setState({ isLogin : true});
			
		}
	}

	shouldComponentUpdate( nextProps , nextState){
		console.log("shouldComponentUpdate");
		if(this.state.isLogin === nextState.isLogin)
			return false;
		else
			return true;
	}

	sendData(){
		var info = localStorage.getItem('user');
		const url = "/api/users/logout";
		const logout = {
			name : info
		};
		
		const config = {
			headers : {
				"Content-Type" : "application/json"
			} , 
			withCredentials : true
		}
		
		return axios.post( url , logout , config);
	}

	onHandleLogout(){
		console.log("main logout");
		
		this.sendData()
		.then( function(response){
			console.log(response.status);
			localStorage.removeItem('user');
			this.setState({ isLogin : false});

			
			
		}.bind(this) , function(reject){
			console.log("reject");
			console.log(reject);
			
		})
	}
	

	render(){
		var nav;
		/*
		if(this.state.isLogin)
		{
			var user = localStorage.getItem('user');
			nav = (<Nav isLogin = {this.state.isLogin} user = { user } onHandleLogout = {this.onHandleLogout } ></Nav> );
		}
		else
			nav = (<Nav isLogin = {this.state.isLogin}></Nav> );
			*/
		nav = (<NavbarContainer></NavbarContainer>)

		return(
				<div>
					{nav}
					<NavSlide></NavSlide>
				</div>
		);
			
		
		
	}
}

export default Main;
