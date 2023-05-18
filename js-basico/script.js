/*
== igual a 
=== valor igual e igual
!= diferente de
!== diferente de e tipo diferente
> maior que
< menor que
>= maior igual a
<= menor igual a

*/

// ----------------------------------------------------------

// var idade1 = 23;
// var idade2 = 30;

// if (idade1 > idade2) {
//   console.log("idade 1 " + idade1);
//   console.log("idade 1 maior que idade 2");
// } else {
//   console.log("idade 1 = " + idade1);
//   console.log("idade 1 menor que idade 2");

// }

// ---------------------------------------------------------------

// ESTRUTURAS CONDICIONAIS

// var idade = 17;

// if (idade >= 18) {
//   console.log("Pode");
//   console.log("Qual o seu pedido?");
// } else {
//   console.log("Não pode");
//   console.log("Volte futuramente");
// }

// ---------------------------------------------------------------

// OPERADOR TERNÁRIO

// var idade = 18;

// var pode = idade >= 18 ? true : false;
// console.log(pode);

// ---------------------------------------------------------------

// if/else

var nota1 = 5.0;
var nota2 = 11.6;

var media = (nota1 + nota2) / 2;

if (media >= 7) {
  console.log("Você passou com uma ótima média: " + media);
} else if (media >= 4) {
  console.log("Você passou por pouco com nota " + media);
} else {
  console.log("Você reprovou com nota " + media);
}
