import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-0 '>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-2'>Submit the form below to get in touch with me</p>

        </div>
        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/d5eed749-2d9b-4170-9a35-ff9034e45126" method='POST' className='flex flex-col w-full md:w-1/2'>
                <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md 
                 text-white focus:outline-none' />
                <input type="text" name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md 
                 text-white focus:outline-none' />
                <textarea name="message" placeholder='Enter your message' rows="8" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                <button className='text-white bg-gradient-to-b from-cyan-700 to-blue-800 px-6 py-3 mt-2 -mb-28 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
