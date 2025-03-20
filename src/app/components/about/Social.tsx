import Link from 'next/link'
import React from 'react'
import { Youtube, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Social = () => {
    return (
        <section className='bg-cyan-300 border-2 border-cyan-500 p-4 m-4'>
            <h1 className='text-2xl font-bold'>Social media links:</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='flex items-center justify-center gap-2'>
                    <Youtube size={24} color='red' />
                    <Link href='https://youtube.com/@techworld-e4w?si=a-Gl7qPsAbYsV0gj' target='_blank' rel='noreferrer noopener' >Tech World</Link>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <Facebook size={24} color='blue' className='fill'/>
                    <Link href='https://www.facebook.com/' target='_blank' rel='noreferrer noopener'>Facebook</Link>

                </div> 
                <div className='flex items-center justify-center gap-2'>
                    <Twitter size={24} color='skyblue' />
                   
                <Link href='https://www.twitter.com/' target='_blank' rel='noreferrer noopener' >Twitter</Link>
                </div> 

               <div className='flex items-center justify-center gap-2'>
                    <Linkedin size={24} color='blue' />
                    <Link href='https://www.linkedin.com/' target='_blank' rel='noreferrer noopener' >Linkedin</Link>
                </div> 
                <div    className='flex items-center justify-center gap-2'>
                    <Instagram size={24} color='purple' />
                <Link href='https://www.instagram.com/' target='_blank' rel='noreferrer noopener' >Instagram</Link>

                </div>
            </div>
        </section>
    )
}

export default Social