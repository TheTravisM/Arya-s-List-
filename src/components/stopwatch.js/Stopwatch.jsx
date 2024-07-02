import React, { useState, useEffect } from "react";
import './stopwatch.scss'

const Stopwatch = (props) => {
  const { } = props;

  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    console.log('Running Side Effect');
    let id;
    if (isRunning){
      id = setInterval(()=> {
        setElapsedTime(prevTime => prevTime + 1);
        console.log('tick');
      }, 1000);
    }
    return () => {
      clearInterval(id);
      console.log("Clean Up");
    }
  },[isRunning])

  const handleStart = (props) => {
    setIsRunning((prevValue) => !prevValue);
  }

  const handleReset = (props) => {
    setElapsedTime(0);
    setIsRunning(false);
  }

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
      {isRunning ? "Stop" : "Start"}
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
