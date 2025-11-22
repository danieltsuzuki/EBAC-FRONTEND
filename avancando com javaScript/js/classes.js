export class Form {
    #name;
    #email;

    constructor() {
        this.#name = document.getElementById("inputName");
        this.#email = document.getElementById("inputEmail");
    }

    get name() {
        return this.#name;
    }

    get email() {
        return this.#email;
    }

    cleanForm() {
        this.#name.value = "";
        this.#email.value = "";
    }
}

export class HTML {
    #iconDelete;
    #buttonAdd;
    #listUsers;

    constructor() {
        this.#iconDelete = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg>'
        this.#buttonAdd = document.getElementById("buttonAdd");
        this.#listUsers = document.getElementById("list");
    }

    get iconDelete() {
        return this.#iconDelete;
    }

    get buttonAdd() {
        return this.#buttonAdd;
    }

    get listUsers() {
        return this.#listUsers;
    }

    addUserInListUser(item) {
        this.#listUsers.appendChild(item);
    }

    cleanListUsers() {
        this.#listUsers.innerHTML = "";
    }
}


export class CrudCrud {
    #url;
    #postMethod;
    #getMethod;
    #deleteMethod;

    constructor() {
        this.#url = "https://crudcrud.com/api/405b337dfd3d4613b0863aad7a794250/users";
        this.#postMethod = {
            method: "POST",
            body: "",
            // mode: "no-cors",
            headers: { "Content-Type": "application/json" }
        };
        this.#getMethod = {
            method: "GET",
            // mode: "no-cors",
            headers: { "Content-Type": "application/json" }
        };
        this.#deleteMethod = {
            method: "DELETE",
            // mode: "no-cors"
        };
    }

    requestGet() {
        return [this.#url, this.#getMethod];
    }

    requestPost(name, email) {
        this.#postMethod.body = JSON.stringify({ name, email });
        return [this.#url, this.#postMethod];
    }

    requestDelete(id) {
        return [`${this.#url}/${id}`, this.#deleteMethod];
    }
}