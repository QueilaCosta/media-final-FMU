// script.js
document.getElementById('mediaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Captura os valores das notas
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);
    const nota5 = parseFloat(document.getElementById('nota5').value);

    // Função para validar se o valor está entre 0 e 10
    function validarNota(nota) {
        return !isNaN(nota) && nota >= 0 && nota <= 10;
    }

    // Verifica se todas as notas estão dentro do intervalo de 0 a 10
    if (!validarNota(nota1) || !validarNota(nota2) || !validarNota(nota3) || !validarNota(nota4) || !validarNota(nota5)) {
        alert("Por favor, insira notas entre 0 e 10.");
        return;
    }

    // Calcula a média das 4 primeiras notas (N1)
    const N1 = (nota1 + nota2 + nota3 + nota4) / 4;

    // N2 é a quinta nota
    const N2 = nota5;

    // Calcula a média final com os pesos 0.4 para N1 e 0.6 para N2
    const mediaFinal = (N1 * 0.4) + (N2 * 0.6);

    // Exibe a média final com 2 casas decimais
    document.getElementById('mediaResult').textContent = mediaFinal.toFixed(2);
});
