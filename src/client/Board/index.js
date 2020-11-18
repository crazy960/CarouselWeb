import React , { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Nav from '../component/Nav';
import ImageButton from '../component/ImageButton';
import styled , { css }from 'styled-components';


const SideBar = styled.div`
	width : 100vw;
	height : 50px;
    display : flex;	
	flex-directions : row;
	position : relative;
    
`
const SideItem = styled.div`
	margin-left : 30px;
	height : 50%;
	top : 50%;
	transform : translate( 0, -50% );
	font-size: 0.9rem;
	color : ${props=>props.FontColor || "black"};
	font-family:"Noto Color Emoji",sans-serif;
	font-weight : ${props=>props.FontWeight || "normal"};
	&:hover{
		cursor : pointer;
		color : ${props=>props.HoverFontColor || "white"};
	}
	position : relative;
`
const Background = styled.div`
	box-shadow: inset 0px 10px 10px -10px rgba(0,0,0,0.2);
	background-color : rgb(245,248,250);
	width : 100vw;
	display : flex;
	align-items : center;
	justify-content : center;
`
const Table = styled.div`
	display : flex;
	flex-direction : column;

`
const VerticalBox = styled.div`
	display : flex;
	flex-direction : column;
`
const HorizontalBox = styled.div`
	display : flex;
	flex-direction : row;
	margin-top : ${props=>props.MarginTop || "0px"};
`
const HeaderBox = styled.div`
	margin-top : 10px;
	height : 60px;
	width : 800px;
`
const ContentBox = styled.div`
	text-align : left;
	font-family : "Noto Color Emoji",sans-serif;
	font-weight : 600;
	font-size : 30px;
	color : rgb(135,82,191);

	
`
const Line = styled.hr`
	margin-top:10px;
	color : rgb(135,82,191);
	border : 2px solid;
	
`
const Box = styled.div`
	margin-top : ${props=>props.MarginTop || "0px"};
	background-color : ${props=>props.Head ? "rgb(135,82,191)": "white"};
	height : ${props=>props.Head ? "45px" : "35px"};
	border : solid rgb(200,200,200);
	border-width : ${props=>props.Head ? "0" : "0 1px 1px 1px"};
	position : relative;
	display : flex;
	flex-direction : row;
	justify-content: center;
	${props=>props.OnHover && css`
		&:hover{
			background-color : rgb(230,230,230);

		}
	`
	}

`
const BoxRecommend = styled.div`
	font-family : "Noto Color Emoji",'Nanum Pen Script',sans-serif;
	font-size : 15px;
	color : rgb(160,149,149);
	margin-left : 20px;
	width : 20px;
	height : 20px;
	top : 50%;
	transform : translate( 0, -50% );
	position : relative;

`
const BoxContent = styled.div`
	margin-left : 20px;
	font-family : "Noto Color Emoji",'Nanum Pen Script',sans-serif;
	font-size : 15px;
	font-weight : 500;
	height : 80%;
	top : 50%;
	transform : translate( 0, -50% );
	
	position : relative;
	&:hover{
		text-decoration : underline;
		cursor : pointer;
	}	
	
	
`
const BoxImg = styled.img`
	margin-left:5px;
	width : 20px;
	height : 20px;
	top : 50%;
	transform : translate( 0, -50% );
	position : relative;
`
const BoxComment = styled.div`
	margin-left:5px;
	color : red;
	height : 20px;
	top : 50%;
	transform : translate( 0, -50% );
	position : relative;
	&:hover{
		cursor : pointer;
	}
`
const BoxWriter = styled.div`
	font-family : "Noto Color Emoji",'Nanum Pen Script',sans-serif;
	font-weight : 600;
	width : 35%;

	top : 50%;
	transform : translate( 0, -50% );
	position : absolute;
`
const BoxTime = styled.div`
	font-family : "Noto Color Emoji",'Nanum Pen Script',sans-serif;
	font-size : 15px;
	color : rgb(149,149,149);
	width : 35%;
	left : 35%;
	top : 50%;
	transform : translate( 0, -50% );
	position : absolute;
`
const BoxViews = styled.div`
	font-family : "Noto Color Emoji",'Nanum Pen Script',sans-serif;
	font-size : 14px;
	color : rgb(149,149,149);
	width : 30%;
	left : 70%;
	top : 50%;
	transform : translate( 0, -50% );
	position : absolute;
`
const BoxLayout = styled.div`
	width : ${props=>props.Width || "100%"};
	position : relative;
	display:flex;
	flex-direction : row;
	
`



const ListNumber = styled.div`
	display : table;
	width : 350px;
	height : 30px;
`
const Number = styled.div`
	display : table-cell;
	border-style : solid;
	border-color : rgb(160,149,149);
	border-width : ${props=>props.Position === "right" ? "1px" : "1px 0 1px 1px"};
	border-radius : ${props=>props.Position === "left" ? "10% 0 0 10%" : props=>props.Position === "right" ? "0 10% 10% 0" : "0"};
	vertical-align : middle;
	width : 10%;
	background-color : ${props=>props.Select ? "rgb(55,71,90)" : "rgb(250,250,250)"};
	font-size : 14px;
	font-weight : 600;
	color : ${props=>props.Select ? "white" : "black" };
	&:hover{
		background-color : ${props=>props.Select ? "rgb(51,51,51)" : "rgb(226,226,226)"};
		cursor : pointer;
	}
	
`

const WriteHeader = styled.input`
	width : 700px;
	height : 80px;
	font-size : 30px;
	background-color : transparent;
	border : none;
	border-bottom : solid 1px gray;
	&::placeholder{
		font-size : 30px;
	}
	&:focus{
		outline : none;

	}
`
const WriteContent = styled.textarea`
	margin-top : 10px;
	width : 700px;
	height : 1200px;
	font-size : 20px;
	background-color : transparent;
	border : none;
	&:focus{
		outline : none;
	}

`
const WriteFooter = styled.div`
	left : 0;
	bottom : 0;
	width : 100vw;
	height : 75px;
	background-color : white;
	position : fixed;
`

const WriteButton = styled.button`
	width : 100px;
	height : 40px;
	right : 5%;
	top : 50%;
	transform : translate( 0, -50% );
	background-color : black;
	border : 0;
	border-radius : 20px;
	color : white;
	outline : none;
	&:hover{
		cursor : pointer;
		background-color : rgb(255,85,68);
		

	}
	position : absolute;
`
class Board extends Component {
	
	state = {
		isLogin : false,
		isWrite : false
	}

	constructor(props){
		super(props);
		
		var user = localStorage.getItem('user');
		if(user)
			this.state.isLogin = true;
		
		this.onHandleClick = this.onHandleClick.bind(this);
	}
	
	onHandleClick(){
		this.setState({isWrite : true});
	}
	
	render(){

		if(!this.state.isLogin)
			return(<Redirect to = "/login"></Redirect>);
		else if(!this.state.isWrite)
		{
			var user = localStorage.getItem('user');
			var lists = [];
			for(var i=0;i<30;i++){
				lists.push(<Box key = {i} OnHover>
							<BoxLayout Width = "70%">
								<BoxRecommend>24</BoxRecommend>
								<BoxContent>아 젠장.... 이런</BoxContent>
								<BoxImg src={process.env.PUBLIC_URL + "/image/picture.png"}></BoxImg>
								<BoxComment>4</BoxComment>
							</BoxLayout>
							<BoxLayout Width = "30%">
								<BoxWriter>ZeroM</BoxWriter>
								<BoxTime>21:30</BoxTime>
								<BoxViews>21210</BoxViews>
							</BoxLayout>
							
						</Box>);
			}
			return(<div>
						<Nav isLogin = {this.state.isLogin} user = { user }></Nav>
						<SideBar>
							<SideItem FontColor="rgb(52,58,64)" HoverFontColor="rgb(57,123,255)" FontWeight="bold">Board</SideItem>
							<SideItem FontColor="rgb(108,117,125)" HoverFontColor="rgb(57,123,255)">Suggestions</SideItem>
						</SideBar>
						<Background>
							<Table>
								<HorizontalBox>
									<VerticalBox>
										<HeaderBox>
											<ContentBox>Free board</ContentBox>
											<Line></Line>
										</HeaderBox>
										<Box MarginTop = "10px" Head></Box>
										{lists}
										<HorizontalBox MarginTop = "20px">
											<ListNumber>
												<Number Select Position = "left">1</Number>
												<Number>2</Number>
												<Number>3</Number>
												<Number>4</Number>
												<Number>5</Number>
												<Number>6</Number>
												<Number>7</Number>
												<Number>8</Number>
												<Number>9</Number>
												<Number Position = "right">10</Number>
												
												
											</ListNumber>
											<ImageButton Src={process.env.PUBLIC_URL + "/image/pencil.png"} Text="WRITE" onClick={this.onHandleClick}></ImageButton>
										</HorizontalBox>
										
									</VerticalBox>
								</HorizontalBox>
								
								
							</Table>
							
						</Background>
						
				  </div>);
		}
		else{
			var user = localStorage.getItem('user');
			return(<div>
						<Nav isLogin = {this.state.isLogin} user={ user }></Nav>
						<SideBar>
							<SideItem FontColor="rgb(52,58,64)" HoverFontColor="rgb(57,123,255)" FontWeight="bold">Board</SideItem>
							<SideItem FontColor="rgb(108,117,125)" HoverFontColor="rgb(57,123,255)">Suggestions</SideItem>
						</SideBar>
						<Background>
							<Table>
								<VerticalBox>
									<WriteHeader placeholder="제목을 입력하세요"></WriteHeader>
									<WriteContent></WriteContent>
								</VerticalBox>
								<WriteFooter>
									<WriteButton>완료</WriteButton>
								</WriteFooter>
							</Table>
							
						</Background>
					</div>);
		}
	}
	
}

export default Board;