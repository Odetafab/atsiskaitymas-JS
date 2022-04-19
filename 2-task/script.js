let counter = 0;

document.querySelector('button').addEventListener('click', () => {
  counter++;
  document.querySelector('div').innerText = counter;
});