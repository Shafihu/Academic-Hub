const mockTeachersData = () => {
  const data = [
    {
      id: 1,
      name: 'John Doe',
      subject: 'Mathematics',
      class: '10A',
      email: 'john.doe@example.com',
      gender: 'Male',
      yearJoined: 2021,
      salary: '₵ 5000',
      contact: '123-456-7890',
    },
    {
      id: 2,
      name: 'Jane Smith',
      subject: 'English',
      class: '10B',
      email: 'jane.smith@example.com',
      gender: 'Female',
      yearJoined: 2018,
      salary: '₵ 5500',
      contact: '123-456-7891',
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export default mockTeachersData;
