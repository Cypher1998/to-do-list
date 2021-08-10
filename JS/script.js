const textInput = document.querySelector('input');
const addbtn = document.querySelector('i');
const todos = document.querySelectorAll('li');
const todoLists = document.querySelector('.to-do-lists');

/* to make the clear button 'X' appear on the top-most/ top-3 (desktop-version) list-item9(s) */
for (let todo of todos) {
    const span = document.createElement('span');   
    const txt = document.createTextNode('X');  
    span.className = 'clear';  
    span.appendChild(txt);   
    todo.appendChild(span);
}

//to make 'X' remove its parent list-item (as the above)
const clearbtn = document.querySelectorAll('.clear');
for (let clearList of clearbtn) {
    clearList.onclick = function() {
        const parent = this.parentElement;
        parent.remove();
    }
}

addbtn.addEventListener('click', function() {
    //creating new element(s) for subsequent todo(s)
    const li = document.createElement('li'); 

    /*creatin a TextNode(content of an element) and appending to the former*/
    li.appendChild(document.createTextNode(`${textInput.value}`)); 
    if (textInput.value === '') {
        alert('field cannot be empty');
    } else {
        todoLists.appendChild(li); /* appends the created element and its TextNode to the ul(to-do-lists) */
    }

    textInput.value = ''; /* this reset the value of the input tag to empty */

    /* to make the clear button 'X' appear on subsequent list-item */
    const span = document.createElement('span');   
    const txt = document.createTextNode('X');  
    span.className = 'clear';  
    span.appendChild(txt);   
    li.appendChild(span);

    //to make 'X' remove parent for subsequent list-items
    const clearbtn = document.querySelectorAll('.clear');
    for (let clearList of clearbtn) {
    clearList.onclick = function() {
    const parent = this.parentElement;
    parent.remove();
        }
    }
});