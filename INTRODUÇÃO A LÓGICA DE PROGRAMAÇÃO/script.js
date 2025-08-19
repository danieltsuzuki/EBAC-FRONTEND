let result = Math.ceil(Math.random() * 100);
let attempts = 10;

function respond() {
    alterColorMessageBlack();
    event.preventDefault()
    const RESPONSE = parseInt(document.getElementById("response").value);

    if (!validResponse(RESPONSE)) {
        document.getElementById("message").textContent = "Valor inválido, digite apenas números entre 1 e 100";
        alterColorMessageRed();
        clearInput();
        return;
    }

    if (RESPONSE === result) {
        document.getElementById("message").textContent = "Você acertou!";
        clearInput();
        disableForm();
        return;
    }

    returnMessageIfMiss(RESPONSE);

    returnAttempts();

    clearInput();
}

function clearInput() {
    document.getElementById("response").value = "";
}

function tip(response) {
    if (response > result) return 'O número secreto é menor';
    return 'O número secreto é maior';
}

function returnMessageIfMiss(response) {
    if (response !== result && attempts > 1) {
        attempts--;
        document.getElementById("message").textContent = tip(response);
    } else {
        document.getElementById("message").textContent = `Você perdeu! O número secreto era ${result}`;
    }
}

function validResponse(response) {
    return (typeof response === 'number')
        &&
        !isNaN(response) &&
        !Number.isNaN(response);
}

function alterColorMessageRed() {
    document.getElementById("message").style.color = "red"
}

function alterColorMessageBlack() {
    document.getElementById("message").style.color = "black"
}

function returnAttempts() {
    document.getElementById("attempts").textContent = `Tentativas restante: ${attempts}`;
}

function disableForm() {
    document.getElementById("response").disabled = true;
    document.getElementById("buttonRespond").disabled = true;
    document.getElementById("buttonRespond").style.color = "gray";
    enableButtonRetry();
}

function retryGame() {
    result = Math.ceil(Math.random() * 100);
    attempts = 10;
    hiddenButtonRetry()
    enableForm();
    clearMessage();
    returnAttempts();
}

function enableForm() {
    document.getElementById("response").disabled = false;
    document.getElementById("buttonRespond").disabled = false;
    document.getElementById("buttonRespond").style.color = "red";
}

function enableButtonRetry() {
    document.getElementById("buttonRetry").style.display = "inline-block";
}

function hiddenButtonRetry() {
    document.getElementById("buttonRetry").style.display = "none";
}

function clearMessage() {
    document.getElementById("message").textContent = "";
}