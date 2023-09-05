/* Para os homens = 66 + (13,8 x peso em kg) + (5 x altura em cm) – (6,8 x idade em anos) Para as
 mulheres = 655 + (9,6 x peso em kg) + (1,8 x altura em cm) – (4,7 x idade em anos) */

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
        resultado = 66 + (13.75 * peso) + (5 * altura) - (6.76 * idade).toFixed(2);
    }
    //mulher
    if(sexo === 'M') {
        resultado = (655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade)).toFixed(2);
    }

    const tmb = resultado;

    switch(nivel) {
        case 'sedentario':
            resultado = resultado * 1.2;
            break;
        case 'pouco_ativo':
            resultado = resultado * 1.375;
            break;
        case 'ativo':
            resultado = resultado * 1.55;
            break;
        case 'muito_ativo':
            resultado = resultado * 1.725;
            break;
    }

    resultado = resultado.toFixed(2);

    const proteinas = Number(((resultado * 0.25) / 4).toFixed(2)).toLocaleString('pt-BR');
    const carboidratos = Number(((resultado * 0.45) / 4).toFixed(2)).toLocaleString('pt-BR');
    const lipidios = Number(((resultado * 0.3) / 9).toFixed(2)).toLocaleString('pt-BR');

    resultado = Number(resultado).toLocaleString('pt-BR');

    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const refresh = document.createElement('button');

    p.classList.add('res');
    p2.classList.add('res-2');
    p3.classList.add('res');
    refresh.classList.add('refresh');

    p.innerText = 'Taxa metabólica basal: ' + tmb.toLocaleString ('pt-BR') + ' Kcal';
    p2.innerText = 'Gasto calórico: ' + resultado + ' Kcal';
    p3.innerHTML = `Nutrientes necessários:<br> PROTEÍNAS: ${proteinas} gramas<br>CARBOIDRATOS: ${carboidratos} gramas<br>LIPÍDIOS: ${lipidios} gramas`;
    refresh.innerText = 'REINICIAR';

    document.querySelector('.container').appendChild(p);
    document.querySelector('.container').appendChild(p2);
    document.querySelector('.container').appendChild(p3);
    document.querySelector('.container').appendChild(refresh);

    document.querySelector('form').style.display = 'none';
    document.querySelector('footer').style.display = 'none';

    watchRefresh();
}

function watchRefresh() {
       const button = document.querySelector('.refresh');

       button.addEventListener('click', () => {
            location.reload()
       });
}

botao.addEventListener('mouseenter', watchArthurMorgan);
botao.addEventListener('mouseleave', watchArthurMorgan);

function watchArthurMorgan() {
    const arthur = document.querySelector('.morgan');
if(arthur.classList.contains('opacity')) {
    arthur.classList.remove('opacity');
} else {
    arthur.classList.add('opacity');
}
    // document.querySelector('.morgan').style.opacity = '1';
}