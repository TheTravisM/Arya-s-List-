import React, { memo } from "react";
import PropTypes from 'prop-types';
import Counter from '../counter/Counter';
import Icon from "../icon/Icon";
import './Player.scss'

const Player = (props) => {
  const { 
    id, 
    name, 
    diedBy, 
    score,
    removeName, 
    changeScore,
    isHighScore
  } = props;
  return (
    <div 
      id={id} 
      className="player"
    >
      <button 
        className="remove-player" 
        onClick={() => removeName(id)}>
        ✖
      </button>
      <Icon isHighScore={isHighScore}/>
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
  isHighScore: PropTypes.bool.isRequired,
}

const arePlayerPropsEqual = (prevProps, nextProps) => {
  return prevProps.score === nextProps.score && prevProps.isHighScore === nextProps.isHighScore;
}
export default memo(Player, arePlayerPropsEqual);