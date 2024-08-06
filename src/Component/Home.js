import React from 'react'
import HeroSection from './HeroSection'
import Services from './Services'
import Trusted from './Trusted'

export default function Home() {
  return (
    <div>
      <HeroSection heading="Store"/>
      <Services/>
      <Trusted/>
    </div>
  )
}
