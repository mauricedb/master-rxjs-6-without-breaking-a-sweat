export function isPrime(number) {
    for (let test = 2; test < number; test++) {
      if (number % test === 0) {
        return false;
      }
    }
  
    return number > 1;
  }