import React from 'react'

const ContactForm = () => {
  return (
    <form className='flex flex-col space-y-2 bg-cyan-300 p-4 shadow-lg w-1/2 mx-auto'
  action="https://formspree.io/f/xdkeapaj"
  method="POST"
>
 <div className="flex flex-col space-y-2">
 <label className='flex flex-col space-y-2 justify-start '>
    Your email:
    <input type="email" name="email" className='border-2 border-white'/>
  </label>
 </div>
 <div className='flex flex-col space-y-2'>
 <label className='flex flex-col space-y-2 '>
    Your message:
    <textarea name="message" rows={5} className='border-2 border-white'></textarea>
  </label>
 </div>
   {/* your other form fields go here  */}
  <div className='flex items-center justify-center '>
  <button className='bg-cyan-500 text-2xl hover:bg-cyan-700 p-4 rounded-md' type="submit">Send</button>
  </div>
</form>
  )
}

export default ContactForm