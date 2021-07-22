import { EMPTY, NEVER, throwError } from 'rxjs';

const btnStart = document.getElementById('btnStart');
const result = document.getElementById('result');

btnStart.addEventListener('click', () => {
  const empty$ = EMPTY;
  const never$ = NEVER;
  const error$ = throwError(() => new Error('Something bad just happened'));

  empty$.subscribe(e => (result.textContent = e));
});

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
