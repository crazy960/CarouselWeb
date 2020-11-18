import { combineReducers } from 'redux';

import Navbar from './Navbar';

const rootReducer = combineReducers({
	Navbar ,
	// 다른 리듀서를 만들게되면 여기에 넣어줌..
});

export default rootReducer;