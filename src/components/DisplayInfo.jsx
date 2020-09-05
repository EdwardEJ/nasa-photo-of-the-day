import React from 'react'

const DisplayInfo = (props) => {
  const { info } = props

  return (
    <>
      <p>Image of {info.title}</p>
      <img src={info.url} alt={info.title} />
      <p>{info.explanation}</p>
      <p>&#169; Copyright {info.copyright}</p>
    </>
  )
}

export default DisplayInfo