'use client';

import mockTeachersData from "./mockTeachersData";

// Mock data function
function mockGetData(tab) {
  const Students = [
    { id: 1, name: 'John Doe', class: '10A', yearJoined: 2018, contact: '555-1234' },
    { id: 2, name: 'Jane Smith', class: '9B', yearJoined: 2019, contact: '555-5678' },
    { id: 3, name: 'Sam Wilson', class: '11C', yearJoined: 2017, contact: '555-8765' },
    { id: 4, name: 'Lisa Johnson', class: '12A', yearJoined: 2016, contact: '555-4321' },
    { id: 5, name: 'Tom Brown', class: '10B', yearJoined: 2018, contact: '555-6789' },
  ];

  const Teachers = mockTeachersData();

  const Employees = [
    { id: 1, name: 'Mr. Sam Wilson', yearJoined: 2017, contact: '555-8765' },
    { id: 2, name: 'Mrs. Lisa Johnson', yearJoined: 2016, contact: '555-4321' },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      if (tab === "Students") resolve(Students);
      else if (tab === "Teachers") resolve(Teachers);
      else if (tab === "Employees") resolve(Employees);
      else resolve([]);
    }, 1000);
  });
}

export default mockGetData;