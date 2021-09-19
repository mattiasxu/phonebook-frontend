import React from 'react'

const Filter = ({ handleFilter }) => {
    return (
        <div>
            Search: <input onChange={handleFilter}></input>
        </div>
    )
}

export default Filter