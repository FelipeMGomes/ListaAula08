var nome = [];

nome[0] = prompt("Informe o primero nome:  ");
nome[1] = prompt("Informe o segundo nome:  ");
nome[2] = prompt("Informe o terceiro nome: ");
nome[3] = prompt("Informe o quarto nome:   ");

nome.sort();

for(var i=0; i < nome.length; i++){
    console.log(nome[i]);
}