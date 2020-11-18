import React from 'react';
import ReactDom from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from "react-router-dom";
import Nav from '../component/Nav';
import Main from '../Main';
import { render , fireEvent } from '@testing-library/react';


let container;


beforeEach(()=>{
	container = document.createElement("div");
	document.body.appendChild(container);
})

describe('Nav Test' , ()=>{
	describe('Nav Test without Login' , ()=>{
		it('render Nav' , ()=>{
		
			const { getByText } = render( <MemoryRouter><Nav isLogin = {false} /></MemoryRouter> , container);
		
			expect(getByText('NavBar')).toBeInTheDocument();
			expect(getByText('Home')).toBeInTheDocument();
			expect(getByText('Board')).toBeInTheDocument();
			expect(getByText('Dropdown')).toBeInTheDocument();
		
			expect(getByText('Log in')).toBeInTheDocument();
			expect(getByText('Sign up')).toBeInTheDocument();
			
		
		});
		
		
		
	});
	
	describe('Nav Test with Login' , ()=>{
		it('render Nav' , ()=>{
			var name = 'asahan'
			const { getByText } = render( <MemoryRouter><Nav isLogin = {true} user = {name} /></MemoryRouter> , container);
		
			expect(getByText('NavBar')).toBeInTheDocument();
			expect(getByText('Home')).toBeInTheDocument();
			expect(getByText('Board')).toBeInTheDocument();
			expect(getByText('Dropdown')).toBeInTheDocument();
		
			expect(getByText(`${name}님`)).toBeInTheDocument();
			expect(getByText('Log out')).toBeInTheDocument();
			

		});
		
		it('Log out button test' , ()=>{
			
			const callback = jest.fn();
			var name = 'asahan'
			const { getByText } = render( <MemoryRouter><Nav isLogin = {true} user = {name} onHandleLogout = {callback} /></MemoryRouter> , container);
		
			const logout = getByText('Log out');
			
			fireEvent.click(logout);
			expect(callback).toHaveBeenCalled();
			
		});
	});
	
	
	
});
