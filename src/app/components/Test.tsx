import React from 'react'

const testimonials =[
    {
        id:1,
        name: 'John Doe',
        title: 'CEO',
        org: 'Google',
        desc: 'This is a testimonial of John Doe',
    },
    {
        id:2,
        name: 'Alice Doe',
        title: 'CTO',
        org: 'Facebook',
        desc: 'This is a testimonial of Alice Doe',
    },
    {
        id:3,
        name: 'Marry Doe',
        title: 'CFO',
        org: 'Amazon',
        desc: 'This is a testimonial of Marry Doe',
    }
]
const Test = () => {
  return (
    <section className='bg-cyan-300 border-2 border-cyan-500 p-4 m-4 rounded-sm'>
        <h2 className='uppercase text-2xl text-center font-bold'>Testimonials</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {
            testimonials.map((test)=>(
                <div className='bg-cyan-100 border-2 border-cyan-500 p-4 m-4 rounded-sm'
                key={test.id}>
                <h3 className="text-xl font-bold">{test.name}</h3>
                <p>{test.title}</p>
                <p>{test.org}</p>
                <p>{test.desc}</p>
                </div>
            )
            )
        }
        </div>

    </section>
  )
}

export default Test