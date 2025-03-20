
import React from 'react'
import Card from './Card'
import Button from './Button'

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center bg-cyan-300 border-2 border-cyan-500 p-4 m-4'>
        <h1 className="text-4xl font-bold text-center uppercase">Welcome to Tech world</h1>
        <p className="text-lg text-center">This is a simple hero component</p>
        <Button text='more info'/>
        <Card/>
    </section>
  )
}

export default Hero