import React from 'react';
import logo from './logo.svg';
import Main from './Main'
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
		 <Router>
			 <Switch>
				 <Route exact path = '/' component = {Main} />
				 <Route path = '/login' component = {Login}/>
				 <Route path = '/signup' component = {Signup}/>
			 </Switch>
		  </Router>
    </div>
  );
}

export default App;
