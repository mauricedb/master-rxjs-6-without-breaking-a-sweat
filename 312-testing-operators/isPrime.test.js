import { range, reduce } from 'rxjs';

import { marbles } from 'rxjs-marbles/jest';

import isPrime from './isPrime';

test('A simple test', done => {
  range(1, 10)
    .pipe(
      isPrime(),
      reduce((p, c) => [...p, c], [])
    )
    .subscribe(primes => {
      expect(primes).toEqual([2, 3, 5, 7]);
      done();
    });
});

test(
  'Primes to 10',
  marbles(context => {
    const numbers = context.cold('-1-2-3-4-5-6-7-8-9-|');
    const primes = '---2-3---5---7-----|';

    const result = numbers.pipe(isPrime());

    context.expect(result).toBeObservable(primes);
  })
);

test(
  'Primes to 10 to 15',
  marbles(context => {
    const values = { a: 11, b: 12, c: 13, d: 14, e: 15 };
    const numbers = context.cold('-a-b-c-d-e-|', values);
    const primes = context.cold('-a---c-----|', values);

    const result = numbers.pipe(isPrime());

    context.expect(result).toBeObservable(primes);
  })
);
