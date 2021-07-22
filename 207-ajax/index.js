import { ajax } from 'rxjs/ajax';

const btnFetch = document.getElementById('btnFetch');
const result = document.getElementById('result');
const url =
  'http://api.icndb.com/jokes/random/?limitTo=[nerdy]&escape=javascript';

btnFetch.addEventListener('click', () => {
  // Old: RxJS 6
  // Fails because of an extra x-requested-with header
  // is not allowed with the CORS request
  // ajax.getJSON(url).subscribe(json => (result.textContent = json.value.joke));

  // New code. Works with RxJS 6 and 7.
  ajax({ url, crossDomain: true }).subscribe(
    (e) => (result.textContent = e.response.value.joke)
  );
});

/*



























*/

if (module.hot) {
  module.hot.dispose(function () {
    location.reload();
  });
}
