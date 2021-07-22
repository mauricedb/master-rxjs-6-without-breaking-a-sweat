import { interval, fromEvent, tap, takeUntil } from 'rxjs';

const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const result = document.getElementById('result');

const stop$ = fromEvent(btnStop, 'click').pipe(
  tap(() => console.log('Clicked on Stop'))
);

btnStart.addEventListener('click', e => {
  interval(500)
    .pipe(
      takeUntil(stop$)
    )
    .subscribe({
      next: item => (result.textContent = item),
      complete: () => (result.textContent = 'Complete')
    });
});

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
