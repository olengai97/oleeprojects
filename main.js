var div = document.querySelector('pets');

var req = new XMLHttpRequest();
req.open('GET', 'https://olengai97.github.io/oleeprojects/pets.json');
req.onload = function() {
	var dat = req.responseText;
	div.innerHTML = dat;
}
	
req.send();


