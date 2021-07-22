import { interval, tap, take, takeLast } from 'rxjs';

const btnStart = document.getElementById('btnStart');
const result = document.getElementById('result');

btnStart.addEventListener('click', () => {
  interval(500)
    .pipe(
      take(10),
      takeLast(5),
      tap(console.log),
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
