import { useState, useEffect } from 'react'
import Axios from 'axios'
import { BASE_URL, API_KEY } from '../constants'

export const useSetInfo = () => {
  const [info, setInfo] = useState([])
  const [url, setUrl] = useState(`${BASE_URL}?api_key=${API_KEY}`)

  useEffect(() => {
    Axios.get(url)
      .then(res => {
        setInfo(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [url])

  return [info, setInfo, setUrl]
}