import React from 'react'
import AboutSection from '@/components/ui/aboutUi/AboutSection'
import KayanMessage from '@/components/ui/aboutUi/KayanMessage'
import OurValues from '@/components/ui/aboutUi/OurValues'
import Contact from '@/components/ui/contactSection/Contact'
const About = () => {
  return (
    <div className='mt-0'>
        <AboutSection />
        <KayanMessage />
        <OurValues />
        <Contact />
    </div>
  )
}

export default About