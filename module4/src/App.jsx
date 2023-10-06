/* eslint-disable no-unused-vars */
import { useState } from "react";

import Person from "./Person";

const App = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: "Arto Hellas",
      number: "0479487183"
    },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (e) => {
    e.preventDefault();
    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
      favorite: Math.random() < 0.5,
    };

    if (persons.some((person) => person.name === newName)) {
        alert(`${newName} is already added to phonebook`);
      } else {
        setPersons(persons.concat(personObject));
        setNewName("");
        setNewNumber("");
      }
  };

  const handlerPersonChange = (e) => {
    setNewName(e.target.value);
  };

  const handlerNumberChange = (e) => {
    setNewNumber(e.target.value);
    console.log("new numb", newNumber)
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlerPersonChange} />
        </div>
        <div>
            number: <input value={newNumber} onChange={handlerNumberChange} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person key={person.id} name={person.name} number={person.number}/>
        ))}
      </ul>
    </div>
  );
};

export default App;
