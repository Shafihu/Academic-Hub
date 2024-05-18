'use client';

import React, { useEffect, useState } from 'react';
import BarChart from './BarChart';

const Revenue = ({ year }) => {
  const [revenueData, setRevenueData] = useState(null);

  useEffect(() => {
    const fetchRevenueData = async () => {
      // Assuming you have an API endpoint to fetch revenue data by year
    //   const response = await fetch(`/api/revenue?year=${year}`);
    //   const data = await response.json();
      setRevenueData(year);
      console.log(year)
    };

    if (year) {
      fetchRevenueData();
    }
  }, [year]);

  return (
    <div className=''>
      {revenueData ? <BarChart revenueData={revenueData} /> : 'Loading...'}
    </div>
  );
};

export default Revenue;
