/*Faça um programa que leia 5 números e informe o maior número */

let maior = 0

for(let i = 1 ; i <= 5; i++ ){
    var n = parseInt(prompt("Digite um número: "))

    if(maior < n ) {
        maior = n
    }
    
    
}
console.log(maior)