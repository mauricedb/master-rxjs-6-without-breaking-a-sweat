const btnClear = document.getElementById('btnClear');
const btnAjax = document.getElementById('btnAjax');
const btnInterval = document.getElementById('btnInterval');
const btnArray = document.getElementById('btnArray');

const result = document.getElementById('result');

btnClear.addEventListener('click', function() {
  result.textContent = '';
});

const url =
  'http://api.icndb.com/jokes/random/?limitTo=[nerdy]&escape=javascript';

btnAjax.addEventListener('click', () => {
  fetch(url)
    .then(rsp => rsp.json())
    .then(data => ({ x: data.value.joke.length }))
    .then(obj => {
      if (obj.x < 75) {
        result.textContent = JSON.stringify(obj);
      }
    });
});

btnInterval.addEventListener('click', () => {
  let number = 0;
  let numbers = [];
  const handle = setInterval(() => {
    if (number < 7) {
      const obj = { x: number };
      numbers.push(obj);
      number++;
    } else {
      clearInterval(handle);
    }
    result.textContent = JSON.stringify(numbers);
  }, 1000);
});

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

btnArray.addEventListener('click', function() {
  const data = numbers.map(n => ({ x: n })).filter(obj => obj.x < 7);
  result.textContent = JSON.stringify(data);
});

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
