import React from 'react';
import PropTypes from 'prop-types';
import './Counter.scss'

const Counter = (props) => {
  const {
    id,
    score,
    changeScore
  } = props;

  return (
    <div className="counter">
      <button 
        className="counter-action decrement" 
        onClick={() => changeScore(-1, id)}> 
        - 
      </button>
      <span className="counter-score">{score}</span>
      <button 
        className="counter-action increment" 
        onClick={() => changeScore(1, id)}> 
        + 
      </button>
    </div>
  );
}

Counter.propTypes = {
  id: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
};

export default Counter;