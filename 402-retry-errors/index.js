import { fromEvent, interval, switchMap, take, retry, retryWhen } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const btnStart = document.getElementById('btnStart');
const result = document.getElementById('result');

fromEvent(btnStart, 'click')
  .pipe(
    switchMap(() =>
      ajax.getJSON('http://theproblemsolver.nl/api/not-there').pipe(
        // retry(3)

        retryWhen(err => interval(1000).pipe(take(3)))
      )
    )
  )
  .subscribe({
    next: item => (result.textContent = item),
    error: error => (result.textContent = `Error: ${error.message}`),
    complete: () => (result.textContent = 'Complete')
  });

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
