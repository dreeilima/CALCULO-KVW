const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();


//Pegue os valores dos elementos do formulário
const potencia = parseFloat(document.getElementById('potencia').value);
const tempoInput = document.getElementById('tempo').value; 
const dias = parseInt(document.getElementById('dias').value);
const preco = parseFloat(document.getElementById('preco').value);

// verficar se os valores são validos (numeros)
if (isNaN(potencia) || isNaN(dias) || isNaN(preco)) { // não precisa verificar o tempo aqui
    alert('Por favor, insira valores numéricos validos.');
    return;
}

// Separar o tempo em horas e minutos
const partes = tempoInput.split(':');
const horas = parseInt(partes[0]);
const minutos = parseInt(partes[1]);

// Converter os minutos em horas
const minutosEmHoras = minutos / 60;

// Somar as horas com os minutos em horas
const tempoEmHoras = horas + minutosEmHoras;

//Calcular o valor em reais
const reais = (((potencia * dias * tempoEmHoras) / 1000) * preco).toFixed(2); // usar o tempoEmHoras aqui



// Exibir o valor em reais
const value = document.getElementById('value');
let description = '';


// Definir a descrição do valor em reais
document.getElementById('infos').classList.remove('hiden');

// alterar ponto para virgula
value.textContent = reais.replace('.', ',');
document.getElementById('description').textContent = description;

});
