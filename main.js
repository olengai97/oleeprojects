var pet = document.getElementById('pets');

var req = new XMLHttpRequest();
req.open('GET', 'https://olengai97.github.io/oleeprojects/pets.json');
req.onload = function() {
	var dat = req.responseText;
	pet.innerHTML = dat;
}
	
req.send();


