import React from 'react'
import avatar from '../assets/avatar.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import{Link} from "react-scroll"

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4
      md:flex-row'>
        <div className='flex flex-col justify-center h-full'></div>
        <div>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
            <p className='text-gray-500 py-4 max-w-md'>
            Soy un programador con tres años de experiencia en el desarrollo de aplicaciones utilizando diversas tecnologías. Mi enfoque principal ha sido el desarrollo web, y he adquirido fuertes habilidades en JavaScript, React, NextJs,Tailwind CSS, Node.js, PHP, Laravel, MySQL,Express,NestJS </p>
            <div>
                <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                    <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                    </span>
                </Link>
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
