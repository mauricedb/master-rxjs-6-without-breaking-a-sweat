import { 
  fromEvent, 
  EMPTY,
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  mergeMap,
  share,
  switchMap,
  tap,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

const searchInput = document.getElementById('search');
const result = document.getElementById('result');
const resultCount = document.getElementById('resultCount');

const searchInput$ = fromEvent(searchInput, 'input').pipe(
  map((e) => e.target.value),
  debounceTime(1000),
  distinctUntilChanged(),
  tap(() => (result.innerHTML = '')),
  filter((user) => !!user),
  switchMap((user) =>
    ajax
      .getJSON(`https://api.github.com/search/users?q=${user}`)
      .pipe(catchError(() => EMPTY))
  ),
  share()
);

searchInput$.pipe(map((rsp) => rsp.total_count)).subscribe((totalCount) => {
  resultCount.value = totalCount;
});

searchInput$
  .pipe(
    map((rsp) => rsp.items),
    mergeMap((users) => users)
  )
  .subscribe((user) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${user.avatar_url}" alt="Card image cap" crossOrigin="anonymous">
        <div class="card-body">
          <h5 class="card-title">${user.login}</h5>
          <a href="${user.html_url}" class="btn btn-primary">GitHub profile</a>
        </div>
      </div>`;
    result.appendChild(div);
  });

/*



























*/

if (module.hot) {
  module.hot.dispose(function () {
    location.reload();
  });
}
