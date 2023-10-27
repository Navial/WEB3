import { useState, useEffect } from 'react'
import axios from 'axios'
import Contact from "./Contact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/contacts')
      .then(response => {
        console.log('promise fulfilled')
        setContacts(response.data)
      })
  };

  useEffect(hook, []);

  console.log('render', contacts.length, 'contacts')

  const addContact = (e) => {
    e.preventDefault();
    const contactObject = {
      id: contacts.length + 1,
      name: newName,
      phone_number: newNumber,
      favorite: Math.random() < 0.5,
    };

    if (contacts.some((conctact) => conctact.name === newName)) {
        alert(`${newName} is already added to phonebook`);
      } else {
        axios
        .post('http://localhost:3001/contacts', contactObject)
        .then(response => {
          setContacts(contacts.concat(response.data));
          setNewName("");
          setNewNumber("");
        })
      }
  };

  const handlerContactChange = (e) => {
    setNewName(e.target.value);
  };

  const handlerNumberChange = (e) => {
    setNewNumber(e.target.value);
    console.log("new numb", newNumber)
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handlerContactChange} />
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
        {contacts.map((contact) => (
          <Contact key={contact.id} name={contact.name} number={contact.phone_number}/>
        ))}
      </ul>
    </div>
  );
};

export default App;
