import * as NavbarActions from '../actions/Navbar';

// 초기상태 정의
const initialState = {
	authenticated : false ,
	fetching : false ,
	user : ""
};

const reducers = ( state = initialState , action) => {
	switch(action.type){
		case NavbarActions.AUTHENTICATE :
			return {
				...state
			}
		case NavbarActions.AUTHENTICATED_SUCCESS : 
			return {
				...state,
				authenticated : true ,
				fetching : false ,
				user : action.user
			};
		case NavbarActions.AUTHENTICATE_REQUEST:
			return {
				...state ,
				fetching : true
			};
		case NavbarActions.AUTHENTICATE_FAILURE:
			return {
				...state ,
				authenticated : false ,
				fetching : false ,
				user : ""
			}
			
		case NavbarActions.LOGOUT:
			return {
				...state
			}
		case NavbarActions.LOGOUT_SUCCESS:
			return {
				...state ,
				authenticated : false,
				user : ""
			}
		case NavbarActions.LOGOUT_REQUEST:
			return {
				...state,
				fetching : true
			}
		case NavbarActions.LOGOUT_FAILURE:
			return {
				...state
			}
		default:
			return state;
	}
}

export default reducers;