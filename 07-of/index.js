import { of } from 'rxjs';

const btnStart = document.getElementById('btnStart');
const result = document.getElementById('result');

btnStart.addEventListener('click', () => {
  const stream$ = of(1, 2, 3, 4);

  console.log('Before subscribe');
  stream$.subscribe(e => {
    console.log(e);
    result.textContent = e;
  });
  console.log('After subscribe');
});

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
