const iconDelete = '<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><path d=\"M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z\"/></svg>'
const iconEdit = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M100.4 417.2C104.5 402.6 112.2 389.3 123 378.5L304.2 197.3L338.1 163.4C354.7 180 389.4 214.7 442.1 267.4L476 301.3L442.1 335.2L260.9 516.4C250.2 527.1 236.8 534.9 222.2 539L94.4 574.6C86.1 576.9 77.1 574.6 71 568.4C64.9 562.2 62.6 553.3 64.9 545L100.4 417.2zM156 413.5C151.6 418.2 148.4 423.9 146.7 430.1L122.6 517L209.5 492.9C215.9 491.1 221.7 487.8 226.5 483.2L155.9 413.5zM510 267.4C493.4 250.8 458.7 216.1 406 163.4L372 129.5C398.5 103 413.4 88.1 416.9 84.6C430.4 71 448.8 63.4 468 63.4C487.2 63.4 505.6 71 519.1 84.6L554.8 120.3C568.4 133.9 576 152.3 576 171.4C576 190.5 568.4 209 554.8 222.5C551.3 226 536.4 240.9 509.9 267.4z"/></svg>'
const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const buttonAdd = document.getElementById("buttonAdd");
const list = document.getElementById("list");
let id = 1;
const url = "https://crudcrud.com/api/b40f20975a224fa1881a13dfd4f56217/users";

async function loadList() {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) {
            throw new Error(`GET failed: ${response.status}`);
        }

        const data = await response.json();
        const list = document.getElementById("list");
        list.innerHTML = ""; // Limpa a lista antes de preencher

        if (data && data.length > 0) {
            data.forEach((user, index) => {
                const listItem = createListItem(user, user._id);
                list.appendChild(listItem);
            });
        }

        return data.length;
    } catch (error) {
        console.error("Error loading list:", error.message);
        return 0;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // aqui você coloca o que quer executar ao carregar a página/script
    loadList();
});

buttonAdd.addEventListener("click", async (e) => {
        e.preventDefault();
        const name = inputName.value.trim();
        const email = inputEmail.value.trim();

        if (!name) {
            alert("Please enter a valid name.");
            return;
        }

        if (!email) {
            alert("Please enter a valid email.");
            return;
        }

        try {
            // POST request
            const postRequest = await fetch(url, {
                method: "POST",
                body: JSON.stringify({ name: name, email: email }),
                headers: { "Content-Type": "application/json" }
            });

            if (!postRequest.ok) {
                throw new Error(`POST failed: ${postRequest.status}`);
            }

            // Recarrega a lista com os dados atualizados
            await loadList();

            inputName.value = "";
            inputEmail.value = "";

        } catch (error) {
            console.error("Error:", error.message);
            alert("Failed to add item. Please try again.");
        }
    });

function createListItem(user, index) {
    const newItem = document.createElement("li");
    const divIcon = document.createElement("span");
    const spanName = document.createElement("span");
    const spanEmail = document.createElement("span");

    newItem.id = `item-${index}`;
    newItem.classList.add("list-group-item", "mt-2", "d-flex", "justify-content-between");

    spanName.textContent = user.name;
    spanEmail.textContent = user.email;

    divIcon.appendChild(addIconDelete());
    
    newItem.appendChild(spanName)
    newItem.appendChild(spanEmail)
    newItem.appendChild(divIcon);

    return newItem;
}

function addIconDelete() {
    const iconDeleteElement = document.createElement("span");
    iconDeleteElement.innerHTML = iconDelete;
    iconDeleteElement.classList.add("ms-2", "delete");
    return iconDeleteElement;
}



list.addEventListener("click", async (e) => {
    const idItem = e.composedPath()[4].id.replace("item-", "");
    try {
        await fetch(
            `${url}/${idItem}`, {
                method: "DELETE"
            }
        )
        loadList();
        alert("Item removido com sucesso!");
    }  catch (error) {
        console.error(error.message)
    }
})

function deleteItem(id) {
    if (confirm("Tem certeza que deseja deletar este item?")) {
        const item = document.getElementById(`item-${id}`);
        if (item) {
            item.remove();
        }
    }
}

list.addEventListener("click", (e) => {
    const target = e.target.closest("span"); // Pega o span mais próximo

    if (!target) return; // Se não clicou em um span, ignora

    // Verifica se é um ícone de deletar
    if (target.id.startsWith("delete-")) {
        const itemId = target.id.replace("delete-", "");
        showModal(itemId, "delete");
    }

    // Verifica se é um ícone de editar
    if (target.id.startsWith("edit-")) {
        const itemId = target.id.replace("edit-", "");
        showModal(itemId, "edit");
    }
});
