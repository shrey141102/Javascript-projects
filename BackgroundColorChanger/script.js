function bgchange(color) {
	let colorarray = ["#e58e26", "#f9b4ab", "#B1FB17", "#78e08f", "#fd79a8"];
	document.body.style.background = colorarray[color];
}

var colorarray = ["#e58e26", "#f9b4ab", "#B1FB17", "#78e08f", "#fd79a8"];
var colorbox = document.getElementById("colorbox");

let hexcode = document.getElementById('hexcode');

colorarray.forEach(function (color, index) {
	let span = document.createElement("span");
	span.style.backgroundColor = color;
	span.addEventListener("click", function () {
		bgchange(index);
		
		// Display the color code 
		hexcode.innerHTML = colorarray[index].toUpperCase();
	});
	colorbox.appendChild(span);
});
