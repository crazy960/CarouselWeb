import React from 'react';
import logo from './logo.svg';
import AppTest from './AppTest';
import Nav from './component/Nav';
import NavSlide from './component/NavSlide';
import './App.css';

function App() {
  return (
    <div className="App">
		  <Nav></Nav>
		  <NavSlide></NavSlide>
    </div>
  );
}

export default App;
