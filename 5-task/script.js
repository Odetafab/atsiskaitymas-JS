const users = [
    { id: '1', name: 'John Smith', age: 20, hasDog: true },
    { id: '2', name: 'Ann Smith', age: 24, hasDog: false },
    { id: '3', name: 'Tom Jones', age: 31, hasDog: true },
    { id: '4', name: 'Rose Peterson', age: 17, hasDog: false },
    { id: '5', name: 'Alex John', age: 25, hasDog: true },
    { id: '6', name: 'Ronald Jones', age: 63, hasDog: true },
    { id: '7', name: 'Elton Smith', age: 16, hasDog: true },
    { id: '8', name: 'Simon Peterson', age: 30, hasDog: false },
    { id: '9', name: 'Daniel Cane', age: 51, hasDog: true },
  ];

  function filterDogOwers(element) {
      return hasDog.includes(element) ? false : true;
  }

  get age() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}


  function filterAdults(age) {
      return age > 18;
  }

  function checkAge(age, confirmMessage) {
    return age > 18 ? true : confirm(confirmMessage);
  }

  function checkAge(age, confirmMessage) {
    return age > 18 ? true : confirm(confirmMessage);
  }
  
  // console.log(checkAge(18, 'Did parents allow you?'));
  
  const checkAgeLiteral = function(age, confirmMessage) {
    return age > 18 ? true : confirm(confirmMessage);
  };
  
  console.log(checkAgeLiteral(18, 'Did parents allow you?'));
  
  const checkAgeArrow = (age, confirmMessage) => age > 18 ? true : confirm(confirmMessage);
  
  console.log(checkAgeArrow(18, 'Did parents allow you?'));