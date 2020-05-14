var acesso = [2,1];
var usuario,senha,achou = false;

acesso =[
    ['JOAO' ,'123456'],
    ['PAULO','A1B2C3'],
    ['MARIA','676767']
];

usuario = prompt("Informe o usuário: ");
senha = prompt("Informe a senha: ");

for(i=0; i<3 ; i++){
    if(usuario == acesso[i][0] && senha == acesso[i][1]){
        alert("Usuário e senha validado. Bem vindo a aplicação");
        achou = true;
        break; 
    }
     
}

if(!achou){
    alert("Usuário e senha Inválidos");
}