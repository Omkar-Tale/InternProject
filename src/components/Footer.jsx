import React from 'react'
import { linkSections } from '../assets/assets'

const Footer = () => {
    return (
        <div className='flex items-center flex-col justify-around sm:p-16 p-5 '>
                <div className='flex justify-around px-10'>
                    <div>
                        <h1 className='text-white'>HrWebsite</h1>
                        <p className='text-description w-1/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aspernatur dolores explicabo accusantium eius omnis adipisnda.</p>
                        <div>
                            <div className='flex flex-row gap-4'>
                                <p>s</p>
                                <p>s</p>
                                <p>e</p>
                                <p>g</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-30'>
                        {linkSections.map((section, i) => {
                            return (
                                <div key={i} className='flex flex-col gap-4'>
                                    <h3>{section.title}</h3>
                                    <ul className='flex flex-col gap-1'>
                                        <li key={i} className='text-gray-400 hover:text-white cursor-pointer'>
                                            {section.links.map((link, index) => (
                                                <li
                                                    key={index}
                                                    className="text-gray-400 hover:text-white cursor-pointer"
                                                >
                                                    {link}
                                                </li>
                                            ))}
                                        </li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>

            <div className='flex'>
                <div>
                    <p>ajsd;lfkjalsdkfjkasdfj ljkahsdfkj</p>
                </div>
                <div className='flex'>
                    <p>sldl</p>
                    <p>aslkd</p>
                    <p>lskdjfpaosdf</p>
                </div>
            </div>
        </div>
    )
}

export default Footer