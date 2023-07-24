/*Crie um algoritmo que leia um nome e uma idade e exiba se essa pessoa pode ou não dirigir*/

 let nome = prompt('Digite um nome: ')
 let idade = parseInt(prompt('Digite uma idade: '))

 if (idade >= 18 ){
     console.log(nome ,"Pode dirigir")
 }else{
     console.log( nome ,"Não pode dirigir" )
 }

//idade >= 18 ? console.log("Pode dirigir" ): console.log ("Não pode dirigir");

