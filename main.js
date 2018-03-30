var div = document.querySelector('div');

var req = new XMLHttpRequest();
req.open('GET', 'https://olengai97.github.io/oleeprojects/pets.json');
div.innerHTML = req.responseText;
	
req.send();


