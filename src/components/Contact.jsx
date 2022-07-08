import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white p-4'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div className='flex justify-center items-center'><form action="https://getform.io/f/05e71a62-5006-4087-a4ed-1750b72e8cc0" method='POST' className='flex flex-col w-full md:w-1/2'>
            <input type="text" name="name" placeholder='enter your name' className='p-2 bd-transparent
            border-2 rounded-md  text-white focus:outline-none bg-transparent'  />
            <input type="text" name="email"  placeholder='enter your email' className='p-2 bd-transparent my-4
            border-2 rounded-md  text-white focus:outline-none bg-transparent'  />
            <textarea name="message" id=""  placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' rows="10"></textarea>
            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
            </form></div>
      </div>
    </div>
  )
}

export default Contact
