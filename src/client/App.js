import React from 'react';
import logo from './logo.svg';
import Main from './Main'
import MainPage from './page/MainPage'
import LoginPage from './page/LoginPage'
import Login from './Login';
import Signup from './Signup';
import Board from './Board'
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
		 <Router>
			 <Switch>
				 <Route exact path = '/' component = {MainPage} />
				 <Route path = '/login' component = {LoginPage}/>
				 <Route path = '/signup' component = {Signup}/>
				 <Route path = '/board' component = {Board}/>
			 </Switch>
		  </Router>
    </div>
  );
}

export default App;
