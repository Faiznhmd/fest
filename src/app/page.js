'use client';
import Carousal from '@/components/Carousal';
import Event from '@/components/Event';
import { Footer } from '@/components/Footer';
import { MainHero } from '@/components/MainHero';
import Navbar from '@/components/Navbar';
import Sponser from '@/components/Sponsers';
import TimeLine from '@/components/TimeLine';
import Hub from '@/components/Hub';

import React from 'react';

const page = () => {
  return (
    <>
      <Navbar />
      <MainHero />
      <Event />

      {/* <Slider /> */}
      {/* <Carousal /> */}
      {/* <Parallax /> */}
      {/* <Slider /> */}
      <TimeLine />
      <Sponser />
      <Footer />
    </>
  );
};

export default page;
