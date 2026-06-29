/*NÃO ALTERE AQUI*/

function calcular() {
    let pontuacao = 0;

    // Soma os valores selecionados em cada opção do HTML
    pontuacao += parseInt(document.getElementById("reciclagem").value);
    pontuacao += parseInt(document.getElementById("agua").value);
    pontuacao += parseInt(document.getElementById("energia").value);

    let resultado = document.getElementById("resultado");

    // Define a mensagem final com base na pontuação total
    if (pontuacao >= 50) {
        resultado.innerHTML = "🌱 Você tem hábitos sustentáveis!";
    } else {
        resultado.innerHTML = "⚠️ Você pode melhorar seus hábitos ambientais.";
    }
}