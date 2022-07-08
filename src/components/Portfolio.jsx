import React from 'react'
import ee from '../assets/Reactfolio/LaravelSitio.png'
import port from '../assets/Reactfolio/portfolio.png'
import zooapp from '../assets/Reactfolio/ZOOAPP.png'
const Portfolio = () => {
    const portfolio = [
        {
            id:1,
            src: zooapp

        },
        {
            id:2,
            src: port

        },
        {
            id:3,
            src: ee

        }
    ]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:hscq'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
           <div className='pb-8 '>
           <p className='text-4xl font-bold inline border-b-4 botder-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my work right here</p>
           </div>
<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
{
portfolio.map(({id, src}) => (
   
    <div key={id}  className='shadow-md shadow-gray-600 rounded-lg'>
    <img src={src} alt=""  className='rounded-md duration-200 hover:scale-105'/>
        <div className='justify-center items-center flex '> 
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
        </div>
    </div>
    ))
}
</div>


        </div>
    </div>
  )
}

export default Portfolio