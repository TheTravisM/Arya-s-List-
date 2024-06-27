import React from 'react';
import Stats from '../stats/Stats';
import './Header.scss';

const Header = (props) => {
  const { id, title, names } = props
  return (
    <header id={id}>
      <h1>{title}</h1>
      <Stats
        names={names}
      />
    </header>
  );
}

export default Header;