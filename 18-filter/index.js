import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

import { isPrime } from './isPrime';

const btnStart = document.getElementById('btnStart');
const result = document.getElementById('result');

btnStart.addEventListener('click', e => {
  interval(1000)
    .pipe(
      tap(console.log),
    )
    .subscribe(item => {
      result.textContent = item;
    });
});

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
