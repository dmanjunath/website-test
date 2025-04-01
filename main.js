// write code for a counter

setTimeout(() => {
  const button = document.getElementById('counter-button');
  const counter = document.getElementById('count');

  let count = 0;
  button.addEventListener('click', () => {
    count++;
    counter.innerText = count;
    console.log('clicked', count);
  });
}, 1000)

setInterval(() => {
  fetch('https://run.mocky.io/v3/02eaa89b-4d55-42b5-8540-c29d499dae48')
    .then(res => res.json())
    .then(data => {
      console.log('health', data);
    });
}, 10_000);
