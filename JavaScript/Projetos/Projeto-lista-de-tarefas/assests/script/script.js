let inputElement = document.querySelector('#adicionar');
let buttonAdd = document.querySelector("#addtarefa");
let todoList = document.querySelector(".lista");
let deleteTodos = document.querySelector(".deltetodos")

addTarefa();

buttonAdd.onclick = () => {
    let inputCampo = inputElement.value
    let getLocalStorage = localStorage.getItem("list_tarefas");
    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(inputCampo)
    localStorage.setItem("list_tarefas", JSON.stringify(listArr));
    addTarefa();
}

function addTarefa() {
    let getLocalStorage = localStorage.getItem("list_tarefas");
    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    let spanNumero = document.querySelector(".numero");
    spanNumero.textContent = listArr.length;

    let campoLi = "";
    listArr.forEach((element, index) => {
        campoLi += `<li> ${element} <span onclick = "deleteTarefa(${index})"><img src="./assests/design/lixo.png" alt=""></span></li>`;
    });
    todoList.innerHTML = campoLi;
    inputElement.value = "";
};

function deleteTarefa(index){
    let getLocalStorage = localStorage.getItem("list_tarefas");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);

    localStorage.setItem("list_tarefas", JSON.stringify(listArr));
    addTarefa();

}

deleteTodos.onclick = () =>{
    listArr = []
    localStorage.setItem("list_tarefas", JSON.stringify(listArr));
    addTarefa();
}