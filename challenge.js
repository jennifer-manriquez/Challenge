//

function isPrime(num) {
  const half = Math.ceil(num / 2)
  if (num ==1) {
    return true
  }
  for (let j = 2; j <= half; j++) {
    if ((num % j == 0)) {
      return false
    }
  }
  return true
}

function foobar(){
  for (let i=1; i<=20; i++) {
    const numIsPrime = isPrime(i)
    // console.log(i, 'foo', numIsPrime);
    if (numIsPrime){
      console.log(i, 'var');
    } else {
      console.log(i, 'foo');
    }
  }
}

foobar();

///1, 2, 3, 4, 