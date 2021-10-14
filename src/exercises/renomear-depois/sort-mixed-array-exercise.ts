//Ordenar em numeros crescentes/alfabetico.
import sortMixedArray from "../../functions/sort-mixed-array";
export default () => {
  const List = [
    25,
    35,
    24,
    64,
    1,
    65,
    67,
    98,
    "Mauro",
    "Rhuan",
    "Aaron",
    "",
    98,
    34,
    2.65,
    97,
    3.14,
    -1,
  ];
  List.sort(sortMixedArray);
  console.log(List);
};
