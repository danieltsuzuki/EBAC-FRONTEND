import { createListItem } from "./util.js";
import { Form, HTML, CrudCrud } from "./classes.js"

const form = new Form();
const html = new HTML();
const request = new CrudCrud();


function loadList() {
    fetch(...request.requestGet())
        .then(async response => {
            const data = await response.json();

            html.cleanListUsers();

            if (data && data.length > 0) {
                data.forEach((user, index) => {
                    const listItem = createListItem(html, user, user._id);
                    html.addUserInListUser(listItem);
                });
            }
        }).catch(error => {
            console.error("Error loading list:", error.message);
        })
}


document.addEventListener("DOMContentLoaded", () => {
    loadList();
});


html.buttonAdd.addEventListener("click", async (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();

    if (!name) {
        alert("Please enter a valid name.");
        return;
    }

    if (!email) {
        alert("Please enter a valid email.");
        return;
    }

    fetch(...request.requestPost(name, email)).then(() => {
        loadList();
    }).catch(error => {
        console.error("Error:", error.message);
    }).finally(() => {
        form.cleanForm();
    });
});


html.listUsers.addEventListener("click", async (e) => {
    const deleteButton = e.target.closest(".delete");

    if (deleteButton) {
        const listItem = deleteButton.closest("li");
        const idItem = listItem.id.replace("item-", "");

        fetch(...request.requestDelete(idItem)).then(() => {
            loadList();
            alert("Item removido com sucesso!");
        }).catch(error => {
            console.error(error.message)
        })
    }
})