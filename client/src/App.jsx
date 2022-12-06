import './App.css';
import React from 'react';
import {useSelector} from 'react-redux'
import Canvas from './components/canvas';
import NavBox from './components/NavBox/NavBox';
import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';


function App() {
  return (
    <div className="App">
        <Canvas />
        <Header text='XX-8 Sword commander'/>
        <NavBox/>
        <Spinner/>
    </div>
  );
}

export default App;
