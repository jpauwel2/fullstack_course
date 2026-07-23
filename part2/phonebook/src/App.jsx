import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  const [searchName, setSearchName] = useState('')

 useEffect( () => {
    const fetchPersons = async () => {
      try {
        const data = await personService.getAll()
        setPersons(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchPersons()
  }, [])

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))

  const deletePerson = async (id) => {
    const toDeletePerson = persons.find(person=> person.id===id)
    if (window.confirm(`Delete ${toDeletePerson.name} ?`)) {
      await personService.delete_record(id)
      setPersons(persons.filter(p => p.id !== id))
    }
  }

  const updatePerson = async (id, newPersonObject) => {
    if (window.confirm(`${newPersonObject.name} is already added to phonebook, replace the old number with a new one?`)) {
      const updatedPersonObject = await personService.update(id,newPersonObject)
      setPersons(persons.map(person => person.id===id ? updatedPersonObject: person))
    }
  }

  const createPerson = async (personObject) => {
    const createdPerson = await personService.create(personObject)
    setPersons(persons.concat(createdPerson))

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName}
              setSearchName={setSearchName}/>
      <h3>Add a new</h3>
      <PersonForm 
        createPerson={createPerson}
        updatePerson={updatePerson}
        persons={persons}
        />
      <h3>Numbers</h3>
        <Persons 
          persons={filteredPersons}
          deletePerson={deletePerson}
        />
    </div>
  )
}

export default App