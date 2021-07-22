import { interval, tap, takeWhile } from 'rxjs';

const btnStart = document.getElementById('btnStart');
const result = document.getElementById('result');

btnStart.addEventListener('click', e => {
  interval(500)
    .pipe(
      tap(console.log),
      takeWhile(item => item < 5)
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
