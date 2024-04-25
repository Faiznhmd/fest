'use client';
import React from 'react';
import Event from '@/components/Event';
import { Footer } from '@/components/Footer';
import { MainHero } from '@/components/MainHero';
import Navbar from '@/components/Navbar';
import Sponser from '@/components/Sponsers';
import TimeLine from '@/components/TimeLine';
import { About } from '@/components/ui/About';

const page = () => {
  return (
    <>
      <Navbar />
      <MainHero />
      <About />
      <Event />
      <TimeLine />
      <Sponser />
      <Footer />
    </>
  );
};

export default page;
