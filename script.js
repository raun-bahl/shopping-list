var button = document.getElementsByTagName("button")[0];
//can get the value from the input using input.value
var input = document.getElementById("input-text");
var ul = document.querySelector("ul");

//create a dynamic list element
function createListElement() {
	var li = document.createElement("li");
	//createTextNode makes a new text node using DOM and appendChild adds it to the variable
	li.appendChild(document.createTextNode(input.value));
	//attach it to the main ul on the HTML
	ul.appendChild(li);
	//this doesnt let the user keep clicking enter and add it to the list
	input.value = "";
}

//identify button press
button.addEventListener("click", function () {
	if (input.value.length > 0) {
		createListElement();
	}
})
//identify enter key
input.addEventListener("keypress", function (event) {
	//keyCode for enter is 0
	if (input.value.length > 0 && event.keyCode == 13) {
		createListElement();
	}
})