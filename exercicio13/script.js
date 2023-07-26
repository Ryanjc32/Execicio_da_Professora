//Faça um progrma que leia 5 números e mostre a soma e a média deles.

// let n1 = 0
// for(let i= 1; i <= 5; i++){
//     var n = parseFloat(prompt())
//     n1 = (n1 + n)
// }
// console.log(`a soma dos números é: ${n1} ,e a média deles é: ${n1/5}`)


let n1 = 0

for(let i= 1; i <= 5; i++){
    let n = parseFloat(prompt("Digite um número: "))
    n1 += n
}

console.log(`a soma dos números é: ${n1} ,e a média deles é: ${n1/5}`)