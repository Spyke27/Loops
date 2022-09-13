//5- Crie um programa que leia um número do teclado até que encontre um número igual a zero.
//No final, mostre a soma dos números digitados

var num, soma = 0

do{
    num = Number(prompt("Digite um número para somar\nOu digite 0 para finalizar"))

    soma = soma + num
}
while(num != 0)
alert(soma)
