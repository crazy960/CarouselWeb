import React from 'react';
import { render , fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import Login from '../Login';



let container;

beforeEach(()=>{
	container = document.createElement('div');
	document.body.appendChild(container);
});

describe('Login Test',()=>{
	it('render Login',()=>{
		const { getByText , getByPlaceholderText} = render(<MemoryRouter><Login /></MemoryRouter> , container);
		expect(getByText('Please sign in')).toBeInTheDocument();
		expect(getByText('Sign in')).toBeInTheDocument();
		
		expect(getByPlaceholderText('Username')).toBeInTheDocument();
		expect(getByPlaceholderText('Password')).toBeInTheDocument();
		
	});
	
	it('Username , Password Input',()=>{
		
		const { getByPlaceholderText } = render(<MemoryRouter><Login /></MemoryRouter>);
		
		const userInput = getByPlaceholderText('Username');
		const passwordInput = getByPlaceholderText('Password');
		
		fireEvent.change(userInput , { target : { value : '23' } });
		expect(userInput.value).toBe('23');
		
		fireEvent.change(passwordInput , { target : { value : '~!@#$qwer,' }});
		expect(passwordInput.value).toBe('~!@#$qwer,');
		
	});
	
	it('handleSubmit returns axios post returns', async ()=>{
		
		axios.post = jest.fn().mockResolvedValue({
			data:{
				name : 'asahan'
			}
		})
		
		//Login.handleSubmit = jest.fn();
		
		const { getByText ,getByPlaceholderText } = render(<MemoryRouter><Login /></MemoryRouter>);
		
		const userInput = getByPlaceholderText('Username');
		const passwordInput = getByPlaceholderText('Password');
		
		fireEvent.change(userInput , { target : { value : 'asahan' } });
		expect(userInput.value).toBe('asahan');
		
		fireEvent.change(passwordInput , { target : { value : '~!@#$qwer,' }});
		expect(passwordInput.value).toBe('~!@#$qwer,');
		
		fireEvent.click(getByText('Sign in'));
		
		expect( Login.handleSubmit ).toBeCalled();
		
		
	})
	
	
	
	
})

