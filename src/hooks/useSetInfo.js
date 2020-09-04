import { useState, useEffect } from 'react'
import Axios from 'axios'

import { BASE_URL, API_KEY } from '../constants'

export const useSetInfo = () => {
  const [info, setInfo] = useState({})

  console.log(info)

  useEffect(() => {
    debugger
    Axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setInfo(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return { info }
}