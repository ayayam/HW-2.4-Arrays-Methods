let cities = ["Tokyo", " Cairo", " Prague", " Cuzco", " Los Angeles"];

function displayArray() {
	document.getElementById("display").innerHTML = cities;
}
displayArray();

// Function described on step 12 on instructions 
function push() {
	let val = document.getElementById("newItem").value;
	cities.push(val);
	displayArray();
	//Don't forget to call the function displayArray you created on step 7
}

function pop() {
	cities.pop();
	displayArray();
}

function shift() {
	cities.shift();
	displayArray();
}

function unshift() {
	let val = document.getElementById("newItem").value;
	cities.unshift(val);
	displayArray();
}

cities = [];
let noCities = cities;
function displayNewArray() {
	document.getElementById("display").innerHTML = noCities;
}
