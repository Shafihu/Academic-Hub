'use client';

import mockTeachersData from "./mockTeachersData";
import mockStudentsData from "./mockStudentsData";

// Mock data function
function mockGetData(tab) {
  const Students = mockStudentsData();
  const Teachers = mockTeachersData();

  const Employees = [
    { id: 1, img: '/profilePicAlt.png', name: 'Mr. Sam Wilson', yearJoined: 2017, contact: '555-8765' },
    { id: 2, img: '/profilePicAlt.png', name: 'Mrs. Lisa Johnson', yearJoined: 2016, contact: '555-4321' },
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