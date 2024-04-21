import React from 'react';
import CustomTabPanel from '../components/MetricsTabs';

const PortfolioPage = () => {
  return (
    <div className="px-40 overflow-scroll mx-auto">
      <div className="fixed bg-white z-50 w-[1400px] h-[72px] justify-between items-center inline-flex flex-row">
        <div className="text-black text-base font-medium font-['Poppins']">
          Beacon Street
        </div>
      </div>
      <div className="mt-20 items-center">
        <CustomTabPanel />
      </div>
    </div>
  );
};

export default PortfolioPage;

