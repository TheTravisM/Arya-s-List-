import React from 'react';
import Stats from '../stats/Stats';
import './header.scss';

const Header = (props) => {
  const { id, title, people } = props
  return (
    <header id={id}>
      <h1>{title}</h1>
      <Stats
        people={people}
      />
    </header>
  );
}

export default Header;