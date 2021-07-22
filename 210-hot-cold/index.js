import { Subject, Observable } from 'rxjs';

const btnStartCold = document.getElementById('btnStartCold');
const btnStartHot = document.getElementById('btnStartHot');
const result = document.getElementById('result');

function coldObservable() {
  return new Observable(subscriber => {
    let count = 0;
    const handle = setInterval(() => {
      const value = count++;
      console.log('Cold', value);
      subscriber.next(value);
    }, 100);

    return () => clearInterval(handle);
  });
}

function hotObservable() {
  const subject = new Subject();
  let count = 0;
  setInterval(() => {
    const value = count++;
    console.log('Hot', value);
    subject.next(value);
  }, 100);

  return subject;
}







const cold = coldObservable();
btnStartCold.addEventListener('click', () => {
  cold.subscribe(time => (result.textContent = time));
});



const hot = hotObservable();
btnStartHot.addEventListener('click', () => {
  hot.subscribe(time => (result.textContent = time));
});

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
