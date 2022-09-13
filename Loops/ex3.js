//3- Solicitar a idade do usario e listar quantos são menores de 21 anos e maiores de 50 anos.
//Finalizar ao digitar 99

let maior = 0; menor =0
let idade

while(idade != 99){
    idade = Number(prompt("Digite sua idade: \nOu digite 99 para finalizar"))
    if(idade < 22){
        menor++
    }else if(idade > 49 && idade < 100){
        maior++
    }
}
alert(`Menores de 21 anos = ${menor}`)
alert(`Mais de 50 anos = ${maior}`)
