//Funcção recursiva que calcule o 'n' numero primo

// const numerosPrimos = [];
// function ePrimo(num) {
//     let primo = 0
//     for (div = 2; div <= num / 2; div++) {
//         if (num % div == 0) {
//             primo++;
//         }
//     }
//     if (primo == 0 && num !== 1) {
//         // numerosPrimos.push(num);
//         // num++;
//     }
//  else {
//     return false;
// }

// // function achaPrimo(n) {
// //     ePrimo(2)
// //     while (numerosPrimos.length < n);
// // }

// ePrimo(1)
// ePrimo(2)
// ePrimo(6)
// ePrimo(80)
// ePrimo(7)
// ePrimo(5)
// ePrimo(29)
// ePrimo(49)
// console.log(achaPrimo(4));

//function calculeNumPrim(n) {}
//criar um arranjo vazio que vá adicionando cada numero primo até o "n" e retorna o numero.


// function ePrimo(num) {
//     for (div = 2; div <= num / 2; div++);
//     if (num % div === 0) return false;
//     return num !== 1;
// }
// console.log(ePrimo(1));
// console.log(ePrimo(2));
// console.log(ePrimo(3));
// console.log(ePrimo(4));
// console.log(ePrimo(5));
// console.log(ePrimo(47));

function ePrimo(num) {
    let metadeNum = num / 2;
    if (num <= 2) return num === 2;
    for (let div = 2; div < metadeNum; div++) {
      if (num % div === 0) return false;
      return true;
    }
  }
  function todosNumPrim() {
    let numerosPrimos = [];
    for (let i = 2; i < 9999; i++) {
      //// while (numerosPrimos.length=n);
      if (ePrimo(i)) {
        numerosPrimos.push(i);
      }
    }
    return numerosPrimos;
  }
  function calculeNumPrim(n) {
    todosNumPrim();
    return numerosPrimos[n - 1];
  }
  // console.log(calculeNumPrim(3));
  // // todosNumPrim();
  // // console.log(numerosPrimos)
  
  console.log("O número -1 não é primo:", ePrimo(-1));
  console.log("O número 0 não é primo:", ePrimo(0));
  console.log("O número 1 não é primo:", ePrimo(1));
  console.log("O número 2 é primo:", ePrimo(2));
  console.log("O número 12 não é primo:", ePrimo(12));
  console.log("O número 47 é primo:", ePrimo(47));
  