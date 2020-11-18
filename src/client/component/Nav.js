import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Container = styled.div`
  height : 60px;
  width : 100vw;
  background-color : rgb(52, 58 , 64);
  display : inline-flex;
  position : relative;

`
const Left = styled.div`
  margin-left : ${props=>props.MarginLeft || "0px"};
  height : 100%;
  display : flex;
`

const Right = styled.div`
  margin-right : ${props=>props.MarginRight || "0px"};
  height : 100%;
  display : flex;
  position: absolute;
  right : 0;
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
   right : 0px;
   &:hover{
      background-color:${props=>props.HoverColor || "transparent"}
   }
   
`

const User = styled.div`
	top:50%;
 	transform : translate( 0, -50% );
	color : white ;
	height : 50%;
	position: relative;
`
class Nav extends Component {
	
	constructor(props){
		super(props);
	}
	
	
	render(){
		var btnList= new Array;
		if(this.props.isLogin)
		{
			btnList.push(
				<User key = {1}>{this.props.user}님</User>
			);
			btnList.push(
				<Button key={2} FontSize = "1.0rem" Color = "rgb(108,117,125)" HoverColor="rgb(90,98,104)" MarginLeft = "10px" Width = "80px" onClick = { this.props.onHandleLogout } >Log out</Button>
			);
		}
		else
		{
			btnList.push(
				<Link to = 'login' key={1}>
					<Button key={1} FontSize = "1.0rem" Color = "rgb(108,117,125)" HoverColor="rgb(90,98,104)" MarginLeft = "10px" Width = "80px"  >Log in</Button>
				</Link>
			);
			btnList.push(
				<Link to = 'signup' key={2}>
					<Button key={2} FontSize = "1.0rem" Color = "rgb(108,117,125)" HoverColor="rgb(90,98,104)" MarginLeft = "10px" Width = "80px"  >Sign up</Button>
				</Link>
			);
		}
		return(
			<Container>
				<Left MarginLeft = "1%">				
					<Button FontSize = "1.4rem" Width = "90px" MarginLeft="1%">NavBar</Button>
					<Link to = '/' >
						<Button Width = "50px" MarginLeft="2px">Home</Button>
					</Link>
					<Link to = 'board' >
						<Button FontColor="rgb(148,157,160)" Width = "50px" MarginLeft="2px">Board</Button>
					</Link>
					<Button FontColor="rgb(148,157,160)" Width = "80px">Dropdown</Button>
				</Left>
				<Right MarginRight="30px">
					{btnList}
				</Right>
				
			</Container>
		);
	};
	
}

export default Nav;