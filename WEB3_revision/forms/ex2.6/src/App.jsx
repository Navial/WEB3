import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567'
    }
  ]) 
  const [newPerson, setNewPerson] = useState({
    name : '',
    number: ''
  })

  const addPerson = (event) => {
    event.preventDefault()
    let present = false;
    persons.forEach(person => {
      if (person.name === newPerson.name) {
        alert(`${newPerson.name} is already added to phonebook`)
        present = true;
        return
      }
    })
    const personObject = {
      name: newPerson.name,
      number: newPerson.number,
    }
    present ? setNewPerson('') : setPersons(persons.concat(personObject));
  }

  const handleNameChange = (event) => {
    setNewPerson({ ...newPerson, name: event.target.value });
  }
  
  const handleNumberChange = (event) => {
    setNewPerson({ ...newPerson, number: event.target.value });
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
            <div>name: <input value={newPerson.name}
                              onChange={handleNameChange}/>
            </div>
            <div>number: <input value={newPerson.number}
                              onChange={handleNumberChange}/>
            </div>
            <div><button type="submit">add</button></div>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <li key={person.name}>{person.name} : {person.number}</li>
        )}
      </ul>
    </div>
  )
}

export default App