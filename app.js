const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal(){
    const enteredValue = inputEl.value;
    const listItemEl = document.createElement('li'); 
    listItemEl.textContent = enteredValue;
    listEl.appendChild(listItemEl);
    inputEl.value = '';
}

//no need to call the function using addGoal() because we are passing the function as a reference
buttonEl.addEventListener('click', addGoal);