import React from 'react';
import Counter from '../counter/Counter';
import './player.scss'

const Player = (props) => {
  const { 
    id, 
    //key, 
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
      <span className="player-name">{name}</span>
      {/* <span>{diedBy}</span> */}
      <Counter id={id} score={score} changeScore={changeScore} />
    </div>
  );
}

export default Player;