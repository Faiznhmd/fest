'use client';
import Event from '@/components/Event';
import { Footer } from '@/components/Footer';
import { MainHero } from '@/components/MainHero';
// import { MainSponser } from '@/components/MainSponser';
import Navbar from '@/components/Navbar';
import Sponser from '@/components/Sponsers';
import TimeLine from '@/components/TimeLine';

// import { Timeline } from '@/components/ui/Sponser';
import React from 'react';

const page = () => {
  return (
    <>
      <Navbar />
      <MainHero />
      <Event />
      <TimeLine />
      <Sponser />
      {/* <MainSponser /> */}
      <Footer />
    </>
  );
};

export default page;
