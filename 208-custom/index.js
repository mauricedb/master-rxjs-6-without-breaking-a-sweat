import { interval, Observable, map } from 'rxjs';

const btnStart = document.getElementById('btnStart');
const result = document.getElementById('result');

function time(ms) {
  // return interval(ms).pipe(map(() => new Date().toLocaleTimeString()));

  return new Observable(subscriber => {
    // subscriber.next('Hello')
    const handle = setInterval(() => {
      console.log(new Date().toLocaleTimeString());
      subscriber.next(new Date().toLocaleTimeString());
    }, ms);

    return () => clearInterval(handle);
  });
}

btnStart.addEventListener('click', () => {
  const subscription = time(1000).subscribe(time => {
    result.textContent = time;
  });

  setTimeout(() => subscription.unsubscribe(), 5000);
});

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
