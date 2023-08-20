/* Para os homens = 66 + (13,8 x peso em kg) + (5 x altura em cm) – (6,8 x idade em anos) Para as
 mulheres = 655 + (9,6 x peso em kg) + (1,8 x altura em cm) – (4,7 x idade em anos) */

console.log("INSIRA SEU PESO EM KG, ALTURA EM CM, IDADE E SEXO ('M' OU 'F').")

const botao = document.querySelector('.botao');

botao.addEventListener('click', calcular);

 function calcular() {
    const peso = document.querySelector('.peso').value;
    const altura = document.querySelector('.altura').value;
    const idade = document.querySelector('.idade').value;
    const sexo = document.querySelector("input[name='sexo']:checked").value;
    const nivel = document.querySelector('#nivel').value;

    if(!peso || !altura || !idade) return console.error('CAMPOS VAZIOS.');

    let resultado;

    console.log(peso, altura, idade, sexo, nivel);

    //homem
    if(sexo === 'H') {
        resultado = 66 + (13.75 * peso) + (5 * altura) - (6.76 * idade);
    }
    //mulher
    if(sexo === 'M') {
        resultado = (65.5 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade)).toFixed(2);
    }


    /*
    switch(nivel) {
        case 'sedentario':
            //
            break;
        case 'ativo':
            //
            break;
    }
    */
   

    const p = document.createElement('p');
    p.innerText = resultado;
    document.querySelector('.container').appendChild(p);
}