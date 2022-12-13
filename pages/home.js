import React from 'react';
import Hero from '../components/LandingPage/hero';
import What from '../components/LandingPage/whatFoss';
import Why from '../components/LandingPage/WhyFoss';
import Who from '../components/LandingPage/whoseFoss';
import When from '../components/LandingPage/whenFoss';
import Sponsors from '../components/LandingPage/sponsors';
import Testimonials from '../components/LandingPage/Testimonials';
import Gallery from '../pages/media';

function Home() {
  return (
    <div>
        <Hero/>
        <What/>
        <Why/>
        <Who/>
        <When/>
        <Sponsors/>
        <Testimonials/>
        <Gallery/>
    </div>
  )
}

export default Home