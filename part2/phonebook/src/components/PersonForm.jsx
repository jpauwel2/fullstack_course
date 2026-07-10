const PersonForm = ({newName,
                    newNumber,
                    setNewName,
                    setNewNumber,
                    setPersons,
                    persons}) => {
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addPerson = (event) => {

        event.preventDefault()
        if (persons.find((p)=> p.name===newName)) {
        alert(`${newName} is already added to phonebook`)
        }
        else {
        const personObject = {
            name: newName,
            number: newNumber
        }

        setPersons(persons.concat(personObject))
        console.log(persons)
        setNewName('')
        setNewNumber('')
        }
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