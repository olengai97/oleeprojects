var div = document.querySelector('div');

var req = new XMLHttpRequest();
req.open('GET', 'https://olengai97.github.io/oleeprojects/pets.json');
req.onload = function() {
	var dat = req.responseText;
	div.innerHTML = dat;
}
	
req.send();


