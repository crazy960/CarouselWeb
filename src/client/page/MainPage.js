import React , { Component , useEffect} from 'react';
import styled from 'styled-components';
import NavbarContainer from '../container/NavbarContainer';
import NavSlide from '../component/NavSlide';
import * as NavActions from '../actions/Navbar';
import { useSelector , useDispatch } from 'react-redux';


const MainPage = () => {
	
	const dispatch = useDispatch();
	useEffect(()=>{
		var username = localStorage.getItem("user");
		if(username)
			dispatch(NavActions.Autenticated_Success(username));
		else
			dispatch(NavActions.Logout_Success());
	});
	
	return(<div>
				<NavbarContainer></NavbarContainer>
				<NavSlide></NavSlide>
		   </div>)
	
	
};

export default MainPage;