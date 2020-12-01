import React , { Component , useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';
import * as NavbarActions from '../actions/Navbar';
import { connect , useSelector , useDispatch } from 'react-redux';
import { SendData } from '../component/Utils';

const NavbarContainer = () => {
	
	
	const dispatch = useDispatch();
	const isauthenticated  = useSelector( state => state.Navbar.authenticated);
	const getUser  = useSelector( state => state.Navbar.user_id);
	
	
	
	const onHandleLogout = async () => { 
		dispatch(NavbarActions.Logout_Request());
		try{
			var response = await SendData( "/api/users/logout" ,  { name : getUser }  );
			dispatch(NavbarActions.Logout_Success());
			localStorage.removeItem("user");
		}catch{
			dispatch(NavbarActions.Logout_Failure());
		}
	};

	useEffect(() => {
		var id = localStorage.getItem("user");
		if(id)
			dispatch(NavbarActions.Autenticated_Success(id));
	})
	

	if(isauthenticated)
		return (<Navbar user = {getUser} onHandleLogout = {onHandleLogout}></Navbar>)
	else
		return (<Navbar></Navbar>);
	
}
export default NavbarContainer;

/*

class NavbarContainer extends Component {
	onHandleLogout(){
		const { handlelogout } = this.props ;
		handlelogout();
	} 
	render(){
		const { authenticated , user } = this.props;
		if(authenticated)
			return(<Navbar user = {user}></Navbar>);
		else
			return(<Navbar></Navbar>);
	}
}


const mapStateToProps = state => ({
	user : state.Navbar.user ,
	authenticated : state.Navbar.authenticated
})
const mapDispatchToProps = dispatch => ({
	handlelogout : () => dispatch(NavbarActions.Logout_Request)
})
export default connect( mapStateToProps , mapDispatchToProps )(NavbarContainer);
*/