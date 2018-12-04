import { timer } from 'rxjs';

const btnStart = document.getElementById('btnStart');
const result = document.getElementById('result');

btnStart.addEventListener('click', () => {
  // timer(5000, 1000).subscribe(e => (result.textContent = e));

  const startTime = new Date();
  startTime.setSeconds(startTime.getSeconds() + 5);
  timer(startTime, 1000).subscribe(e => (result.textContent = e));
});

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
