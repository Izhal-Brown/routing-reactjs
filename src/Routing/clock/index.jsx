import React, {useState, useEffect } from 'react';
import logo from './logo.svg';
import './app.css';

function Clock(props) {
  const [clock, setClock] = useState()

  useEffect(() =>{
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString())
    },1000)
  },[])

  return (
    <div className="App">
       <img src={logo} className="App-logo" alt="logo" />
        <div className='jam'>{clock}</div>
    </div>
  );
}

export default Clock;