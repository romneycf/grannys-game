import evenOdd from "../../functions/even-odd";
export default function countTrue() {
  const teste1: any = [
    evenOdd(1),
    evenOdd(2),
    evenOdd(3),
    evenOdd(4),
    evenOdd(5),
  ];
  const teste2: any = [evenOdd(7), evenOdd(9), evenOdd(11)];
  const teste3: any = [];

  function countTrue(arr: any) {
    let t = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === true) {
        t++;
      }
    }
    return t;
  }
  console.log(countTrue(teste1));
  console.log(countTrue(teste2));
  console.log(countTrue(teste3));
}
