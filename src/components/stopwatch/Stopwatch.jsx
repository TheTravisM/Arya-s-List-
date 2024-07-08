import React, { useState, useEffect } from "react";
import './Stopwatch.scss'

const Stopwatch = (props) => {
  const { } = props;

  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let id;
    if (isRunning){
      id = setInterval(()=> {
        setElapsedTime(prevTime => prevTime + 1);
        console.log('tick');
      }, 1000);
    }
    return () => {
      clearInterval(id);
    }
  },[isRunning])

  const handleStart = () => {
    setIsRunning((prevValue) => !prevValue);
  }

  const handleReset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  }

  const startBtnText = isRunning ? "Stop" : "Start";

  return (
  <section className="stopwatch">
    <h2>Stopwatch</h2>
    <span className="stopwatch-time">
      {elapsedTime}
    </span>
    <button
      className='start-btn'
      onClick={handleStart}
    >
      {startBtnText}
    </button> 
    <button
      className='reset-btn'
      onClick={handleReset}
    >
      Reset
    </button>
  </section>
  );
};
export default Stopwatch;