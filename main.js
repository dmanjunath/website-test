// write code for a counter

setTimeout(() => {
  const button = document.getElementById('counter-button');
  const counter = document.getElementById('count');

  let count = 0;
  button.addEventListener('click', () => {
    count++;
    counter.innerText = count;
  });
}, 1000)
