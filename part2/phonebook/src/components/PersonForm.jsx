import { useState } from 'react'

const PersonForm = ({createPerson,
                      updatePerson,
                    persons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    
    
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addPerson = async (event) => {
      event.preventDefault()
      const personObject = {
          name: newName,
          number: newNumber
      }
      const existingPerson = persons.find((p)=> p.name===newName)
      if (existingPerson) {
        await updatePerson(existingPerson.id,personObject)
      }
      else {
        await createPerson(personObject)
      }
      setNewName('')
      setNewNumber('')
    }
    return (
        <form onSubmit={addPerson}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleNameChange}
                />
        </div>
        <div>
          number: <input
                    value={newNumber}
                    onChange={handleNumberChange}
                  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm