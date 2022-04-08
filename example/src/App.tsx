import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'tmap-region-picker'
import T from '@/components/index'
function App() {
  // console.log('%c 🍡 SayHello: ', 'font-size:20px;background-color: #B03734;color:#fff;', SayHello);
  console.log(Button);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <T></T>
      </header>
    </div>
  );
}



export default App;
