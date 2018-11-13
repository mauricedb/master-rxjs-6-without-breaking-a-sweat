const btnClear = document.getElementById('btnClear');
const btnAjax = document.getElementById('btnAjax');
const btnInterval = document.getElementById('btnInterval');
const btnArray = document.getElementById('btnArray');

const result = document.getElementById('result');

btnClear.addEventListener('click', function() {
  result.textContent = '';
});

const url =
  'http://api.icndb.com/jokes/random/?limitTo=[nerdy]&escape=javascript';

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



  








/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
