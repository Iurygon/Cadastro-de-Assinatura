/*RECEBE ELEMENTOS*/

const form   = document.getElementById('formulario');
const inputs = document.querySelectorAll('.campo');
const erro   = document.querySelectorAll('.erro');
const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/* VALIDAÇÃO */

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    nameValidate();
    emailValidate();
    passValidate();
    comparaSenha();
});

function invalido(index){
    inputs[index].style.border = '2px solid #fc1c1c';
    erro[index].style.display = 'block';
}

function valido(index){
    inputs[index].style.border = '';
    erro[index].style.display = 'none';
}

/*TESTES*/

function nameValidate(){
    if(inputs[0].value.length <= 2)
    {
        invalido(0);
    }
    else
    {
        valido(0);
    }
}

function emailValidate(){
    if(!emailCheck.test(inputs[1].value))
    {
        invalido(1);
    }
    else
    {
        valido(1);
    }
}

function passValidate(){
    if(inputs[2].value.length < 8)
    {
        invalido(2);
    }
    else
    {
        valido(2);
    }
}

function comparaSenha(){
    if(inputs[2].value != inputs[3].value || inputs[3].value.length < 8)
    {
        invalido(3);
    }
    else
    {
        valido(3);
    }
}