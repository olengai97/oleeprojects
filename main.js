
var todoArray = new Array();
window.onload = init;

function init() {
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
	var ul = document.getElementById('to-do');
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

