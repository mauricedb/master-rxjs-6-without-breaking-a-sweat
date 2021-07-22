import { 
  fromEvent, 
  range, 
  interval, 
  take,
  scan,
  map,
  mergeMap,
  concatMap,
  switchMap 
} from 'rxjs';

const btnStart = document.getElementById('btnStart');

function createSecondObservable(click) {
  // return range(1, 5)
  //   .pipe(map(i => `Click ${click} event ${i}`));

  return interval(1000).pipe(
    map(i => `Click ${click} event ${i}`),
    // take(5)
  );
}

fromEvent(btnStart, 'click')
  .pipe(
    scan(previous => previous + 1, 0),
    // mergeMap(click => createSecondObservable(click)),
    // concatMap(click => createSecondObservable(click)),
    switchMap(click => createSecondObservable(click)),
  )
  .subscribe({
    next: console.log,
    complete: () => console.log('complete')
  });

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
