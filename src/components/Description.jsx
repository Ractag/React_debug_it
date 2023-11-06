import React from 'react'

const Description = ({ label, text, cls }) => {
  return (
    <p className={cls}>
      <span className="title is-4">{label} : </span>
      {text}
    </p>
  )
}

export default Description