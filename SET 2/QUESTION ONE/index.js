function addItem() {
  let addingItem = document.getElementById("list");
  let listItem = document.getElementById("listItem");
  let li = document.createElement("li");
  li.setAttribute("id", listItem.value);
  li.appendChild(document.createTextNode(listItem.value));
  addingItem.appendChild(li);
}

// Creating a function to remove item from list
function removeItem() {
  // Declaring a variable to get select element
  let removingItem = document.getElementById("list");
  let listItem = document.getElementById("listItem");
  let item = document.getElementById(listItem.value);
  removingItem.removeChild(item);
}
function editItem() {
    // Declaring variable to be edited.
    let editingItem = document.getElementById("list");
    let listItem = document.getElementById("listItem");
    let item = document.getElementById(listItem.value);
    editingItem.contentEditable(item);
    newEditedItem.appendChild(item);

  }



