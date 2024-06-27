import React, { useEffect, useState } from "react";
import aryaData from "../data/aryaData.json";
import Header from "./header/Header";
import Player from "./player/Player";

const App = () => {
  const [headerTitle, setHeaderTitle] = useState("");
  const [headerId, setHeaderId] = useState("");
  const [names, setNames] = useState([]);
  const [namesTotal, setNamesTotal] = useState(0);

  useEffect(() => {
    setHeaderTitle(aryaData.header.title);
    setHeaderId(aryaData.header.id);
    setNames(aryaData.names);
    setNamesTotal(aryaData.names.length);
  }, []);

  useEffect(() => {
    setNamesTotal(names.length);
  }, [names]);

  const handleRemoveName = (index) => {
    setNames((prevNames) => prevNames.filter((_, name) => name !== index));
  };

  const handleScoreChange = (delta, id) => {
    setNames(prevNames =>
      prevNames.map((name, index) => {
        if (index === id) {
          return {
            ...name, 
            score: (name.score || 0) + delta 
          }; 
        }
        return name;
      })
    );
  };

  return (
    <section className="aryas-list">
      <Header 
        id={headerId} 
        title={headerTitle} 
        names={names} 
      />

      {/* Name list */}
      {names.map((person, index) => (
        <Player
          id={index}
          key={index}
          name={person.name}
          diedBy={person.died_by}
          score={person.score}
          removeName={handleRemoveName}
          changeScore={handleScoreChange}
        />
      ))}
    </section>
  );
};

export default App;
