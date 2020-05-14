var numero = [];
var soma = 0;

for(let i = 0; i< 10; i++){
    numero[i] = prompt("informe o numero "+i+"°");
}

alert("Os Numeros informados são: " + numero);

numero.sort((a, b)=> b - a);

for(i = 0; i< numero.length; i++){
    soma += parseInt(numero[i]);
}

console.log('Maior número: ' + numero[0]);
console.log('Menor número: ' + numero[(numero.length - 1)]);
console.log('Média dos números: ' + (soma / numero.length));
alert('Números em órdem decrescente: ' + numero);




