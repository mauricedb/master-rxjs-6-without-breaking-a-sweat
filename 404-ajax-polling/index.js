import { EMPTY, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, mergeMap, switchMap, tap } from 'rxjs/operators';

const url =
  'http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript';

const result = document.getElementById('result');

const joke$ = timer(0, 5000).pipe(
  tap(() => (result.innerHTML = '')),
  switchMap(() => ajax.getJSON(url).pipe(catchError(() => EMPTY))),
  mergeMap(rsp => rsp.value)
);

joke$.subscribe(joke => {
  const li = document.createElement('li');
  li.textContent = joke.joke;
  result.appendChild(li);
});

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
