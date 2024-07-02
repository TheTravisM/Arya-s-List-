import React, { memo } from "react";
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
        {console.log(name + ' has been rendered')}
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

const arePlayerPropsEqual = (prevProps, nextProps) => {
  return prevProps.score === nextProps.score;
}
export default memo(Player, arePlayerPropsEqual);