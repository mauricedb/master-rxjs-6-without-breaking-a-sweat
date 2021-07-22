import { interval, filter, take } from 'rxjs';

const btnStart = document.getElementById('btnStart');
const result = document.getElementById('result');

btnStart.addEventListener('click', () => {
  const stream$ = interval(1000).pipe(
    // take(3),
    filter(e => e % 2 === 0)
  );

  const observer = {
    next: function(e) {
      result.textContent = e;
    }
  };

  const subscription = stream$.subscribe(observer);

  setTimeout(() => subscription.unsubscribe(), 5000);
});

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
