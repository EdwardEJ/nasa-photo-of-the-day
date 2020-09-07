import React from 'react'
import { useSearch } from '../hooks/useSearch'
import { Button, Input } from '@material-ui/core'

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
        <Input
          type='date'
          name='searchDate'
          onChange={handleChanges}
          value={values.searchDate || ''}
        />
        <Button onClick={handleSubmit}>Search This Date</Button>
      </label>
    </header>
  )
}

export default Searchbar