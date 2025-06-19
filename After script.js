let todoList = [];

const inputField = document.getElementById("inp");
const listContainer = document.getElementById("list");

function addItem() {
  const value = inputField.value.trim();
  if (!value) return;

  todoList.push(value);
  inputField.value = "";
  updateListUI();
}

function updateListUI() {
  listContainer.innerHTML = "";

  todoList.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = () => removeItem(index);

    li.appendChild(deleteBtn);
    listContainer.appendChild(li);
  });
}

function removeItem(index) {
  todoList.splice(index, 1);
  updateListUI();
}
