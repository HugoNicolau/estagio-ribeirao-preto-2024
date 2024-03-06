function questao1() {
  let ind = 13;
  let SOMA = 0;

  for (let k = 0; k < ind; k++) {
    SOMA += k;
  }
  return console.log(SOMA);
}

function questao2(numero) {
  function generageFibonacci(n) {
    const arrFib = [0, 1];
    for (let i = 2; i < n; i++) {
      let sum = arrFib[i - 1] + arrFib[i - 2];
      arrFib.push(sum);
    }
    return arrFib;
  }
  for (let j = 10; ; j += 10) {
    const arrFib = generageFibonacci(j);
    for (let k = 0; k < arrFib.length; k++) {
      if (numero == arrFib[k]) {
        console.log(`Número ${numero} está na sequência Fibonacci`);
        return;
      }
      if (arrFib[k] > numero) {
        console.log(`Número ${numero} não está na sequência Fibonacci`);
        return;
      }
    }
  }
}

function questao5(userString) {
  let answer = [];
  let n = userString.length;
  for (let i = n - 1; i >= 0; i--) {
    answer.push(userString[i]);
  }
  return answer;
}
