const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();


    //Pegue os valores dos elementos do formulário
    const potencia = parseFloat(document.getElementById('potencia').value);
    const tempoInput = parseFloat(document.getElementById('tempo').value);
    const dias = parseInt(document.getElementById('dias').value);
    const preco = parseFloat(document.getElementById('preco').value);

    // verficar se os valores são validos (numeros)
    if (isNaN(potencia) || isNaN(tempoInput) || isNaN(dias) || isNaN(preco)) {
        alert('Por favor, insira valores numéricos validos.');
        return;
    }
    

    //Calcular o valor em reais
    const reais = (((potencia * dias * tempoInput) / 1000) * preco).toFixed(2);



    // Exibir o valor em reais
    const value = document.getElementById('value');
    let description = '';
    

    // Definir a descrição do valor em reais
    document.getElementById('infos').classList.remove('hiden');

    // alterar ponto para virgula
    value.textContent = reais.replace('.', ',');
    document.getElementById('description').textContent = description;
});
