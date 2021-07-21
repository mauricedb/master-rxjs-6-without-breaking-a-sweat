import { from , lastValueFrom, firstValueFrom} from 'rxjs';

const btnStart = document.getElementById('btnStart');
const result = document.getElementById('result');

btnStart.addEventListener('click', () => {
  const data = ['first', 'middle', 'last']

  // from(data).subscribe(item => {
  //   console.log(item);
  //   result.textContent = item;
  // })

  // from(data).toPromise().then(item => {
  //   console.log(item);
  //   result.textContent = item;
  // })


  firstValueFrom(from(data)).then(item => {
    console.log(item);
    result.textContent = item;
  })
})

/*



























*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
