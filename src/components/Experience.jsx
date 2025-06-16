import React from 'react'
import Dockercom from '../assets/Experience/Dockercom.png'
import JavaScript from '../assets/Experience/JavaScript-logo.png'
import CSS from '../assets/Experience/css.png'
import github from '../assets/Experience/github.png'
import html from '../assets/Experience/html.png'
import vue from '../assets/Experience/vue.svg'
import mysql from '../assets/Experience/mysql.png'
import nodejs from '../assets/Experience/nodejs-1-logo-png-transparent.png'
import next from '../assets/Experience/Next.js Icon.svg'
import nuxt from '../assets/Experience/icon-green.svg'
import prisma from '../assets/Experience/Prisma-LightSymbol.svg'
import figma from '../assets/Experience/Figma-logo.svg'
import sass from '../assets/Experience/Daco_1407237.png'
import gsc from '../assets/Experience/pngegg.png'
import gtm from '../assets/Experience/Google Tag Manager.svg'  
import lighthouse from '../assets/Experience/cdnlogo.com_google-lighthouse-icon-may-2019.svg'
import ganalitycs from '../assets/Experience/cdnlogo.com_analytics.svg'
import ts from '../assets/Experience/ts.png'
import pinia from '../assets/Experience/Pinialogo.svg'
import express from '../assets/Experience/express.png'
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
            id:7,
            src:next, 
            title:'Next JS',
            style:'shadow-white'
            
        },
        {
            id:8,
            src:vue, 
            title:'Vue JS',
            style:'shadow-teal-500'
            
        },
        {
            id:18,
            src:nuxt, 
            title:'Nuxt JS',
            style:'shadow-teal-500'
        },
        {
            id:17,
            src:pinia,    
            title:'Pinia',
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
            id:14,
            src:prisma,
            title:'Prisma ORM',
            style:'shadow-sky-900'
        },
        {
            id:15,
            src:figma,
            title:'Figma',
            style:'shadow-red-500'
        },
        {
            id:13,
            src:express,
            title:'Express',
            style:'shadow-gray-500'
        },
            
            {
                id:16,
                src:sass,
                title:'Sass',
                style:'shadow-pink-500'
            },
            {
                id:19,
                src:gsc,
                title:'GSC',
                style:'shadow-red-500'
            },
            {
                id:20,
                src:gtm,
                title:'Google Tag Manager',
                style:'shadow-red-500'
            },
        {  
            id:21,
            src: ganalitycs,
            title:'G Anlytics',
            style:'shadow-red-500'
        },
        {
            id:22,
            src:lighthouse,
            title:'LightHouse',
            style:'shadow-red-500'
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
