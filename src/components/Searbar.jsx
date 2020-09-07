import React from 'react'
import { useSearch } from '../hooks/useSearch'

const initialValue = {
  searchDate: ''
}

const Searchbar = ({ onDate }) => {
  const [values, handleChanges] = useSearch(initialValue)

  const handleSubmit = e => {
    e.preventDefault();
    onDate(values.searchDate)
  }

  return (
    <header>
      <h1>NASA Photo Of The Day</h1>
      <label htmlFor='searchDate'>
        <input
          type='date'
          name='searchDate'
          onChange={handleChanges}
          value={values.searchDate || ''}
        />
        <button onClick={handleSubmit}>Search This Date</button>
      </label>
    </header>
  )
}

export default Searchbar