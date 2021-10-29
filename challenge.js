//Mandar un diff por cada una de estas
//✔️ agregar otro check: para multiplo de 10 imprimir bar, crear un tag con eso (tal vez necesite commit intermedios)
// ✔️ poder pasar checks como parametros de la funcion foo bar. 
// ✔️ configurar si la condicion es exclusiva o no. Que tenga que imprimir var con una o con todas

function isPrime(num) {
  const half = Math.ceil(num / 2);
  if (num == 1) {
    return true
  }
  for (let j=2; j <= half; j++) {
    if (num % j == 0) {
      return false
    }
  }
  return true
}

function isMultipleOfTen(num) {
  if (num % 10 == 0) {
    return true
  }
  return false
}

function isBetweenNineAndEleven(num) {
  if (num <= 11 && num >= 9) {
    return true
  }
  return false
}




function foobar(n, exclusive, ...conditions){
  //If no condition given it defaults to primes
  if (conditions.length == 0) {
    conditions = [isPrime]
  }

  for (let i=1; i<=n; i++) {
    let toPrint = "";
    let conditionsPassed = false;

    if (exclusive) {
      conditionsPassed = true 
      conditions.forEach((condition, index) => {
        const conditionCheck = condition(i);
        toPrint = toPrint + ` cond${index}: ${conditionCheck}`
        if (!conditionCheck) {
          conditionsPassed = false
        }
      });

    } else {
      conditions.forEach((condition, index) => {
        const conditionCheck = condition(i);
        toPrint = toPrint + ` cond${index}: ${conditionCheck}`
        if (conditionCheck) {
          conditionsPassed = true
        }
      });
    }
    
    if (conditionsPassed){
      console.log(i, 'bar', toPrint);
    } else {
      console.log(i, 'foo', toPrint);
    }
  }
}


//First argument of foobar is the number of prints. It is required
//Second argument of foobars checks conditions logic. It is required
//If exclusive:true all conditions need to be met to print bar. If false only one true condition is enough.
//Rest of arguments are conditions to check, if any is true return var. Defaults to check prime numbers 
foobar(20, false, isPrime, isMultipleOfTen);
console.log('-------------------------------------------');
foobar(15, false, x => x <= 5, isBetweenNineAndEleven);
console.log('-------------------------------------------');
foobar(20, true, isPrime, x => x <= 10);
console.log('-------------------------------------------');
foobar(20, false);
