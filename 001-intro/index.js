import { fromEvent, mergeMap, map, switchMap, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const btnAjax = document.getElementById('btnAjax');
const result = document.getElementById('result');

const url =
  'http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript';

fromEvent(btnAjax, 'click')
  .pipe(
    tap(() => (result.innerHTML = '')),
    switchMap(() =>
      // Old: RxJS 6
      // Fails because of an extra x-requested-with header
      // is not allowed with the CORS request
      // ajax.getJSON(url).pipe(
      // New code. Works with RxJS 6 and 7.
      ajax({ url, crossDomain: true }).pipe(
        map((e) => e.response),
        map((e) => e.value),
        mergeMap((e) => e)
      )
    )
  )
  .subscribe((data) => {
    const li = document.createElement('li');
    li.textContent = data.joke;
    result.appendChild(li);
  });

/*






















*/

if (module.hot) {
  module.hot.dispose(function () {
    location.reload();
  });
}
