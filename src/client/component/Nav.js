import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height : 60px;
  width : 100vw;
  background-color : rgb(52, 58 , 64);
  display : inline-flex;

`

const Button = styled.button`
   color : ${props=>props.FontColor || "white"};
   border-radius : 4px;
   border-color : transparent;
   text-align : center;
   background-color : ${props=>props.Color || "transparent"};
   width : ${props=>props.Width || "70px"};
   height : 60%;
  transform : translate( 0, -50% );
  top : 50%;
   position : relative;
  font-size : ${props=>props.FontSize || "15px"};
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  cursor : pointer;
  outline : none;
  margin-left : ${props=>props.MarginLeft || "0px"};
  font-weight : ${props=>props.FontWeight || "normal"};
  &:hover{
      background-color:${props=>props.HoverColor || "transparent"}
  }
   
`
class Nav extends Component {
	render(){
		return(
			<Container>
				<Button FontSize = "1.4rem" Width = "90px" MarginLeft="1%">NavBar</Button>
				<Button Width = "50px" MarginLeft="2px">Home</Button>
				<Button FontColor="rgb(148,157,160)" Width = "50px" MarginLeft="2px">Link</Button>
				<Button FontColor="rgb(148,157,160)" Width = "80px">Dropdown</Button>
				<Button FontSize = "1.0rem" Color = "rgb(108,117,125)" HoverColor="rgb(90,98,104)" MarginLeft = "70%" >Log In</Button>
				<Button FontSize = "1.0rem" Color = "rgb(108,117,125)" HoverColor="rgb(90,98,104)" MarginLeft = "10px" >SignUp</Button>
				
			</Container>
		);
	};
	
}

export default Nav;