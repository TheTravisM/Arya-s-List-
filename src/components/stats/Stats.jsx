import React from "react";
import PropTypes from 'prop-types';
import './stats.scss';

const Stats = (props) => {
  const { people } = props;
  const peopleTotal = people.length;
  const scoreTotal = people.reduce((total, name) => {
    return total + name.score
  }, 0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Names:</td>
          <td>{peopleTotal}</td>
        </tr>
        <tr>
          <td>Total Score:</td>
          <td>{scoreTotal}</td>
        </tr>
      </tbody>
    </table>
  );
};

Stats.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number
  })).isRequired
}

export default Stats;
