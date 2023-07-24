/*Encontrar o dobro de um número casa ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado*/

 let numero = parseFloat(prompt('Digite um número: '))

 if(numero > 0){
    console.log(numero * 2)
 }else{
    console.log(numero * 3)
 }

 //numero > 0 ? console.log(numero * 2) : console.log( numero * 3);