export default function mockGetStudents (tab) {

    const students = [
      { id: 1, name: 'John Doe', class: '10A', yearJoined: 2018, contact: '555-1234' },
      { id: 2, name: 'Jane Smith', class: '9B', yearJoined: 2019, contact: '555-5678' },
      { id: 3, name: 'Sam Wilson', class: '11C', yearJoined: 2017, contact: '555-8765' },
      { id: 4, name: 'Lisa Johnson', class: '12A', yearJoined: 2016, contact: '555-4321' },
      { id: 5, name: 'Tom Brown', class: '10B', yearJoined: 2018, contact: '555-6789' },
      { id: 6, name: 'John Doe', class: '10A', yearJoined: 2018, contact: '555-1234' },
      { id: 7, name: 'Jane Smith', class: '9B', yearJoined: 2019, contact: '555-5678' },
      { id: 8, name: 'Sam Wilson', class: '11C', yearJoined: 2017, contact: '555-8765' },
      { id: 9, name: 'Lisa Johnson', class: '12A', yearJoined: 2016, contact: '555-4321' },
      { id: 10, name: 'Tom Brown', class: '10B', yearJoined: 2018, contact: '555-6789' }
    ];
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(students);
      }, 1000);
    });
  };