import React from 'react';
import './App.css';
import Title from './Title';
import CalenderToggle from "./CalenderToggle";



function App() {
  setInterval(updateTime,1000);
  const t = new Date();
  const now = t.toLocaleTimeString();
  const date = t.getDate();
  const day = t.toLocaleString('default', { weekday: 'long' });
  const month = t.toLocaleString('default', { month: 'long' });
  const year = t.getFullYear();
  
  const [time, setTime] = React.useState(now);
  const [show,setShow] = React.useState(false);
  
  function updateTime(){
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  
  function handleShow(){
    setShow(!show);
  }
  return (
    <div>
    <Title />
    <CalenderToggle handleChange={handleShow}/>
    <div className="container time">
      <h1 className="timeValue">{time}</h1>
      {show ? <h5 className="dateValue">{day} {date} {month} {year}</h5> : null}
    </div>
    </div>
  );
}

export default App;
