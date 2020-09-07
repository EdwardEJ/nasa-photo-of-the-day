import { useState } from 'react'

export const useSearch = () => {
  const [values, setValues] = useState('');

  const handleChanges = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  return [values, handleChanges]
}