import React, { useState, useEffect } from 'react'
import Display from './components/Display'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] =  useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setFilter ] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const remove = (id) => {
    return (event) => {
      if (window.confirm(`Delete ${persons.find(person => person.id === id).name}?`)) {
        personService.remove(id).then(
          setPersons(persons.filter(person => person.id !== id))
        )
      }
    }
  }

  const addContact = (event) => {
    event.preventDefault()
    const existing = persons.find(person => person.name === newName)
    if (existing) {
      if (newNumber !== existing.number) {
        if (window.confirm(`${newName} is already in phonebook, replce old number with new?`)) {
          const replacement = {...existing, number: newNumber}
          personService.changeNumber(existing.id, replacement).then(response => {
            setPersons(persons.map(person => person.id === existing.id ? replacement : person))
          })
        }
      } else {
        alert(`${newName} is already in the phonebook`)
      }

    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      personService.create(newPerson).then(response => {
        setPersons(persons.concat(response))
      })
    }
  }

  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value.toLowerCase())
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter}/> 
      <h2>Add a new</h2>
      <PersonForm
        handleName={handleName}
        handleNumber={handleNumber}
        addContact={addContact}
      />
      <h2>Numbers</h2>
      <div>
        <Display persons={persons} search={nameFilter} remove={remove}/>
      </div>
    </div>
  )
}

export default App
