function calculaJuros(valor,dia){
    var juros = 0,valorfinal = 0;
    

    if(parseInt(dia) <= 3){
        alert("Atrasos de até 3 dias a multa é isenta");
    }
    else{
        if(parseInt(dia) <= 15){
            juros =  parseInt(valor) * 0.1;
            valorfinal =  parseInt(valor) + juros;
            alert("valor total do juros: "+juros+"\nValor total a ser pago: "+valorfinal);
        }
        else{
            juros = parseInt(valor) * 0.15;
            valorfinal =  parseInt(valor) + juros;
            alert("valor total do juros: "+juros+"\nValor total a ser pago: "+valorfinal);
        }
    }
}


function botao01(){
    location.href="file:///C:/Users/felip/ListaAula08/HTML/Exercicio01.html"
}

function botao02(){
    location.href="file:///C:/Users/felip/ListaAula08/HTML/Exercicio02.html"
}

function botao03(){
    location.href="file:///C:/Users/felip/ListaAula08/HTML/Exercicio03.html"
}

function botao04(){
    location.href="file:///C:/Users/felip/ListaAula08/HTML/Exercicio04.html"
}