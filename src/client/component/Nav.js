import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height : 60px;
  width : 100vw;
  background-color : rgb(52, 58 , 64);
  display : inline-flex;

`
const Left = styled.div`
  margin-left : ${props=>props.MarginLeft || "0px"};
  height : 100%;
  display : flex;
`

const Right = styled.div`
  margin-left : ${props=>props.MarginLeft || "0px"};
  height : 100%;
  display : flex;

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
	constructor(props){
		super(props);
	}
	componentDidMount(){
		console.log(this.props);
	}
	
	
	render(){
		var btnList= new Array;
		for(var i=0;i<this.props.btns.length;i++)
		{
			btnList.push(
				<Link key = {i} to = {this.props.btns[i].path}>
					<Button key = {i} FontSize = "1.0rem" Color = "rgb(108,117,125)" HoverColor="rgb(90,98,104)" MarginLeft = "10px" Width = "80px">{this.props.btns[i].text}</Button>
				</Link>
			) 
		}
		return(
			<Container>
				<Left MarginLeft = "1%">				
					<Button FontSize = "1.4rem" Width = "90px" MarginLeft="1%">NavBar</Button>
					<Button Width = "50px" MarginLeft="2px">Home</Button>
					<Button FontColor="rgb(148,157,160)" Width = "50px" MarginLeft="2px">Link</Button>
					<Button FontColor="rgb(148,157,160)" Width = "80px">Dropdown</Button>
				</Left>
				<Right MarginLeft = "70%">
					{btnList}
				</Right>
				
			</Container>
		);
	};
	
}

export default Nav;