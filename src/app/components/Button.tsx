'use client'
import React from 'react'

const Button = ({text}:{text:string}) => {
    const handleClick = () => {
        alert('button is clicked!')
    }
  return (
    <button onClick={handleClick} className='text-white bg-cyan-800 p-4 rounded-lg text-4xl'>{text}</button>
  )
}

export default Button