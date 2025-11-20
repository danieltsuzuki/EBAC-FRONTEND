const input = document.getElementById("cep");
let cepError = document.getElementById("cepError");

document.addEventListener('DOMContentLoaded', () => {
    loadLocalStorage()
});

input.addEventListener("blur", async () => {

    let cep = document.getElementById("cep").value;
    let cepIsValid = /^[0-9]{8}$/;

    if (!cepIsValid.test(cep)) {
        cepError.textContent = "CEP precisa ter 8 caracteres númericos";
        clearForm();
    } else {
        cepError.textContent = "";
        const response = await requestApi(`https://cors-anywhere.herokuapp.com/https://viacep.com.br/ws/${cep}/json/`);
        if (!response) {
            return;
        }
        completeForm(response);
        saveLocalStorage(response);
    }

})


async function requestApi(url) {
    return await fetch(url)
        .then(response => response.json())
        .then((data) => {
            if (data.erro) {
                cepError.textContent = "CEP não encontrado";
                clearForm();
                return;
            }

            return {
                "cep": String(data.cep).replace("-", ""),
                "logradouro": data.logradouro,
                "bairro": data.bairro,
                "uf": data.uf,
                "cidade": data.localidade,
                "numero": "",
                "complemento": ""
            };
        })
        .catch(e => {
            cepError.textContent = "Prolema no servidor... algo deu errado!";
            clearForm();
        });
}

function clearForm() {
    document.getElementById('cep').value = "";
    document.getElementById('logradouro').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('uf').value = "";
    document.getElementById('numero').value = "";
    document.getElementById('complemento').value = "";
}

function saveLocalStorage(data) {
    localStorage.setItem("address", JSON.stringify(data));
}

function loadLocalStorage() {
    const address = localStorage.getItem("address");
    if (address) {
        completeForm(JSON.parse(address));
    }
}

function completeForm(data) {
    document.getElementById('cep').value = data.cep ? data.cep : "";
    document.getElementById('logradouro').value = data.logradouro;
    document.getElementById('bairro').value = data.bairro;
    document.getElementById('cidade').value = data.localidade ? data.localidade : data.cidade;
    document.getElementById('uf').value = data.uf;
    document.getElementById('numero').value = data.numero ? data.numero : "";
    document.getElementById('complemento').value = data.complemento ? data.complemento : "";
}

function clearLocalStorage() {
    localStorage.removeItem("address");
}

const buttonSend = document.getElementById("buttonEnviar");

buttonSend.addEventListener("click", () => {
    const data = {
        "cep": document.getElementById('cep').value,
        "logradouro": document.getElementById('logradouro').value,
        "bairro": document.getElementById('bairro').value,
        "uf": document.getElementById('uf').value,
        "cidade": document.getElementById('cidade').value,
        "numero": document.getElementById('numero').value,
        "complemento": document.getElementById('complemento').value
    }

    saveLocalStorage(data);
})


const buttonClear = document.getElementById("buttonLimpar");

buttonClear.addEventListener("click", () => {
    clearForm();
    clearLocalStorage();
})