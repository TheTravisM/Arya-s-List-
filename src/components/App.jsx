import React, { useEffect, useState, useRef } from "react";
import aryaData from "../data/aryaData.json";
import Header from "./header/Header";
import Player from "./player/Player";
import AddPersonForm from "./addPersonForm/AddPersonForm";

const App = () => {
  const [headerTitle, setHeaderTitle] = useState("");
  const [headerId, setHeaderId] = useState("");
  const [people, setPeople] = useState([]);
  const nextPersonId = useRef(5);

  useEffect(() => {
    setHeaderTitle(aryaData.header.title);
    setHeaderId(aryaData.header.id);
    setPeople(aryaData.people);
  }, []);

  const handleRemoveName = (index) => {
    setPeople((prevPeople) => prevPeople.filter((_, name) => name !== index));
  };

  const handleScoreChange = (delta, id) => {
    setPeople(prevPeople =>
      prevPeople.map((name, index) => {
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

  const handleAddPerson = (name) => {
    setPeople(prevPeople => [
    ...prevPeople,
    {
      name,
      score: 0,
      id: nextPersonId.current++
    }])
  };

  return (
    <section className="aryas-list">
      <Header 
        id={headerId} 
        title={headerTitle} 
        people={people} 
      />

      {/* Name list */}
      {people.map((person, index) => (
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

      <AddPersonForm
        addPerson={handleAddPerson}
      />
    </section>
  );
};

export default App;
