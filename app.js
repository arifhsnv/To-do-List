const taskInput = document.querySelector(".task-input");
const addButon = document.querySelector(".add-task");
const uptadeButton = document.querySelector(".uptade-task");
const listForTask = document.querySelector(".list");

uptadeButton.setAttribute("style", "display:none");

addButon.addEventListener("click", function (e) {
  e.preventDefault();
  const liForTask = document.createElement("li");
  listForTask.appendChild(liForTask);
  
  const span = document.createElement("span");
  span.classList.add("span");
  liForTask.appendChild(span);
  span.textContent = taskInput.value;

  const deleteValue = document.createElement("button");
  deleteValue.classList.add("delete-button");
  liForTask.appendChild(deleteValue);
  deleteValue.addEventListener("click", function (e) {
    e.preventDefault();
    liForTask.remove();
  });

  const editButton = document.createElement("button");
  editButton.classList.add("edit-button");
  editButton.textContent = "Edit";
  liForTask.appendChild(editButton);

  const spanValue = span.textContent;
  let isEditing = false;

  editButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (!isEditing) {
      isEditing = true;
      taskInput.value = spanValue;
      addButon.setAttribute("style", "display:none");
      uptadeButton.removeAttribute("style", "display:none");
      span.textContent = "";
    } else {
      taskInput.value = span.textContent;
      addButon.setAttribute("style", "display:none");
      uptadeButton.removeAttribute("style", "display:none");
      span.textContent = "";
    }
  });

  uptadeButton.addEventListener("click", function (e) {
    const uptadeTask = taskInput.value.trim()
    e.preventDefault();
    if (isEditing) {
      span.textContent = uptadeTask;
      isEditing = false
      taskInput.value = "";
      addButon.removeAttribute("style");
      uptadeButton.setAttribute("style", "display:none");
    }
  });
  taskInput.value = "";
});