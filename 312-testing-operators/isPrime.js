import quickIsPrime from 'quick-is-prime';

// import { filter } from 'rxjs/operators';
// export default () => filter(number => quickIsPrime(number));

import { Observable } from 'rxjs';

export default () => source =>
  Observable.create(observer =>
    source.subscribe(
      number => {
        if (quickIsPrime(number)) {
          observer.next(number);
        }
      },
      err => observer.error(err),
      () => observer.complete()
    )
  );
