import { range, interval, tap, scan, reduce, take } from 'rxjs';

const btnStart = document.getElementById('btnStart');
const result = document.getElementById('result');

btnStart.addEventListener('click', e => {
  // range(1, 5)
  interval(500)
    .pipe(
      take(10),
      tap(n => console.log(n)),
      reduce((previous, current) => previous + current, 0)
      // scan((previous, current) => previous + current, 0)
    )
    .subscribe({
      next: item => (result.textContent = item)
    });
});

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
