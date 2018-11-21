function isNumberPrime(num) {
  if(num === 2) {
      return true;
  } else if (num < 2 || num % 2 === 0) {
      return false;
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isNumberPrime(0));
// false

console.log(isNumberPrime(1));
// false

console.log(isNumberPrime(5));
// true

console.log(isNumberPrime(7));
// true