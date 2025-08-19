class Calculator {

    constructor() {
        this._value = 0;
        this._balance = 0;
        this._message = "Valor insuficiente";
        this._table = [
            { "minValue": 3, "message": "Tempo: 120 minutos" },
            { "minValue": 2.75, "message": "Tempo: 90 minutos" },
            { "minValue": 1.75, "message": "Tempo: 60 minutos" },
            { "minValue": 1, "message": "Tempo: 30 minutos" },
        ]
    }

    get value() {
        return this._value;
    }

    get message() {
        return this._message;
    }

    get table() {
        return this._table;
    }

    calculate() {
        try {
            this._value = Number(document.getElementById("inputValue").value);
            this.validateValue(this.value);

            for (const row of this.table) {
                if (this.value >= row.minValue) {
                    this._balance = Number((this._value - row.minValue).toFixed(2));
                    this._message = `${row.message} - Troco: R$${this._balance.toFixed(2)}`
                    break;
                }
            }

            this.showResult();
            this.clearInput();
        } catch (e) {
            this._message = Error(e).message.replace("Error: ", "");
            this.showResult();
            this.clearInput();
        }
    }

    validateValue(value) {
        if (typeof value != 'number' || Number.isNaN(value)) {
            throw new Error("Valor inválido");
        }
    }

    showResult() {
        this.normalizeMessage();
        this.alterColorMessage();
        document.getElementById("resultMessage").textContent = this.message;
    }

    clearInput() {
        document.getElementById("inputValue").textContent = "";
    }

    alterColorMessage() {
        if (this.message === "Valor inválido" || this.message === "Valor insuficiente") {
            document.getElementById("resultMessage").style.color = 'red'
        } else {
            document.getElementById("resultMessage").style.color = 'black'
        }
    }

    normalizeMessage() {
        this._message = this._message.replace(".", ",");
    }
}

const calculator = new Calculator();