//6- Escrever um programa que receba vários números inteiros no teclado.
//E no final imprimir a média dos números múltiplos de 3. Para sair digitar 0

var i = 0, num = 0, soma = 0, media = 0, mult3 = 0

do{
    num = Number(prompt("Digite um número para somar\nOu digite 0 para finalizar"))

    if(num % 3 == 0 && num != 0){
        mult3 = mult3+num
        i++
    }
}
while(num != 0)
media = mult3/i
alert(`A media dos multiplos de 3 é ${media}`)