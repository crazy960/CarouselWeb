import React , { Component } from 'react';
import styled from 'styled-components';
import Nav from '../component/Nav';
import NavSlide from '../component/NavSlide';


class Main extends Component {
	state = {
		buttons : [
			{
				text : "Log In" ,
				path : "login"
			},
			{
				text : "Sign Up" ,
				path : "signup"
			}
		]
	}	
	render(){
		return(
			<div>
				<Nav btns = {this.state.buttons}></Nav>
				<NavSlide></NavSlide>
			</div>
		);
	}
}

export default Main;
