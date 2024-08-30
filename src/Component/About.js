import React from 'react'
import HeroSection from './HeroSection'
import { useProductContext} from '../Context/ProductContext'


export default function About() {

  const{myName} = useProductContext

  const data = {
    heading:"Ecommerce",
  };


  return (
    <>
      {myName}
      <HeroSection myData={data} />{""}
    </>
  )
}
