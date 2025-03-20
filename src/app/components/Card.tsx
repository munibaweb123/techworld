import React from 'react'
import Image from 'next/image'

const cards =[
    {
        id:1,
        title: 'react vs nextjs',
        content: 'Difference between react and nextjs',
        imageUrl: '/thumbnail1.png'
    },
    {
        id:2,
        title: 'create your first nextjs app',
        content: 'Description to create nextjs app',
        imageUrl: '/thumbnail2.png'
    },
    {
        id:3,
        title: 'button in nextjs app',
        content: 'How to create button in nextjs app',
        imageUrl: '/thumbnail3.png'
    }
]
const Card = () => {
   
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        
       {
        cards.map((card)=>(
            <div className='bg-cyan-100 border-2 border-cyan-500 p-4 m-4 rounded-sm'
            key={card.id}>
            <h3 className="text-xl font-bold">{card.title}</h3>
            <p>{card.content}</p>
            <div className='flex justify-center items-center rounded-sm'>
            <Image src={card.imageUrl} alt={card.title} width={500} height={500}/>
            </div>
            </div>
        ))
       }
       </div>
  )
}

export default Card