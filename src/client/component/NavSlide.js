import React , { Component } from 'react';
import styled , { css , keyframes }from 'styled-components';


const Container = styled.div`
	width : 100vw;
	height : ${props=>props.Height || "500px"};
	position : relative;
	display : flex;
	flex-direction : column;
	background-color : rgb(119,119,119);
	overflow : hidden;
`

const SlideContainer = styled.div`
    width : 100vw;
    height :${props=>props.Height || "450px"};
	position : relative;
	display:flex;

`

const Content = styled.div`
	left : ${/*props=>props.Left ||*/ 0 };
	height : 100%;
	width : 100vw;
	background-color : transparent;
	position : absolute;
	color : white;
	top: 0;
	transform : ${props=>props.posX};
	animation : ${props=>props.animateOn === true ? css`${slide(props.from , props.to)} 0.8s forwards` : ''  };
	display : ${props=>props.hideOn === true ? "none" : "block" };
`
const slide = (from , to )=>keyframes`
	
	0%{
		transform : translateX(${from}%)
	}

	100%{
		transform : translateX(${to}%)
	}
	
`


const TextContainer = styled.div`
	${props=>props.Align === 'left' && css`
		text-align : left;
		padding-left : 10vw;
	`}

	${props=>props.Align === 'right' && css`
		text-align : right;
		padding-right : 10vw;
		
	`}

	${props=>props.Align === 'center' && css`
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
	height: ${props=>props.Height || "500px"};
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

const DotContainer = styled.div`
	width : 100vw;
	height : ${props=>props.Height || "50px"};
	position: relative;
`
const DotBox = styled.div`
	margin-top : 20px;
	display :flex;
	justify-content: center;
`


const Dot = styled.div`
	margin : 4px;
	
	width : 30px;
	height : 23px;
	position : relative;

	&:after{
		left : 0;
		content : "";
		width : 30px;
		height : 3px;
		background-color : ${ props=>props.Active ? "rgb(255,255,255)" : "rgb(187,187,187)" };
		position : absolute;

	}
	&:hover{
		cursor:pointer;
	}
`

class NavSlide extends Component {
	

	state = {
		pos : [0, 100 , 200] ,
		hide : [ false , true , true ] ,
		slide : [
			{ from: 0 , 
			  to : 100} , 
			{ from : 100,
			  to : 200} , 
			{ from : 200,
			  to :300}
		] ,
		animate : [ false , false, false] ,
		activeIndex : 0 ,
		text : [ "Example headline." , "Another example headline." ,"One more for good measure."],
		subText : [ "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit." , 
				    "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit." , 
				    "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."] ,
		btnText : [ "Sign up Today" , "Learn more" , "Browse gallery"] ,
		textAlign : ["left" , "center" , "right"],
		
		timer_id : 0
	};
	

	constructor(props){
		super(props);
		
		this.slideLeft =this. slideLeft.bind(this);
		this.slideRight = this.slideRight.bind(this);

		
	}

	componentDidMount(){
		this.state.timer_id = setInterval(  this.slideLeft.bind(this) , 5000);
	}
	componentWillUnmount(){
		clearInterval(this.state.timer_id);
		this.state.timer_id = 0;
	}


	

	slideLeft(){
		let pos = this.state.pos;
		var update_pos = this.state.pos;
		let active = this.state.activeIndex;
		let hide=this.state.hide;
		let next_active;
		
		let update_slide = this.state.slide;
		let update_animate = this.state.animate;
		
		next_active = (active - 1) < 0 ? 2 : (active - 1);
		
		update_slide[next_active].from = pos[active] - 100;
		update_slide[next_active].to = pos[active];
			
		update_slide[active].from = pos[active];
		update_slide[active].to = pos[active] + 100;
			
		hide[next_active] = false;
		hide[active] = false;
			
		update_animate[next_active] = true;
		update_animate[active] = true;
			
			
		update_pos[active] = update_slide[active].to;
		update_pos[next_active] = update_slide[next_active].to;
			
		active = next_active;
			
		this.setState({
			pos : update_pos ,
			hide : hide ,
			slide : update_slide ,
			activeIndex : active ,
			animate : update_animate
		});
		

		
		
		
	}
	slideRight(){
		let pos = this.state.pos;
		var update_pos = this.state.pos;
		let active = this.state.activeIndex;
		let hide=this.state.hide;
		let next_active;
		
		let update_slide = this.state.slide;
		let update_animate = this.state.animate;
		
		next_active = (active + 1) % 3;
			
		update_slide[next_active].from = pos[active] + 100;
		update_slide[next_active].to = pos[active];
			
		update_slide[active].from = pos[active];
		update_slide[active].to = pos[active] - 100;
			
		hide[next_active] = false;
		hide[active] = false;
			
		update_animate[next_active] = true;
		update_animate[active] = true;
			
		update_pos[active] = update_slide[active].to;
		update_pos[next_active] = update_slide[next_active].to;
			
		active = next_active;
			
		this.setState({
			pos : update_pos ,
			hide : hide ,
			slide : update_slide ,
			activeIndex : active ,
			animate : update_animate
		});
		

	}


	onHandleArrow(e){
		
		
		if(e.target.id === "left"){
			
			this.slideLeft();
			
		}
		else{
			
			this.slideRight();
			
		}
		
		
		
						
	}
	onHandleDot(e){
		let next_active = Number(e.target.dataset.id);
		let active = this.state.activeIndex;
		var pos = this.state.pos;
		var update_pos = this.state.pos;
		let hide = this.state.hide;
		let update_slide = this.state.slide;
		let update_animate = this.state.animate;
		
		if( next_active === active)
			return;
		
		for(var i=0;i<hide.length;i++)
		{
			hide[i] = (i !== next_active) && (i !== active ) ? true : false;	
			update_animate[i] = (i !== next_active) && (i !== active ) ? false : true;	
		}

		if(next_active < active)
		{
			update_slide[next_active].from = pos[active] - 100;
			update_slide[next_active].to = pos[active];
			
			update_slide[active].from = pos[active];
			update_slide[active].to = pos[active] + 100;
			
			update_pos[next_active] = update_slide[next_active].to;
			update_pos[active] = update_slide[active].to;
			
			active = next_active;
			
			this.setState({
				pos : update_pos ,
				hide : hide ,
				slide : update_slide,
				activeIndex : active ,
				animate : update_animate
			});
		}
		else{
			
			update_slide[next_active].from = pos[active] + 100;
			update_slide[next_active].to = pos[active];
			
			update_slide[active].from = pos[active];
			update_slide[active].to = pos[active] - 100;
			
			update_pos[next_active] = update_slide[next_active].to;
			update_pos[active] = update_slide[active].to;
			
			active = next_active;
			
			this.setState({
				pos : update_pos ,
				hide : hide ,
				slide : update_slide,
				activeIndex : active ,
				animate : update_animate
			});
			
		}

		
		
		
	}

	render(){
		var dotLists = [];
		var contentLists = [];
		for( var i=0; i<3 ;i++)
		{
			if(this.state.activeIndex == i)
				dotLists.push(<Dot key={i} data-id={i} Active onClick = {this.onHandleDot.bind(this)}></Dot>);
			else
				dotLists.push(<Dot key={i} data-id={i} onClick = {this.onHandleDot.bind(this)}></Dot>);
			

			contentLists.push(<Content key = {i} posX = {`translateX(${this.state.slide[i].from}%)`} hideOn = {this.state.hide[i]} from = {this.state.slide[i].from} to = {this.state.slide[i].to} animateOn = {this.state.animate[i]}>
								<TextContainer Align = {this.state.textAlign[i]}>
									<Text>{this.state.text[i]}</Text>
									<P>{this.state.subText[i]}</P>
									<Button>{this.state.btnText[i]}</Button>
								</TextContainer>
							  </Content>);
			
			
		}
		return(
			<Container>
				<SlideContainer>
				
					<Arrow id="left" Left onClick = {this.onHandleArrow.bind(this)}></Arrow>
					<Arrow id="right" Right onClick = {this.onHandleArrow.bind(this)}></Arrow>
					{contentLists}
					
				</SlideContainer>
				
				
				<DotContainer>
					<DotBox>
						{ dotLists }
					</DotBox>
				</DotContainer>
				
				
			</Container>
		);
	}
	
	
} 

export default NavSlide;