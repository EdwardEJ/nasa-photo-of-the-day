import React from 'react'
import { useSearch } from '../hooks/useSearch'


const Searchbar = () => {
  const [values, handleChanges, handleSubmit] = useSearch()


  return (
    <label htmlFor='search-date'>
      <input
        type='date'
        name='searchDate'
        onChange={handleChanges}
        value={values.date}
      />
      <button onClick={() => handleSubmit}>Search This Date</button>
    </label>
  )
}

export default Searchbar