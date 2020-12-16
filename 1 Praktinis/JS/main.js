var yellow = document.querySelector(".ylw");
var red = document.querySelector(".rd");
var green = document.querySelector(".grn");
var text = document.querySelector(".text");


yellow.addEventListener("click", function(){
	text.classList.toggle("yellow");
});


red.addEventListener("click", function(){
	text.classList.toggle("red");
});

green.addEventListener("click", function(){
	text.classList.toggle("green");
});