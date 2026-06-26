document.getElementById('calcular').addEventListener('click', function() {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');
    
    if (numero === '') {
        resultado.textContent = 'Por favor, digite um número!';
        return;
    }
    
    const calculo = parseFloat(numero) * 2;
    resultado.textContent = `Resultado: ${calculo}`;
});
