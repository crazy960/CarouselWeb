import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory } from 'history';
import App from '../App';
import { fireEvent , render } from '@testing-library/react';

let container;

beforeEach(()=>{
	container = document.createElement('div');
	document.body.appendChild(container);
});

describe('App Test' , ()=>{
	it('full render/navigating App',()=>{
		const history = createMemoryHistory();
		const route = '/';
		history.push(route);
		const{ getByText } = render(<Router history = {history}><App></App></Router> , container);
		
		fireEvent.click(getByText('Log in'));
		
		expect(getByText('Please sign in')).toBeInTheDocument();
	})
})