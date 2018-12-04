import { interval } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import isPrime from 'quick-is-prime';

const btnStart = document.getElementById('btnStart');
const result = document.getElementById('result');

btnStart.addEventListener('click', () => {
  interval(500)
    .pipe(
      filter(item => isPrime(item)),
      tap(console.log)
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
