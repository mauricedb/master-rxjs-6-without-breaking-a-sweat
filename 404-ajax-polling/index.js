import { EMPTY, timer, map } from 'rxjs';
import { ajax, mapResponse } from 'rxjs/ajax';
import { catchError, mergeMap, switchMap, tap } from 'rxjs/operators';

const url =
  'http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript';

const result = document.getElementById('result');

const joke$ = timer(0, 5000).pipe(
  tap(() => (result.innerHTML = '')),
  switchMap(() =>
    // Old: RxJS 6
    // Fails because of an extra x-requested-with header
    // is not allowed with the CORS request
    // ajax.getJSON(url, {}, { crossDomain: true }).pipe(catchError(() => EMPTY))

    // New code. Works with RxJS 6 and 7.
    ajax({ url, crossDomain: true }).pipe(
      map((x) => x.response),
      catchError(() => EMPTY)
    )
  ),
  mergeMap((rsp) => rsp.value)
);

joke$.subscribe((joke) => {
  const li = document.createElement('li');
  li.textContent = joke.joke;
  result.appendChild(li);
});

/*



























*/

if (module.hot) {
  module.hot.dispose(function () {
    location.reload();
  });
}
