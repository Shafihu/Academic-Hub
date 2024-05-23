import React from 'react'

const mockTeachersData = () => {
    const data = [
        {
          name: 'John Doe',
          subject: 'Mathematics',
          class: '10A',
          email: 'john.doe@example.com',
          gender: 'Male',
          salary: '$5000',
          phoneNumber: '123-456-7890',
        },
        {
          name: 'Jane Smith',
          subject: 'English',
          class: '10B',
          email: 'jane.smith@example.com',
          gender: 'Female',
          salary: '$5500',
          phoneNumber: '123-456-7891',
        },
        
      ];
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(data)
    }, 1000)
  });
}

export default mockTeachersData