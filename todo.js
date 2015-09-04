

var mass = [];

while (true) {

	var value = prompt('Enter event');

	mass.push(value);
	
	

	if(value == 0 || value == undefined || value == null){
		break;
	}
	
}
for(var i = mass.length - 1; i >= 0; i--){
	if(mass[i] == ","){
		mass[i] = "";
	}
}

document.body.innerHTML = '<div class="wrapper">' + mass.map(function(todo) {


 return '<p class= "todo">' + todo + '</p>';
})













