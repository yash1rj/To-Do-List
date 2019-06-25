function get_todos() {
    var todos = new Array;
	
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
	
    return todos;
}
 
function add() {
    var task = document.getElementById('task').value;
 
    var todos = get_todos();
	
	if(task != "") {
		todos.push(task);
	}
	else {
		alert("Enter something");
	}
	
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
	
	return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
	
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function show() {
    var todos = get_todos();
 
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
		html += '<li>' + '<button style="margin-right:10px;" class="btn btn-secondary remove" id="' + i  + '"> x </button>' + todos[i] + '</li>';
    };
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

function clear() {
	// console.log("CLear all");
	localStorage.clear();
	document.getElementById('task').value = "";
	show();
	
	return false;
}
 
show();

document.getElementById('add').addEventListener('click', add);
document.getElementById('clear').addEventListener('click', clear);
