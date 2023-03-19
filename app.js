let DomStrings = {
  form: document.getElementById("new-task-form"),
  input: document.getElementById("new-task-input"),
  submit: document.getElementById("new-task-submit"),
  list: document.getElementById("tasks"),
  date: document.querySelector(".date"),
  titleDate: document.querySelector(".title"),
};

DomStrings.submit.addEventListener("click", (e) => {
  e.preventDefault();
  let inputValue = DomStrings.input.value;
  let newTagHtml = "";
  newTagHtml = `
        <div id="tasks" class="tasks">
          <div class="task">
            <div class="content">
              <input type="input" class="text" value="${inputValue}" readonly />
            </div>
            <div class="actions">
              <button class="edit" id="edit">Edit</button>
              <button class="delete">Delete</button>
            </div>
          </div>
        </div>
  `;
  let list = document.querySelector(".task-list");
  let html = (list.innerHTML += newTagHtml);
  DomStrings.input.value = "";
  const edit = document.querySelector(".edit");
  edit.addEventListener("click", () => {
    const inputValue = document.querySelector(".text");
    if (edit.innerText.toLowerCase() == "edit") {
      edit.innerText = "Save";
      inputValue.removeAttribute("readonly");
      inputValue.focus();
    } else {
      edit.innerText = "Edit";
      inputValue.setAttribute("readonly", "readonly");
    }
  });

  let deleteBtn = document.querySelectorAll(".delete");
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", function () {
      let taskElement = this.closest(".task");
      taskElement.parentNode.removeChild(taskElement);
    });
  }
});
