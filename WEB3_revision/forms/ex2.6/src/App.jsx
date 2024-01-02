import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    let present = false;
    persons.forEach(person => {
      if (person.name === newName) {
        alert(`${newName} is already added to phonebook`)
        present = true;
        return
      }
    })
    const personObject = {
      name: newName
    }
    present ? setNewName('') : setPersons(persons.concat(personObject));
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
            <div>
              name: <input value={newName}
                            onChange={handlePersonChange}/>
            </div>
            <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App