
  // Get average age
  
  const users = [
    { id: '1', name: 'John Smith', age: 20 },
    { id: '2', name: 'Ann Smith', age: 24 },
    { id: '3', name: 'Tom Jones', age: 31 },
    { id: '4', name: 'Rose Peterson', age: 17 },
    { id: '5', name: 'Alex John', age: 25 },
    { id: '6', name: 'Ronald Jones', age: 63 },
    { id: '7', name: 'Elton Smith', age: 16 },
    { id: '8', name: 'Simon Peterson', age: 30 },
    { id: '9', name: 'Daniel Cane', age: 51 },
  ];
  
  
  function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let john = { name: "John", age: 20 };
  let ann = { name: "Ann", age: 24 };
  let tom = { name: "Tom", age: 31 };
  let rose = { name: "Rose", age: 17 };
  let alex = { name: "Alex", age: 25 };
  let ronald = { name: "Ronald", age: 63 };
  let elton = { name: "Elton", age: 16 };
  let simon = { name: "Simon", age: 30 };
  let daniel = { name: "Daniel", age: 51 };
  
  
  
  let arr = [john, ann, tom, rose, alex, ronald, elton, simon, daniel];
  
  alert(getAverageAge(arr)); 

// Get Users Names 

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];


users.sort(function getUsersNames (a, b) {
  const nameA = a.name.toUpperCase(); 
  const nameB = b.name.toUpperCase(); 
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
});

