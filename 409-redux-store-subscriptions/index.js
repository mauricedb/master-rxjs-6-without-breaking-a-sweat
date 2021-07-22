import { fromEvent, map } from 'rxjs';

import createStore from './createStore';
import reducer from './reducer';

const store$ = createStore(reducer);

store$.subscribe(
  state => (result.textContent = JSON.stringify(state, null, 2))
);

fromEvent(document.getElementById('increment'), 'click')
  .pipe(map(() => ({ type: 'INCREMENT' })))
  .subscribe(store$.action$);

fromEvent(document.getElementById('plus5'), 'click')
  .pipe(map(() => ({ type: 'ADD', payload: 5 })))
  .subscribe(store$.action$);

fromEvent(document.getElementById('decrement'), 'click')
  .pipe(map(() => ({ type: 'DECREMENT' })))
  .subscribe(store$.action$);

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
