import React from 'react';
import ReactDom from 'react-dom';
import { MemoryRouter } from "react-router-dom";
import Nav from '../component/Nav';
import Main from '../Main';
import { render , fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';


let container;


beforeEach(()=>{
	container = document.createElement("div");
	document.body.appendChild(container);
})

describe('Main Test' ,()=>{
	
	it('render Main without Login' , ()=>{
		
		const{ getByText } = render( <MemoryRouter><Main  /></MemoryRouter> , container);
		
		expect(localStorage.getItem).toBeCalledWith('user')

	});
	
	
})
