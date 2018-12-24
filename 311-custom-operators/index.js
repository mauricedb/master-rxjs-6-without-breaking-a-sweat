import { fromEvent, range } from 'rxjs';
import { tap, filter, mergeMapTo } from 'rxjs/operators';

import isPrime from './isPrime';

const btnStart = document.getElementById('btnStart');
const result = document.getElementById('result');

fromEvent(btnStart, 'click')
  .pipe(
    mergeMapTo(range(0, 50)),
    // filter(item => isPrime(item)),
    isPrime(),
    tap(console.log)
  )
  .subscribe(item => (result.textContent = item));

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
