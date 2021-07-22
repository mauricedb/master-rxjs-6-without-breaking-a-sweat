import quickIsPrime from 'quick-is-prime';

import { Observable, filter } from 'rxjs';

// export default number => quickIsPrime(number);

// export default () => filter(number => quickIsPrime(number));

export default () => source =>
  new Observable(observer => {
    source.subscribe(
      {      
        next: number => {
          if (quickIsPrime(number)) {
            observer.next(number);
          }
        },
        error: err => observer.error(err),
        complete: () => observer.complete()
      });
  });
