//4- Uma empresa desenvolveu uma pesquisa para saber as características psicológicas dos indivíduos de uma região.
//Para tanto, a cada uma das pessoas era perguntado: idade, sexo (1-feminino / 2-masculino / 3-Outros),
//e as opções (1, se a pessoa era calma; 2, se a pessoa era nervosa e 3, se a pessoa era agressiva).
//Pede-se para elaborar um sistema que permita ler os dados de 150 pessoas, calcule e mostre: (WHILE)
//o número de pessoas calmas; 
//o número de mulheres nervosas; 
//o número de homens agressivos; 
//o número de outros calmos;
//o número de pessoas nervosas com mais de 40 anos; 
//o número de pessoas calmas com menos de 18 anos.
 
var idade = 0, femNerv = 0, mascAgre = 0, outCalm = 0, calm18 = 0, nerv40 = 0, calmos = 0, sexo, humor, i = 0

while(i <= 150){

    idade = Number(prompt("Digite sua idade: "))
    sexo = Number(prompt("Qual gênero você se identifica:\n1-Feminino\n2-Masculino\n3-Outros"))
    humor = Number(prompt("Como você se sente:\n1-Calmo(a)\n2-Nervoso(a)\n3-Agressivo(a)"))

    if(humor == 1){
        calmos++
    }
    else if(sexo == 2 && humor == 2){
        femNerv++
    }
    else if(sexo == 1 && humor == 3){
        mascAgre++
    }
    else if(sexo == 3 && humor == 1){
        outCalm++
    }
    else if(idade > 40 && humor == 2){
        nerv40++
    }
    else if(idade < 18 && humor ==1){
        calm18++
    }
    i++
}
alert(`Dados Coletados:\n
        Pessoas calmas: ${calmos}\n
        Mulheres nervosas: ${femNerv}\n
        Homens agressivos: ${mascAgre}\n
        Outros calmos: ${outCalm}\n
        Nervosos com mais de 40 anos: ${nerv40}\n
        Calmos com menos de 18: ${calm18}
        `
    )
