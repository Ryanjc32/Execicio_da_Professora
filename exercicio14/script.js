//Faça um algoritmo que pergunte ao usúario uma operação e um número e depois exibe sua respectiva tabuada.


let n = parseInt(prompt("Digite um número: "))
let operação = prompt()



 for (let i = 1; i <= 10 ;i++){
     if(operação === "+"){
     console.log(`${n} + ${i} = `, i + n)

 }else if(operação === "-"){
     console.log(`${n} - ${i} =`, n - i)

 }else if(operação === "*"){
     console.log(`${n} * ${i} =`, i * n)

}else if (operação ==="/"){
     if(n === 0){
         console.log("Digite outro número")
     }else{
        
     console.log(`${n} / ${i} = `, i / n)
     }

 }
}
/*for (let i = 1; i <= 10 ;i++){
switch(operação){
case "+": 
     console.log(`${n} + ${i} = `, i + n)
    break;
case "-":
    console.log(`${n} - ${i} = `, i - n)
    break;
case "*":
    console.log(`${n} * ${i} = `, i * n)
    break;
case "/":
    if(n === 0){
        console.log("Digite outro número")
      }else{
                
       console.log(`${n} / ${i} = `, i / n)
      }
      break;
}
}*/