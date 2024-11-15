function fizzbuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return 'fizzbuzz';
  } else if (n % 3 === 0) {
    return 'fizz';
  } else if (n % 5 === 0) {
    return 'buzz';
  } else {
    return n;
  }
}

function main(){
    for (let i = 1; i <= 100; i++) {
        console.log(fizzbuzz(i));
    }
}

main();