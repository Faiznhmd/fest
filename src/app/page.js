'use client';
// import Carousals from '@/components/Carausal/Carausals.jsx';
import Card from '@/components/card/Card';
import Cards from '@/components/cards/Cards';
// import Carousal from '@/components/Carousal';
import Event from '@/components/Event';
import { Footer } from '@/components/Footer';
import ScrollCarousel from '@/components/Infinte';
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
      {/* <Card /> */}
      {/* <Cards /> */}
      <Event />
      {/* <Carousal /> */}
      {/* <Carousals /> */}
      <TimeLine />
      {/* <ScrollCarousel /> */}
      <Sponser />
      <Footer />
    </>
  );
};

export default page;
