import React from 'react';
import Stats from '../stats/Stats';
import Stopwatch from '../stopwatch.js/Stopwatch';
import './header.scss';

const Header = (props) => {
  const { id, title, people } = props
  return (
    <header id={id}>
      <Stats people={people} />
      <h1>{title}</h1>
    <Stopwatch/>
    </header>
  );
}

export default Header;