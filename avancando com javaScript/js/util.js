export function createListItem(html, user, id) {
    const newItem = document.createElement("li");
    const spanName = document.createElement("span");
    const spanEmail = document.createElement("span");
    const divIcon = document.createElement("span");

    newItem.id = `item-${id}`;
    newItem.classList.add("list-group-item", "mt-2", "d-flex", "justify-content-between");

    spanName.textContent = user.name;
    spanEmail.textContent = user.email;

    divIcon.appendChild(addIconDelete(html));

    newItem.appendChild(spanName)
    newItem.appendChild(spanEmail)
    newItem.appendChild(divIcon);

    return newItem;
}

function addIconDelete(html) {
    const iconDeleteElement = document.createElement("span");
    const iconDelete = html.iconDelete;
    iconDeleteElement.innerHTML = iconDelete;
    iconDeleteElement.classList.add("ms-2", "delete");
    return iconDeleteElement;
}