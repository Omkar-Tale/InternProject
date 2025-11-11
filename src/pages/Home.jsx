import React from 'react'
import TrustedBrands from '../components/TrustedBrands'
import Services from '../components/Services'
import UseCases from '../components/UseCases'

const Home = () => {
  return (
    <div>
        <TrustedBrands />
        <div className="h-[1px] bg-white"></div>
        <Services />
        <UseCases />
    </div>
  )
}

export default Home