'use client';

import mockTeachersData from "./mockTeachersData";

// Mock data function
function mockGetData(tab) {
  const Students = [
    {
      id: 1,
      img: '/profilePicAlt.png',
      name: 'Kwame Osei',
      class: '10A',
      email: 'kwame.osei@student.com',
      gender: 'Male',
      yearJoined: 2021,
      contact: '321-654-0987',
    },
    {
      id: 2,
      img: '/profilePicAlt.png',
      name: 'Akua Addo',
      class: '10B',
      email: 'akua.addo@student.com',
      gender: 'Female',
      yearJoined: 2020,
      contact: '321-654-0988',
    },
    {
      id: 3,
      img: '/profilePicAlt.png',
      name: 'Yaw Mensah',
      class: '10C',
      email: 'yaw.mensah@student.com',
      gender: 'Male',
      yearJoined: 2022,
      contact: '321-654-0989',
    },
    {
      id: 4,
      img: '/profilePicAlt.png',
      name: 'Ama Kofi',
      class: '10D',
      email: 'ama.kofi@student.com',
      gender: 'Female',
      yearJoined: 2021,
      contact: '321-654-0990',
    },
    {
      id: 5,
      img: '/profilePicAlt.png',
      name: 'Kojo Owusu',
      class: '10E',
      email: 'kojo.owusu@student.com',
      gender: 'Male',
      yearJoined: 2023,
      contact: '321-654-0991',
    },
    {
      id: 6,
      img: '/profilePicAlt.png',
      name: 'Efua Amponsah',
      class: '11A',
      email: 'efua.amponsah@student.com',
      gender: 'Female',
      yearJoined: 2021,
      contact: '321-654-0992',
    },
    {
      id: 7,
      img: '/profilePicAlt.png',
      name: 'Kofi Boateng',
      class: '11B',
      email: 'kofi.boateng@student.com',
      gender: 'Male',
      yearJoined: 2022,
      contact: '321-654-0993',
    },
    {
      id: 8,
      img: '/profilePicAlt.png',
      name: 'Adjoa Asante',
      class: '11C',
      email: 'adjoa.asante@student.com',
      gender: 'Female',
      yearJoined: 2023,
      contact: '321-654-0994',
    },
    {
      id: 9,
      img: '/profilePicAlt.png',
      name: 'Nana Yaa Badu',
      class: '11D',
      email: 'nana.yaa.badu@student.com',
      gender: 'Female',
      yearJoined: 2020,
      contact: '321-654-0995',
    },
    {
      id: 10,
      img: '/profilePicAlt.png',
      name: 'Kojo Ababio',
      class: '11E',
      email: 'kojo.ababio@student.com',
      gender: 'Male',
      yearJoined: 2021,
      contact: '321-654-0996',
    }
    
  ];

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