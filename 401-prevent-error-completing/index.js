import { fromEvent, throwError, of, mergeMap, tap, catchError } from 'rxjs';

const btnStart = document.getElementById('btnStart');
const btnClear = document.getElementById('btnClear');
const result = document.getElementById('result');

fromEvent(btnStart, 'click')
  .pipe(
    mergeMap(() =>
      throwError(() => new Error('Something bad happened')).pipe(
        catchError(err => of('The catchError operator'))
      )
    ),
    tap({next: console.log, error: console.warn})
  )
  .subscribe({
    next: item => (result.textContent = item),
    error: error => (result.textContent = `Error: ${error.message}`),
    complete: () => (result.textContent = 'Complete')
  });

fromEvent(btnClear, 'click').subscribe(() => (result.textContent = ''));

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
