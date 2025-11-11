import React from 'react'

const TrustedBrands = () => {
    const companyLogos = ["netflix", "google", "linkedin", "instagram", "facebook"];
    return (
        <div className='flex items-center justify-center sm:w-full'>
            
                <div className='max-w-6xl w-full py-10 sm:py-20'>
                    {/* heading */}
                    <div className='text-center font-poppins mb-6 sm:mb-14'>
                        <h1 className='font-bold sm:text-[48px] text-[20px] font-poppins'>Trusted by Leading Brands</h1>
                        <p className='text-description font-roboto text-sm sm:text-base text-center mx-auto sm:max-w-full max-w-[60%]'>Join thousands of organizations worldwide that trust HrWebsite for their HR
                            management needs.</p>
                    </div>

                    {/* brands */}

                    <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
                        <div className="absolute left-0 top-0 h-full w-8 sm:w-40 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
                        <div className="animate-marquee flex will-change-transform sm:min-w-[200%] min-w-2" style={{ animationDuration: "15s" }}>
                            <div className="flex">
                                {[...companyLogos, ...companyLogos].map((company, index) => (
                                    <img key={index} src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
                                        alt={company} className="sm:h-10 h-8 object-cover sm:mx-6 mx-0" draggable={false} />
                                ))}
                            </div>
                        </div>
                        <div className="absolute right-0 top-0 h-full w-8 sm:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
                    </div>

                </div>
             
        </div>
    )
}

export default TrustedBrands