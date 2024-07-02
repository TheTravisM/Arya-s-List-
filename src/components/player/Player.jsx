import React, { memo } from "react";
import PropTypes from 'prop-types';
import Counter from '../counter/Counter';
import './player.scss'

const Player = (props) => {
  const { 
    id, 
    name, 
    diedBy, 
    score,
    removeName, 
    changeScore
  } = props;
  return (
    <div 
      id={id} 
      className="player">
      <button 
        className="remove-player" 
        onClick={() => removeName(id)}>
        ✖
      </button>
      <span className="player-name">
        {name}
        {/* <span>{diedBy}</span> */}
      </span>

      <Counter 
        id={id} 
        score={score} 
        changeScore={changeScore} 
      />
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  removeName: PropTypes.func.isRequired,
  changeScore: PropTypes.func.isRequired,
}

const arePlayerPropsEqual = (prevProps, nextProps) => {
  return prevProps.score === nextProps.score;
}
export default memo(Player, arePlayerPropsEqual);