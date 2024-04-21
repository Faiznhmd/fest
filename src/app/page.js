import Event from '@/components/Event';
import { MainHero } from '@/components/MainHero';
import Navbar from '@/components/Navbar';
import React from 'react';

const page = () => {
  return (
    <>
      <Navbar />
      <MainHero />
      <Event />
      {/* <MainSponser /> */}
    </>
  );
};

export default page;
