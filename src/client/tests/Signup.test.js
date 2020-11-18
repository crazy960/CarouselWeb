import React from 'react';
import { render , fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Signup from '../Signup';

let box;

beforeEach(()=>{
	box = document.createElement('div');
	document.body.appendChild(box);
	
});

describe('Signup test',()=>{
	it('render Signup',()=>{
		const { getByText , container } = render(<MemoryRouter><Signup/></MemoryRouter>);
		
		expect(getByText('Sign Up')).toBeInTheDocument();
		expect(getByText("it's free and only take a minutes")).toBeInTheDocument();
		
		expect(getByText('Username')).toBeInTheDocument();
		expect(getByText('Email')).toBeInTheDocument();
		expect(getByText('Password')).toBeInTheDocument();
		
		const btn = container.querySelector('button');
		expect(btn).toBeInTheDocument();
		
		
		
	})
})