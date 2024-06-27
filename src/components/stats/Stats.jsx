import React, { useState } from "react";
import './stats.scss';

const Stats = (props) => {
  const { names } = props;
  const namesTotal = names.length;
  const scoreTotal = names.reduce((total, name) => {
    return total + name.score
  }, 0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Names:</td>
          <td>{namesTotal}</td>
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
