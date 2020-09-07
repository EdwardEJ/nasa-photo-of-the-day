import React from 'react'

const DisplayInfo = ({ info }) => {

  return (
    <section>
      <h2>Image of {info.title}</h2>
      {(info.media_type === 'image') ?
        <img src={info.url} alt={info.title} /> :
        null}
      {(info.media_type === 'video') ?
        <iframe title={info.title} src={info.url}></iframe> :
        null
      }
      <p>{info.explanation}</p>
      <p>&#169; Copyright {info.copyright}</p>
    </section>
  )
}

export default DisplayInfo