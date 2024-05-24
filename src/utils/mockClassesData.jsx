const mockClassesData = () => {

    const classRooms = [];
    const grades = [1, 2, 3, 4, 5, 6];
    const sections = ['A', 'B'];
    
    grades.forEach((grade) => {
      sections.forEach((section) => {
        classRooms.push({
          id: classRooms.length + 1,
          class: `Class ${grade}${section}`,
        });
      });
    });
    
    
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve(classRooms)
    }, 1000)
  })
}

export default mockClassesData