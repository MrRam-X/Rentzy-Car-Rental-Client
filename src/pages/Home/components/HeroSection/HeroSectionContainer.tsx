import React from 'react'
import type { Car } from '../../../../types/Cars'
import HeroSectionCarousel from './HeroSectionCarousel'
import HeroSection from './HeroSection'
type HeroSectionContainerProps = {
    carsList: Car[]
}

const HeroSectionContainer: React.FC<HeroSectionContainerProps> = ({carsList}) => {
  return (
    <>
        {carsList.length > 0 ? <HeroSectionCarousel carsList={carsList} /> : <HeroSection />}
    </>
  )
}

export default HeroSectionContainer