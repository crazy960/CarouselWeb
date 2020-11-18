import React , { Component }  from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width : 80px;
	height : 30px;
	background-color : rgb(222,82,49);
	border-radius : 5%;
	&:hover{
		cursor : pointer;
		background-color : rgb(135,135,135);
	}
`
const SubContainer = styled.div`
	height : 100%;
	width : ${props=>props.Width || "30px"};
	position : relative;
	
`

const Layout = styled.div`
	height : 100%;
	width : 100%;
	display : flex;
	flex-directions : row;
	text-align : center;
	position : relative;
	
`

const BoxImg = styled.img`
	top : 50%;
	right : 3px;
	width : 15px;
	height : 15px;
	transform : translate( 0, -50% );
	position : absolute;
`
const Text = styled.h4`
	color : white;
	left : 3px;
	top : 50%;
	margin : 0;
	font-family : "Noto Color Emoji",'Nanum Pen Script',sans-serif;	
	font-size : 15px;
	transform : translate( 0, -50% );
	position : absolute;
	
`

class ImageButton extends Component {
	
	constructor(props){
		super(props);
		
	}
	
	render(){
		return(
				<Container onClick={this.props.onClick}>
					<Layout>
						<SubContainer Width="30%">
							<BoxImg src={this.props.Src}></BoxImg>
						</SubContainer>
						<SubContainer Width="70%">
							<Text>{this.props.Text}</Text>
						</SubContainer>
					</Layout>
			   </Container>
			  );
	}
}

export default ImageButton;
