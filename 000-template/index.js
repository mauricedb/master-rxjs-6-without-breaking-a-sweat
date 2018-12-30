import {} from 'rxjs';
import {} from 'rxjs/operators';

const btnStart = document.getElementById('btnStart');
const result = document.getElementById('result');

btnStart.addEventListener('click', () => {
  result.textContent = new Date().toLocaleTimeString();
});

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
