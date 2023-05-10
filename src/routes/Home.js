import React from 'react';
import MainImg from '../component/MainImg';
import DeadlineSale from '../component/DeadlineSale';
import MarketingBanner from '../component/MarketingBanner';
import DailySpecilas from '../component/DailySpecilas';

function Home() {
  return (
    <>
      <MainImg />
      <DeadlineSale />
      <MarketingBanner />
      <DailySpecilas />
    </>
  );
}

export default Home;
