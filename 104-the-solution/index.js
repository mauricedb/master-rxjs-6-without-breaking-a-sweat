import { from, interval, fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, scan, switchMap } from 'rxjs/operators';

const btnClear = document.getElementById('btnClear');
const btnAjax = document.getElementById('btnAjax');
const btnInterval = document.getElementById('btnInterval');
const btnArray = document.getElementById('btnArray');

const result = document.getElementById('result');

btnClear.addEventListener('click', function() {
  result.textContent = '';
});

const url =
  'http://api.icndb.com/jokes/random/?limitTo=[nerdy]&escape=javascript';

fromEvent(btnAjax, 'click')
  .pipe(
    switchMap(() =>
      ajax.getJSON(url).pipe(
        map(data => data.value.joke.length),
        map(n => ({ x: n })),
        filter(obj => obj.x < 75),
        scan((prev, cur) => prev.concat(cur), [])
      )
    )
  )
  .subscribe(data => (result.textContent = JSON.stringify(data)));

fromEvent(btnInterval, 'click')
  .pipe(
    switchMap(() =>
      interval(1000).pipe(
        map(n => ({ x: n })),
        filter(obj => obj.x < 7),
        scan((prev, cur) => prev.concat(cur), [])
      )
    )
  )
  .subscribe(data => (result.textContent = JSON.stringify(data)));

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

fromEvent(btnArray, 'click')
  .pipe(
    switchMap(() =>
      from(numbers).pipe(
        map(n => ({ x: n })),
        filter(obj => obj.x < 7),
        scan((prev, cur) => prev.concat(cur), [])
      )
    )
  )
  .subscribe(data => (result.textContent = JSON.stringify(data)));

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
