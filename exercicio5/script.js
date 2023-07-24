/*Elabore um algoritmo que calcule o que deve ser pago um produto,cosiderando o preço normal deetiqueta ea escoha da condição de codigo.Utilize os códigos da tabela a seguir para ler qual acondição de codigo escolhida e efetuar o cálculo adequado.
1 À vista e, dinheiro ou cheque, recebe 10% de desconto
2 À vista no cartão de crédito, recebe 15% de desconto 
3 Em duas vezes, preço normal de etiqueta sem juros
4 Em 3 vezes ou mais , preço normal de etiqueta mais juros de 10%

*/

let valor = parseFloat(prompt("Digite o valor: "))
let codigo = parseInt(prompt("Forma de codigo "))

if ( codigo == 1){
    alert(valor-(valor * 0.10 ))
}else if(codigo == 2){
    alert(valor-(valor * 0.15))
}else if ( codigo == 3){
    alert (valor)
}else if (codigo == 4){
    alert (valor + (valor * 0.10))
}else{alert ("Esse código não existe")}