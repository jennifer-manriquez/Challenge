//Mandar un diff por cada una de estas
//✔️ agregar otro check: para multiplo de 10 imprimir bar, crear un tag con eso (tal vez necesite commit intermedios)
//poder pasar checks como parametros de la funcion foo bar. 
//configurar si la condicion es exclusiva o no. Que tenga que imprimir var con una o con todas

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

function multipleTen(num) {
  if (num % 10 == 0) {
    return true
  }
}

function foobar(n){
  for (let i=1; i<=n; i++) {
    const numIsPrime = isPrime(i)
    const numIsMultipleTen = multipleTen(i)
    if (numIsPrime || numIsMultipleTen){
      console.log(i, 'bar');
    } else {
      console.log(i, 'foo');
    }
  }
}


foobar(30);