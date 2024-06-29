import React from "react";
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
export default Stats;
