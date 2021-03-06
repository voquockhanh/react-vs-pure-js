var todoTitleInputEle = document.getElementById("new-item-input");
var newTodoBtnEle = document.getElementById("add-new-item-btn");
var todoListingEle = document.getElementById("tasks-listing");

newTodoBtnEle.addEventListener("click", addNewItem);

function addNewItem(event) {
  newTodoEle = createNewTodoElement(todoTitleInputEle.value);
  todoListingEle.appendChild(newTodoEle);
  todoTitleInputEle.value = "";
  bindDynamicEvents(newTodoEle);
}

function createNewTodoElement(title) {
  var listItem = document.createElement("li");

  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  var label = document.createElement("label");
  label.innerText = title;

  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  return listItem;
}

function bindDynamicEvents(todoEle) {
  var checkBoxEle = todoEle.querySelector("input[type=checkbox]");
  checkBoxEle.addEventListener("change", function(event) {
    updateTodoItem(todoEle, event)
  });
}

function updateTodoItem(todoItemEle, event) {
  if (event.target.checked === true) {
    todoItemEle.classList.add("done");
  } else {
    todoItemEle.classList.remove("done");
  }
}
