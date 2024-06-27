import React from 'react';
import Counter from '../counter/Counter';
import './Player.scss'

const Player = (props) => {
  const { 
    id, 
    key, 
    name, 
    diedBy, 
    removeName, 
    score,
    changeScore
  } = props;
  return (
    <div id={id} key={key} className="player">
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