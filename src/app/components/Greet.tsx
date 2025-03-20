import React from 'react'
interface greetProps{
    name:string;
}

const Greet = ({name}:greetProps) => {
  return (
    <div className=' bg-cyan-900 text-white text-center'><h2 className='uppercase'>Welcome to tech world {name}!</h2></div>
  )
}

export default Greet