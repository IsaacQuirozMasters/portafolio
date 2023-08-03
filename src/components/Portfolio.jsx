import React from 'react'
import ee from '../assets/Reactfolio/LaravelSitio.png'
import port from '../assets/Reactfolio/portfolio.png'
import viteApp from '../assets/Reactfolio/vite-app.png'
import viteApi from '../assets/Reactfolio/vite-api.png'
import zooapp from '../assets/Reactfolio/ZOOAPP.png'
const Portfolio = () => {
    const portfolio = [
        {
            id:1,
            src: zooapp,
            link : 'https://github.com/Alexandergv2117/ZOO-APP.git'

        },
        {
            id:2,
            src: port,
            link : 'https://github.com/IsaacQuirozMasters/portafolio.git'

        },
        {
            id:3,
            src: ee,
            link: 'https://github.com/PedroGonzalezA/formatos_estancia_estadias.git'

        },
        {
            id:4,
            src: viteApp ,  
            link: 'https://github.com/IsaacQuirozMasters/vite-project.git'
        },
        {
            id:5,
            src: viteApi ,
            link: 'https://github.com/IsaacQuirozMasters/vite-api.git'
        }
    ]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
           <div className='pb-8 '>
           <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my work right here</p>
           </div>
<div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0'>
{
portfolio.map(({id, src,link}) => (
   
    <div key={id}  className='shadow-md shadow-gray-600 rounded-lg'>
    <img src={src} alt=""  className='rounded-md duration-200 hover:scale-105'/>
        <div className='justify-center items-center flex '> 
            <button  className='w-1/2 px-5 py-3 m-2 duration-200 hover:scale-105'><a href={link}>Code</a></button>
        </div>
    </div>
    ))}
            </div>
        </div>
    </div>
    
  );
};

export default Portfolio
