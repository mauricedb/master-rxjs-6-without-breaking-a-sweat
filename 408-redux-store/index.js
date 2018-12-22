import createStore from './createStore';
import reducer from './reducer';

const store$ = createStore(reducer);

store$.subscribe(
  state => (result.textContent = JSON.stringify(state, null, 2))
);

document.getElementById('increment').addEventListener('click', () => {
  store$.dispatch({ type: 'INCREMENT' });
});

document.getElementById('plus5').addEventListener('click', () => {
  store$.dispatch({ type: 'ADD', payload: 5 });
});

document.getElementById('decrement').addEventListener('click', () => {
  store$.dispatch({ type: 'DECREMENT' });
});

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
