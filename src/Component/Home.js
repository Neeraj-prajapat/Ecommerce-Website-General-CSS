import React from 'react'
import HeroSection from './HeroSection'
import Services from './Services'
import Trusted from './Trusted'
import FeatureProduct from './FeatureProduct'

export default function Home() {
  return (
    <div>
      <HeroSection heading="Store"/>
      <FeatureProduct/> 
      <Services/>
      <Trusted/>
    </div>
  )
}
