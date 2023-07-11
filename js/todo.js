const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveTodo() {
    // 로컬스토리지는 그냥 text형식으로 저장하기 때문에 string형식으로 변형해준다.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleDelete(event) {
    const parentLi = event.target.parentElement;
    parentLi.remove();
}

function paintValue(newTodo) {
    // submit한 todo를 웹에 표기해줌.
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    button.innerText = "❌";
    button.addEventListener("click", handleDelete);
}

function handleSubmit(event) {
    // todo를 submit했을 때 todo의 데이터 저장 및 출력
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    // const saveObj = {
    //     "text":newTodo,
    //     "id":
    // }
    toDos.push(newTodo);
    paintValue(newTodo);
    saveTodo();
}

todoForm.addEventListener("submit", handleSubmit);

const dataTodos = localStorage.getItem(TODOS_KEY);
if (dataTodos != null) {
    // string으로 변형을 했어도 전부 string이라 사용하기 좋게 array로 변형시켜준다.
    const parseTodos = JSON.parse(dataTodos);
}