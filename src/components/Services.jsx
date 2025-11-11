import React from 'react'
import ServicesCard from './ServicesCard'
import { images, services } from '../assets/assets'

const Services = () => {
    return (
        <div className='bg-linear-to-tr from-[#FFF8E7] via-[#FFFFFF] to-[#FFF8E7] sm:p-20 p-10'>
            <div>
                <div className='text-center flex flex-col'>
                    <h1 className='font-bold sm:text-[48px] text-[20px] mx-auto font-poppins sm:max-w-full max-w-[80%]'>Why HrWebsite is the Right Choice</h1>
                    <p className='text-description font-roboto text-sm sm:text-[18px] text-center mx-auto sm:max-w-full max-w-[90%]'>Discover the key advantages that make HrWebsite the preferred HR solution for forward-thinking
                        organizations.</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
                    {services.map((service, index)=>(
                        <ServicesCard image={service.image} key={index} title={service.title} description={service.description} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services