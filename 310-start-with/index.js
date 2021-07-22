import { fromEvent, interval, take, scan, map, switchMap, startWith } from 'rxjs';

const btnStart = document.getElementById('btnStart');
const result = document.getElementById('result');

fromEvent(btnStart, 'click')
  .pipe(
    scan(previous => previous + 1, 0),
    switchMap(click =>
      interval(2500).pipe(
        map(i => `Click ${click} event ${i}`),
        startWith('Start'),
        take(10)
      )
    )
  )
  .subscribe({
    next: item => (result.textContent = item)
  });

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
