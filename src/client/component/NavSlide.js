import React , { Component } from 'react';
import styled , { css }from 'styled-components';

const Container = styled.div`
    width : 100vw;
    height : 500px;
	background-color : rgb(119,119,119);
	position : relative;
	display:flex;

`

const DotContainer = styled.div`
	width : 100vw;
`

const Dot = styled.div`

`

const Content = styled.div`
	left : ${/*props=>props.Left ||*/ 0 };
	height : 450px;
	width : 100vw;
	background-color : transparent;
	position : absolute;
	color : white;
	top: 0;
	transform : ${props=>props.posX};
	transition: transform 1.0s ;

`

const TextContainer = styled.div`
	${props=>props.Left && css`
		text-align : left;
		padding-left : 10vw;
	`}

	${props=>props.Right && css`
		text-align : right;
		padding-right : 10vw;
		
	`}

	${props=>props.Center && css`
		text-align : center;
	`}
`

const Button = styled.button`
	min-width : 150px;
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

const Text = styled.h1`
	margin-top: 250px;
	margin-bottom: 20px;
	font-size : 2.3rem;	

`

const P = styled.p`
	font-size : 1.1rem;
	font-weight : 500;

`
const Arrow = styled.div`
	position: relative;
	width: 10vw;
	height: 100%;
	margin:0;
	left : ${props=>props.Right ? "80vw" : "0"};
	z-index :1;
    
	&:after{
		content: "";
 		display: block;
 		width: 10px;
		height: 10px;
		${props=>props.Right && css`
			border-top: 6px solid rgb(187,187,187);
 			border-right: 6px solid rgb(187,187,187);
		`}
		${props=>props.Left && css`
			border-top: 6px solid rgb(187,187,187);
 			border-left: 6px solid rgb(187,187,187);
		`}
 		
 		-webkit-transform: ${props=>props.Right ? "rotate(45deg)" : "rotate(-45deg)"};
 		transform: ${props=>props.Right ? "rotate(45deg)" : "rotate(-45deg)"};
 		position: absolute;
 		left: 50%;
 		top: 50%;
 		margin-top: -7px;
		position: absolute;
	}
	&:hover:after{
		
		${props=>props.Right && css`
			border-top: 6px solid rgb(234,234,234);
 			border-right: 6px solid rgb(234,234,234);
		`}
		${props=>props.Left && css`
			border-top: 6px solid rgb(234,234,234);
 			border-left: 6px solid rgb(234,234,234);
		`}
 		
	}
	&:hover{
		cursor:pointer;
	}

`

class NavSlide extends Component {
	state = {
		pos : [0, 100 , 200]
	}

	onHandleArrow(e){
		var update = [];
		if(e.target.id === "left"){
			for( var i=0; i<this.state.pos.length ; i++){
				update[i] = (this.state.pos[i] + 100);
				if(update[i] < -200 || update[i] > 200)
					return;
			}
			
		}
		else{
			
			for( var i=0; i<this.state.pos.length ; i++){
				update[i] = (this.state.pos[i] - 100);
				if(update[i] < -200 || update[i] > 200)
					return;
				
			}
		}
		
		this.setState({ pos : update});
	}
	render(){
		return(
				<Container>
					<Arrow id="left" Left onClick = {this.onHandleArrow.bind(this)}></Arrow>
					<Arrow id="right" Right onClick = {this.onHandleArrow.bind(this)}></Arrow>
					<Content posX = {`translateX(${this.state.pos[0]}%)`}>
						<TextContainer Left>
							<Text>Example headline.</Text>
							<P>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</P>
							<Button>Sign up Today</Button>
						</TextContainer>
					</Content>
					<Content posX = {`translateX(${this.state.pos[1]}%)`} >
						<TextContainer Center>
							<Text>Another example headline.</Text>
							<P>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</P>
							<Button>Learn more</Button>
						</TextContainer>
					</Content>
					<Content posX = {`translateX(${this.state.pos[2]}%)`}>.
						<TextContainer Right>
							<Text>One more for good measure.</Text>
							<P>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</P>
							<Button>Browse gallery</Button>
						</TextContainer>
			    	</Content>
				
				<DotContainer>
				</DotContainer>
				
				</Container>
		);
	}
	
	
} 

export default NavSlide;