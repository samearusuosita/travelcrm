import React from 'react'

const Title = ({Heading, SubHeading}) => {
  return (
    <>
        <h3 className='heading-title'>{Heading}</h3>
        <p className='sub-text'>{SubHeading}</p>
    </>
  )
}

export default Title
