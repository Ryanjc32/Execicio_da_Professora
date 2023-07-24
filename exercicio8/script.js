/*Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 casa seja ímpar , imprimir o resulyado desta operação*/

 let numero = parseFloat(prompt('Digite um número: '))

// if (numero %2==0){
//     console.log(numero + 5)
// }else{
//     console.log(numero + 8 )
// }

numero %2==0 ? console.log(numero + 5) : console.log (numero + 8);

