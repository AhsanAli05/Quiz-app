let addbt1 = document.querySelectorAll(".container button")[0];
let list = document.getElementById("taskList");
addbt1.addEventListener("click",() => {
    let input = document.getElementById("taskInput");
    let listElemnts = document.createElement("li");
    let listtext = document.createTextNode(input.value);
    listElemnts.appendChild(listtext);
    list.appendChild(listElemnts);
    // for indivdaul list delete 
    let delbtn = document.createElement("button")
    let deltext = document.createTextNode("delete");
    delbtn.appendChild(deltext);
    listElemnts.appendChild(delbtn);
    delbtn.setAttribute('onclick', 'deleteTask(this)');
    // for individual modification
    let editbtn = document.createElement("button");
    let edittext = document.createTextNode("edit");
    editbtn.appendChild(edittext);
    editbtn.setAttribute('onclick', 'editTask(this)')
    listElemnts.appendChild(editbtn);
    input.value = "";
})

function deleteTask(button) {
    button.parentNode.remove();
}

function editTask(button){
    // to target button parent means li value
    let currentli = button.parentNode.firstChild.nodeValue;
    let inputField = prompt("enter update value : ",currentli);
    button.parentNode.firstChild.nodeValue = inputField;
}

// for delelte all button
let deleAll = document.querySelectorAll(".container button")[1];
deleAll.addEventListener("click",()=>{
    let lastChild = list.lastChild;
    while (lastChild) {
        list.removeChild(lastChild);
        lastChild = list.lastChild;
    }
})

// chatgpt
// Get references to HTML elements
// const taskInput = document.getElementById('taskInput');
// const addTaskButton = document.getElementById('addTask');
// const taskList = document.getElementById('taskList');

// // Add a new task to the list
// addTaskButton.addEventListener('click', () => {
//     const taskText = taskInput.value.trim();
//     if (taskText !== '') {
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `
//             <input type="text" value="${taskText}" readonly>
//             <button class="edit">Edit</button>
//             <button class="delete">Delete</button>
//         `;

//         const editButton = listItem.querySelector('.edit');
//         const deleteButton = listItem.querySelector('.delete');
        
//         // Add event listeners for edit and delete buttons
//         editButton.addEventListener('click', () => {
//             const inputField = listItem.querySelector('input');
//             inputField.removeAttribute('readonly');
//         });

//         deleteButton.addEventListener('click', () => {
//             listItem.remove();
//         });

//         taskList.appendChild(listItem);
//         taskInput.value = '';
//     }
// });

    