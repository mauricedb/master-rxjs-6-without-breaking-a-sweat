import { timer, tap } from 'rxjs';

const btnStart = document.getElementById('btnStart');
const result = document.getElementById('result');

btnStart.addEventListener('click', e => {
  e.target.disabled = true;

  timer(2000)
    .pipe(
      tap(console.log),
      tap({ complete: () => (e.target.disabled = false) })
    )
    .subscribe(item => {
      result.textContent = item;
    });
});

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
