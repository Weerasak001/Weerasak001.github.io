function printPrimes() {
  let input = prompt("Enter a positive integer:");/* get input */
  while (true) {
    if (input === null) {
      break;
    }
     /*convert string to int */
    let number = parseInt(input);
    /*check input is and positive integer */
    if (isNaN(number) || number < 0 || input - number != 0) {
      input = prompt("Invalid input. Please enter a positive integer:");
    } 
    else {
      let primes = [];
      for (let i = 2; i <= number; i++) {
        if (isPrime(i)) {
          primes.push(i);
        }
      }
      alert(
        "For n = " + number + " prime numbers are " +primes.join(", ")
      );
      break;
    }
  }
}
function isPrime(n) { /*find prime number less tjan or equal input number */
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
printPrimes();
