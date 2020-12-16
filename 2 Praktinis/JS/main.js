var image = document.querySelector(".img");
var padidinti = document.querySelector(".btn-primary");
var sumazinti = document.querySelector(".btn-secondary");

padidinti.addEventListener("click", function(){
	image.classList.toggle("didesnis");
});

sumazinti.addEventListener("click", function(){
	image.classList.toggle("mazesnis");
});