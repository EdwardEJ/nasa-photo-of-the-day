import { useState } from 'react'
import { useSetInfo } from './useSetInfo'
import { BASE_URL, API_KEY } from '../constants'

export const useSearch = () => {
  const [values, setValues] = useState('');
  const { setUrl } = useSetInfo()
  console.log(setUrl)

  const handleChanges = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  console.log(values);

  const handleSubmit = e => {
    debugger
    if (values !== '') {
      e.preventDefault()
      setUrl(`${BASE_URL}?api_key=${API_KEY}&date=${values.searchDate}`)
    }
  }

  return [values, handleChanges, handleSubmit]
} 