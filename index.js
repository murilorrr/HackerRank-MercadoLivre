/*
  Complete a seguinte função para que a mesma devolva todos os possíveis números de 4 dígitos, 
  onde cada um seja menor ou igual a<maxDigit>, e a soma dos dígitos de cada número gerado seja 21
  e que nenhum numero posterior seja menor que os anteriores.
  Exemplo maxDigit=6: [3666, 4566, 5556]

  exemplo maxDigit=7: [3567, ...]
*/

/**
 * sumNumbers return the sum of numbers in the number
 * @param  {[number]} number [description]
 * @return {[number]}      [description]
 */
const sumNumbers = (number) => {
  const stringN = number.toString();
  const arrayNumbers = stringN.split("");
  const result = arrayNumbers.reduce((acc, val) => acc += parseInt(val), 0);
  return result;
}

const isValidNumber = (number, value) => {
  const stringN = number.toString();
  const arrayNumbers = stringN.split("");
  const validation = arrayNumbers.every((number) => parseInt(number) <= value);
  return validation
}

function calculate(maxDigit) {
  let minimunNumber = 1299;
  const maxNumber = maxDigit.toString().repeat(4);
  const expectedSum = 21;

  const results = [];
  
  for (minimunNumber; minimunNumber <= maxNumber; minimunNumber++) {
    if(isValidNumber(minimunNumber, maxDigit)) {
      if(sumNumbers(minimunNumber) == expectedSum) {
        results.push(minimunNumber);
      };
    }
  }

  return results;
}

const filterUseCase = (arrayNumbers) => {
  return arrayNumbers.filter(number => {
    const numberParam = number.toString();
    let validation = true;
    for (let index = 0; index < numberParam.length; index++) {
      for (let index2 = index+1; index2 < numberParam.length; index2++) {
        if (numberParam[index] > numberParam[index2]) {
          validation = false;
        }
      }
    }

    if (validation) {
      return numberParam;
    }
  });
  
}



function main() {
  const maxDigit = 7;
  const numbersEquals21 = calculate(maxDigit);
  const result = filterUseCase(numbersEquals21);
  console.log(result);
}

main();
