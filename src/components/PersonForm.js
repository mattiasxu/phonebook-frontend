import React from 'react'

const PersonForm = ( {handleName, handleNumber, addContact} ) => {
    return (
        <form onSubmit={addContact}>
            <div>name: <input onChange={handleName}/></div>
            <div>number: <input onChange={handleNumber}/></div>
            <button type="submit">add</button>
        </form>
    )
}

export default PersonForm