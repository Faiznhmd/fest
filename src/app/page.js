'use client';
// import Carousals from '@/components/Carausal/Carausals.jsx';
import Card from '@/components/card/Card';
// import Carousal from '@/components/Carousal';
import Event from '@/components/Event';
import { Footer } from '@/components/Footer';
import { MainHero } from '@/components/MainHero';
import Navbar from '@/components/Navbar';
import Sponser from '@/components/Sponsers';
import TimeLine from '@/components/TimeLine';
import { About } from '@/components/ui/About';

// import Hub from '@/components/Hub';

import React from 'react';

const page = () => {
  return (
    <>
      <Navbar />
      <MainHero />
      <About />
      <Event />
      <Card />
      {/* <Carousal /> */}
      {/* <Carousals /> */}
      <TimeLine />
      <Sponser />
      <Footer />
    </>
  );
};

export default page;
