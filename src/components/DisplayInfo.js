import React from 'react'

export const DisplayInfo = (props) => {

  const { info } = props
  return (
    <>
      <p>{info.title}</p>
    </>
  )
}