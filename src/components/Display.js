import React from 'react'
import Person from './Person'

const Display = ({ persons, search, remove }) => {
    return (
        persons.filter(person => person.name.toLowerCase()
        .includes(search))
        .map(person =>
            <div key={person.id}>
                <Person person={person}/>
                <button onClick={remove(person.id)}>Remove</button>
            </div>
        )
    )
}

export default Display