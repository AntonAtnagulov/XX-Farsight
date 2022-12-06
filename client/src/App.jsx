import './App.css';
import Canvas from './components/canvas';
import React from 'react';
import NavBox from './components/NavBox/NavBox';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
        <Canvas />
        <Header text='XX-8 Sword commander'/>
        <NavBox/>
    </div>
  );
}

export default App;
