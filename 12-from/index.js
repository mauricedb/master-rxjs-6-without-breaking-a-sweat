import { from } from 'rxjs';

const btnStart = document.getElementById('btnStart');
const result = document.getElementById('result');
const liElements = document.querySelectorAll('li');

btnStart.addEventListener('click', () => {
  // from([1, 2, 3]).subscribe(e => console.log(e));

  from(liElements).subscribe(el => {
    el.textContent = 'using from()';
  });

  const p = new Promise(resolve => setTimeout(() => resolve(42), 2000));
  from(p).subscribe(e => (result.textContent = e));
});

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
