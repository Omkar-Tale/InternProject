import React from 'react'
import ServicesCard from './ServicesCard'
import { services, useCases } from '../assets/assets'
import UseCaseCard from './UseCaseCard'

const UseCases = () => {
  return (
    <div className='relative sm:p-20 p-10'>
        <div className='absolute bg-[#FAA307] blur-2xl right-30 top-25 rounded-full h-5 w-5'></div>

        <div className='text-center flex flex-col'>
            <h1 className='font-bold sm:text-[48px] text-[20px] mx-auto font-poppins sm:max-w-full max-w-[60%]'>Where This Software is Used</h1>
            <p className='text-description font-roboto text-sm sm:text-[18px] text-center mx-auto sm:max-w-full max-w-[90%]'>HrWebsite serves diverse industries and organizations, adapting to unique HR challenges
across various sectors.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16'>
            {useCases.map((feature, index)=>(
                        <UseCaseCard image={feature.image} key={index} title={feature.title} description={feature.description} />
            ))}
        </div>
    </div>
  )
}

export default UseCases