import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])

  const [searchName, setSearchName] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const hook = () => {
    const fetchPersons = async () => {
      try {
        const response = await fetch('http://localhost:3001/persons')
        const data = await response.json()
        setPersons(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchPersons()
  }

  useEffect(hook, [])

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName}
              setSearchName={setSearchName}/>
      <h3>Add a new</h3>
      <PersonForm 
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
        persons={persons}
        />
      <h3>Numbers</h3>
        <Persons persons={filteredPersons}/>
    </div>
  )
}

export default App