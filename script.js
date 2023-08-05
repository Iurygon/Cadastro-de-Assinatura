//RECEBE OS VALORES DOS INPUTS//
let campo_nome = document.getElementById('nome');
let campo_nome_erro = document.getElementById('erro_nome');

let campo_sobrenome = document.getElementById('sobrenome');
let campo_sobrenome_erro = document.getElementById('erro_sobrenome');

let campo_email = document.getElementById('email');
let campo_email_erro = document.getElementById('erro_email');

let campo_senha = document.getElementById('senha');
let campo_senha_erro = document.getElementById('erro_senha');

//VALIDAÇÃO DOS INPUTS//
if (campo_nome.value == ''){
    campo_nome_erro
};

if (campo_sobrenome.value == ''){
    campo_sobrenome_erro
}

if (campo_email.value == ''){
    campo_email_erro
}

if (campo_senha.value == ''){
    campo_email_erro
}