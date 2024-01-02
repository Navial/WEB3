import { useState, useEffect } from 'react'
import personService from './services/persons.jsx'
import Person from './components/Person.jsx'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newPerson, setNewPerson] = useState({
    name : '',
    number: ''
  })

  useEffect(() => { 
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      }),
      []
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
      id: persons.length + 1,
      name: newPerson.name,
      number: newPerson.number,
    }

    if(!present) {
      personService
        .create(personObject) 
        .then(response => {
          setPersons(persons.concat(response.data))
        })
    }
  }

  const handleNameChange = (event) => {
    setNewPerson({ ...newPerson, name: event.target.value });
  }
  
  const handleNumberChange = (event) => {
    setNewPerson({ ...newPerson, number: event.target.value });
  }

  const deletePerson = (id) => {
    personService
      .remove(id)
      .then(response => {
        setPersons(persons.map(person => person.id !== id ? person : response.data))
      })    
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
          <Person key={person.id} 
                  id={person.id} 
                  name={person.name} 
                  number={person.number} 
                  deletePerson={deletePerson}/>
        )}
      </ul>
    </div>
  )
}

export default App