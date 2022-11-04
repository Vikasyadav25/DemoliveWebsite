import React, { useEffect } from 'react'
import HeroSection from './Components/HeroSection'
import { useGlobalContext } from './Context'

const About = () => {
  const {updateAboutPage}=useGlobalContext();
  useEffect(()=>updateAboutPage(),[]);
  
  // data pass at a time
  return <HeroSection/>
}

export default About