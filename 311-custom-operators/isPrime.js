import quickIsPrime from 'quick-is-prime';

import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

// export default number => quickIsPrime(number);

// export default () => filter(number => quickIsPrime(number));

export default () => source =>
  Observable.create(observer => {
    source.subscribe(
      number => {
        if (quickIsPrime(number)) {
          observer.next(number);
        }
      },
      err => observer.error(err),
      () => observer.complete()
    );
  });
