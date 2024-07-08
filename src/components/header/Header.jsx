import React from 'react';
import PropTypes from 'prop-types';
import Stats from '../stats/Stats';
import Stopwatch from '../stopwatch.js/Stopwatch';
//import './header.scss';
import '../header/header.scss'

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

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
}

Header.defaultProps = {
  title: "List Of Names"
}

export default Header;