import { fromEvent, range, tap, mergeMapTo } from 'rxjs';

import isPrime from './isPrime';

const btnStart = document.getElementById('btnStart');
const result = document.getElementById('result');

fromEvent(btnStart, 'click')
  .pipe(
    mergeMapTo(range(0, 50)),
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
