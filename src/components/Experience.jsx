import React from 'react'
import Dockercom from '../assets/Experience/Dockercom.png'
import JavaScript from '../assets/Experience/JavaScript-logo.png'
import CSS from '../assets/Experience/css.png'
import github from '../assets/Experience/github.png'
import html from '../assets/Experience/html.png'
import laravel from '../assets/Experience/laravel.png'
import mysql from '../assets/Experience/mysql.png'
import nodejs from '../assets/Experience/nodejs-1-logo-png-transparent.png'
import php from '../assets/Experience/php.png'
import ts from '../assets/Experience/ts.png'
import nest from '../assets/Experience/nest.jpg'
import express from '../assets/Experience/express.png'
import potsgress from '../assets/Experience/potsgress.png'
import react from '../assets/Experience/react.png'
import Tailwind from '../assets/Experience/tail.png'
const Experience = () => {
    const techs = [
        {
            id:1,
            src:html, 
            title:'HTML',
            style:'shadow-orange-500'
            
        },
        {
            id:2,
            src:CSS, 
            title:'CSS',
            style:'shadow-blue-500'
            
        },
        {
            id:3,
            src:JavaScript, 
            title:'JavaScript',
            style:'shadow-yellow-500'
            
        },
        {
            id:4,
            src:react, 
            title:'React',
            style:'shadow-teal-500'
            
        },
        {
            id:5,
            src:Tailwind, 
            title:'Tailwind CSS',
            style:'shadow-teal-500'
            
        },
        {
            id:6,
            src:nodejs, 
            title:'Node JS',
            style:'shadow-green-700'
            
        },
         {
             id:7,
             src:laravel, 
             title:'Laravel',
             style:'shadow-red-700'
            
         },
         {
             id:8,
             src:php, 
             title:'PHP',
             style:'shadow-sky-950'
            
         },
        {
            id:9,
            src:github, 
            title:'Github',
            style:'shadow-white'
            
            
        },
        {
            id:10,
            src:Dockercom, 
            title:'Docker',
            style:'shadow-sky-300'
            
        },
        {
            id:11,
            src:mysql, 
            title:'MySQL',
            style:'shadow-sky-600'
            
        },
        {
            id:12,
            src:ts,
            title:'TypeScript',
            style:'shadow-sky-900'
        },
        {
            id:13,
            src:express,
            title:'Express',
            style:'shadow-sky-900'
        },
        {
            id:14,
            src:nest,
            title:'Nest JS',
            style:'shadow-sky-900'
        }
    ]
  return (
    <div name='experience'
     className='bg-gradient-to-b from-gray-800 to-black w-full h-screen '>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col
       justify-center w-full h-full text-white '>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
            <p className='py-6 text-white'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0'>
{
    techs.map(({id, src, title, style}) => (
        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className='w-20 mx-auto' />
                <p className='mt-4'>{title}</p>
                </div>
    ))}
            
        </div>
      </div>
    </div>
  );
};

export default Experience
