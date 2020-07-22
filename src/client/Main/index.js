import React , { Component } from 'react';
import styled from 'styled-components';
import Nav from '../component/Nav';
import NavSlide from '../component/NavSlide';


class Main extends Component {
	render(){
		return(
			<div>
				<Nav></Nav>
				<NavSlide></NavSlide>
			</div>
		);
	}
}

export default Main;
