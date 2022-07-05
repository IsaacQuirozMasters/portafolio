import React from 'react'
import avatar from '../assets/avatar.png'
import {HiArrowNarrowRight, MdOutlineKeyboardArrowRight} from 'react-icons/md'
const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4
      md:flex-row'>
        <div className='flex flex-col justify-center h-full'></div>
        <div>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
            <p className='text-gray-500 py-4 max-w-md'>
            I am a programmer with three years of experience developing applications using various technologies. My main focus has been on web development, and I've gained strong skills in JavaScript, React, Tailwind CSS, Node.js, PHP, Laravel, MySQL, Java, Python, and MongoDB.            </p>
            <div>
                <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                    Portfolio
                    <span>
                    <MdOutlineKeyboardArrowRight/>
                    </span>
                </button>
            </div>
        </div>
        <div>
            <img src={avatar} alt="avatar" className="w-96"/>
        </div>
      </div>
    </div>
  )
}

export default Home
