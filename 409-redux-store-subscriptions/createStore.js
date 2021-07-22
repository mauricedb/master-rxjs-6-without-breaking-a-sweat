import { Subject, scan, startWith, shareReplay } from 'rxjs';

const createStore = reducer => {
  const action$ = new Subject();

  const store$ = action$.pipe(
    startWith({ type: '__INIT__' }),
    scan(reducer, undefined),
    shareReplay(1)
  );

  store$.action$ = action$;
  store$.dispatch = action => action$.next(action);

  return store$;
};

export default createStore;
