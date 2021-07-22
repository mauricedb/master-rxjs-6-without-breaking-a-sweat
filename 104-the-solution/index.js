import { from, interval, fromEvent,map, filter, scan, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const btnClear = document.getElementById('btnClear');
const btnAjax = document.getElementById('btnAjax');
const btnInterval = document.getElementById('btnInterval');
const btnArray = document.getElementById('btnArray');

const result = document.getElementById('result');

btnClear.addEventListener('click', function () {
  result.textContent = '';
});

const url =
  'http://api.icndb.com/jokes/random/?limitTo=[nerdy]&escape=javascript';

fromEvent(btnAjax, 'click')
  .pipe(
    switchMap(() =>
      // Old: RxJS 6
      // Fails because of an extra x-requested-with header
      // is not allowed with the CORS request
      // ajax.getJSON(url).pipe(

      // New code. Works with RxJS 6 and 7.
      ajax({ url, crossDomain: true }).pipe(
        map((rsp) => rsp.response),
        map((data) => data.value.joke.length),
        map((n) => ({ x: n })),
        filter((obj) => obj.x < 75),
        scan((prev, cur) => prev.concat(cur), [])
      )
    )
  )
  .subscribe((data) => (result.textContent = JSON.stringify(data)));

fromEvent(btnInterval, 'click')
  .pipe(
    switchMap(() =>
      interval(1000).pipe(
        map((n) => ({ x: n })),
        filter((obj) => obj.x < 7),
        scan((prev, cur) => prev.concat(cur), [])
      )
    )
  )
  .subscribe((data) => (result.textContent = JSON.stringify(data)));

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

fromEvent(btnArray, 'click')
  .pipe(
    switchMap(() =>
      from(numbers).pipe(
        map((n) => ({ x: n })),
        filter((obj) => obj.x < 7),
        scan((prev, cur) => prev.concat(cur), [])
      )
    )
  )
  .subscribe((data) => (result.textContent = JSON.stringify(data)));

/*



























*/

if (module.hot) {
  module.hot.dispose(function () {
    location.reload();
  });
}
