
function calcular() {
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    let resultado = (peso / (altura * altura)).toFixed(2);
    let resultadoSaude = null;
    if (resultado < 18.5) {
        resultadoSaude = "MAGREZA";
    } else if (resultado < 25) {
        resultadoSaude = "NORMAL"
    } else if (resultado < 30) {
        resultadoSaude = "SOBREPESO"
    } else if (resultado < 40) {
        resultadoSaude = "OBESIDADE"
    } else {
        resultadoSaude = "OBESIDADE GRAVE"
    }
    document.getElementById("resultado").textContent = resultado;
    document.getElementById("resultadoSaude").textContent = resultadoSaude;
}

