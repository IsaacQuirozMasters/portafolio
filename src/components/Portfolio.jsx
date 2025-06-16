import React from 'react'
import virture from '../assets/Reactfolio/Virture.png'
import propiedades from '../assets/Reactfolio/PropiedadesCancun.png'
import patio from '../assets/Reactfolio/Patio.png'
import zooapp from '../assets/Reactfolio/ZOOAPP.png'
const Portfolio = () => {
    const portfolio = [
        {
            id:1,
            src: propiedades,
            link : 'https://github.com/IsaacQuirozMasters/portafolio.git',
            srcPublic: 'https://isaacquirozmasters.vercel.app/',
            isActiveSrcPublic: false,
            name: 'Propiedades LP'

        },
        {
            id:2,
            src: virture,
            link: 'https://github.com/PedroGonzalezA/formatos_estancia_estadias.git',
            srcPublic: 'https://app.virture.io/',
            isActiveSrcPublic: false,
            name: 'Virture Platform'

        },
        {
            id:3,
            src: patio,  
            link: 'https://github.com/IsaacQuirozMasters/vite-project.git',
            srcPublic: 'https://patio.wizeline.io/',
            isActiveSrcPublic: false,
            name: 'Patio'
        },
        {
            id:4,
            src: zooapp,
            link : 'https://github.com/Alexandergv2117/ZOO-APP.git',
            srcPublic: 'https://zooapp.vercel.app/',
            isActiveSrcPublic: true,
            name: 'ZOO APP'

        }
     
    ]
return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
                 <div className='pb-8 '>
                 <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                 </div>
<div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0'>{portfolio.map(({id, src, link, srcPublic, isActiveSrcPublic, name}) => (
    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <a href={src} target="_blank" rel="noreferrer">
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 object-cover object-left-top max-h-[120px] w-full '/>
            </a>
            <div className='justify-center items-center flex overflow-hidden '> 
                    <button className='w-1/2 py-3 m-2 duration-200 hover:scale-105' blank >
                            <a href={srcPublic} target="_blank" rel="noreferrer" className='text-sm flex justify-center'>{name}</a>
                    </button>
                    {/* Contenedor para los nuevos botones */}
                 
                    <div>
                            
                            <link rel="shortcut icon" className='text-sm text-white' href="%PUBLIC_URL%/Isaac.png" type="image/x-icon" />
                    </div>
            </div>
            <div className='flex justify-center w-full'> {/* Usa flex y w-full para que los botones estén uno al lado del otro */}
            {isActiveSrcPublic && (
                            <button className='w-1/2 py-3 m-2 duration-200 hover:scale-105 bg-sky-600 rounded'>
                                    <a href={src} target="_blank" rel="noreferrer" className='text-sm flex justify-center'>Code</a>
                            </button>
                              )}
                                    <button className='w-1/2 py-3 m-2 duration-200 hover:scale-105 hover:bg-lime-800 rounded'>
                                            <a href={srcPublic} target="_blank" rel="noreferrer" className='text-sm flex justify-center'>Enlace</a>
                                    </button>
                          
                    </div>
    </div>
                    ))}
                 </div>
            </div>
    </div>
)
};

export default Portfolio
