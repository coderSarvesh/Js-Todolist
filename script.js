let inputElem = document.querySelector('input');
let formElem = document.querySelector('form');
let listElem = document.querySelector('ul');
let totalTasks = document.querySelector('#total-tasks');

let todolist =[
    
];

function showList(){
     listElem.innerHTML='';
     todolist.forEach(function(item){
        let newItem = document.createElement('li');
     
        //ADD NEW SPAN
        let span = document.createElement('span');
        span.innerHTML = item;
        newItem.appendChild(span);
    
       //ADD DELETE BUTTON
       let ancElem = document.createElement('a');
       ancElem.classList.add('delete');
       ancElem.innerHTML = '<i class="fas fa-trash-alt"></i>';
       newItem.appendChild(ancElem);

       ancElem.addEventListener('click',(e)=> deleteItem(e));

       //ADDING CREATED LI TO LIST ELEMENT
       listElem.appendChild(newItem);
    });
       //TO SHOW TOTAL TASKS
    totalTasks.innerHTML = todolist.length;
}

showList();


function noWhiteSpace(s){
    let string = s.trim();
    return string.length > 0;
};

function addTask(){
    if(inputElem.value && noWhiteSpace(inputElem.value) && !todolist.includes(inputElem.value)){
       todolist.push(inputElem.value);
       showList();
    }
    inputElem.value='';
};

function deleteItem(e){
    let task = e.target.parentElement.previousElementSibling.innerHTML;
    let index = todolist.indexOf(task);
    if(index!== -1){
        todolist.splice(index,1);
    }
    showList();
}

formElem.addEventListener('submit',function(e){
    e.preventDefault();
    addTask();
});
