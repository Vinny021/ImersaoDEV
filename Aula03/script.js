var dificuldade = 0
var tentativas = 3
var numeroMax = 10;

function mudarTexto(buttonId, texto){
    document.getElementById(buttonId).textContent = texto;
}

function imprimePontuacao(){
    mudarTexto('result-field', `Você fez ${pontos} pontos!`);
}

function selecionaDificuldade(){
    var escolha = -1;
    while(escolha != 1 && escolha != 2 && escolha != 3){
        escolha = parseInt(prompt("Escolha a dificuldade desejada:\n 1 - Fácil \n 2 - Médio \n 3 - Difícil"))
    }

    if(escolha == 1){
        tentativas = 3;
        numeroSecreto = (Math.random() * (10 - 0) + 1).toFixed(0);
        numeroMax= 10;
    }else if(escolha == 2){
        tentativas = 5;
        numeroSecreto = (Math.random() * (20 - 0) + 1).toFixed(0)
        numeroMax= 20;
    }else{
        tentativas = 7;
        numeroSecreto = (Math.random() * (50 - 0) + 1).toFixed(0)
        numeroMax= 50;
    }
    dificuldade = escolha
}

selecionaDificuldade()

while(tentativas > 0){
    var chute = parseInt(prompt(`Digite um numero entre 0 e ${numeroMax}`))

    if (numeroSecreto == chute){
        alert("Acertou!")
        break;
    }else if(chute < numeroSecreto){
        alert("Não, tente um número maior")
        tentativas--;
    }else if(chute > numeroSecreto){
        alert("Não, tente um número menor")
        tentativas--;
    }
}

if(tentativas == 0){
    alert(`O número secreto era ${numeroSecreto}.`)
}

var pontos = tentativas * 100 * dificuldade
