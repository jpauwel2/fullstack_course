import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [searchName, setSearchName] = useState('')
  const [infoMessage, setInfoMessage] = useState(null)
  const [infoColor, setInfoColor] = useState('green')

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

  const showNotification = (message, color) => {
    setInfoColor(color)
    setInfoMessage(message)
    setTimeout(() => {setInfoMessage(null)},
              5000)
  }

  const deletePerson = async (id) => {
    const toDeletePerson = persons.find(person=> person.id===id)
    if (window.confirm(`Delete ${toDeletePerson.name} ?`)) {
      await personService.delete_record(id)
      setPersons(persons.filter(p => p.id !== id))
    }
  }

  const updatePerson = async (id, newPersonObject) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`${newPersonObject.name} is already added to phonebook, replace the old number with a new one?`)) {
      try {
        const updatedPersonObject = await personService.update(id,newPersonObject)
        setPersons(persons.map(person => person.id===id ? updatedPersonObject: person))
        showNotification(`Updated ${updatedPersonObject.name} with number ${updatedPersonObject.number}`,
          'green'
        )
      }
      catch (error) {
        showNotification(`Information of ${person.name} has already been removed from server`,
          'red'
        )
        setPersons(persons.filter(p=>p.id !== id))
      }
    }
  }

  const createPerson = async (personObject) => {
    const createdPerson = await personService.create(personObject)
    setPersons(persons.concat(createdPerson))
    setInfoMessage(`Added ${createdPerson.name}`)
    setTimeout(() => {setInfoMessage(null)},
      5000)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={infoMessage} color={infoColor}/>
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