var ul = document.getElementById('to-do');
var submit = document.getElementById('submit');

var todoArray = new Array();
window.onload = init;

function NewTodo(task, who, date) {
	this.task = task;
	this.who = who;
	this.date = date;
	this.done = false;
}

function init() {
	submit.onclick = getFormData;
	getData();
	
}

function getData() {
	var req = new XMLHttpRequest();
	req.open('GET', 'https://olengai97.github.io/oleeprojects/to-do-list.json');
	req.onreadystatechange = function() {
		if(this.readyState == this.DONE && this.status == 200) {
			var dat = JSON.parse(this.responseText);
			todoFetch(dat);
			addTodosToPage();
			
		}
	}
	req.send();
}

function todoFetch(dataFetched) {
	if(dataFetched.length == 0){
		alert("To-do List is empty");
	} else {
		for(var i = 0; i<dataFetched.length; i++) {
			var todoItem = dataFetched[i];
			todoArray.push(todoItem);
		}
	}
}

function addTodosToPage() {
	
	for(var i = 0; i<todoArray.length; i++) {
		var todoItem = todoArray[i];
		if(todoItem.done == false) {
			var li = document.createElement('li');
			li.innerHTML = todoItem.who + " have to " + todoItem.task + " by " + todoItem.dueDate;
			ul.appendChild(li);
		} else if (todoItem.done == true) {
			var li = document.createElement('li');
			li.setAttribute('class', 'done');
			li.innerHTML = todoItem.who + " have completed a task to " + todoItem.task + " by " + todoItem.dueDate;
			ul.appendChild(li);
		}
		

	}
	
}

function getFormData() {
	var task = document.getElementById('task').value;
	if(validateText(task, "Please fill what task should be taken")) return;

	var who = document.getElementById('who').value;
	if(validateText(who, "Please fill who should take the task")) return;

	var date = document.getElementById('dueDate').value;
	if(validateText(date, "Please fill specify what time should the task be taken")) return;

	console.log(who+" have to "+task+" by "+date);
	var newItem = new NewTodo(task, who, date);
	todoArray.push(newItem);

	var li = document.createElement('li');
	li.innerHTML = who + " have completed a task to " + task + " by " + date;
	ul.appendChild(li);
	document.forms[0].reset();
}

function validateText(value, msg) {
	if(value == "" || value == null) {
		alert(msg);
		return true;
	}
	return false;
}

