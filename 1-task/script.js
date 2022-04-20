function kiloweightConvert(value) {
    document.getElementById("Pounds").innerHTML=value*2.2046;
    document.getElementById("Ounces").innerHTML=value*35.274;
    document.getElementById("Grams").innerHTML=value*1000;
  }

const form = document.getElementById("form");
const Pounds = document.getElementById("Pounds");
const Ounces = document.getElementById("Ounces");
const Grams = document.getElementById("Grams");

  form.addEventListener("submit"); 

  // function doNothingButtonClicked() {
  //   var input = document.getElementById("inputText").value
  //   document.getElementById("outputArea").innerHTML = input
  // } 


//   const input = document.querySelector('input');
//   const output = document.getElementById('output');
  
//   input.addEventListener('change', updateValue);
  
//   function updateValue(e) {
//     log.textContent = e.target.value;
//   }



//   function logSubmit(event) {
//     event.preventDefault();

//   }
 
//   const form = document.getElementById('form');
//   const log = document.getElementById('output');
//   form.addEventListener('submit', logSubmit);


  


//   form.addEventListener('submit');

//   document.getElementById('newCars').addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const output = document.getElementById('output');

//     const formData = new FormData(event.target)

//   const brand = formData.get('Brand');

//   document.querySelector('button').addEventListener('click', () => alert('John'));

//   document.querySelector('button').addEventListener('click', () => {
//     document.querySelector('p').innerText = 'Some text about me';
//   });

//   document.getElementById('button').addEventListener('click', () => document.getElementById('output')
  
