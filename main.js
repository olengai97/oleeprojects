var div = document.querySelector('div');

var req = new XMLHttpRequest();
req.open('GET', 'https://localhost/ajax/pets.json');
div.innerHTML = req.responseText;
	
req.send();


