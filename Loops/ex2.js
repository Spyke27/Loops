//2- Ler 10 números e imprimir quantos são
//pares e quantos são ímpares.

let pares = 0, impares = 0

for(let i = 1; i <= 10; i++){
    var num = Number(prompt("Digite um número:"))
    if( num % 2 == 0){
        pares ++
    }else{
        impares ++
    }
}
alert(`Quantidade de números pares: ${pares}\nQuantidade de números ímpares: ${impares}`)
