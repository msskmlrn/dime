window.addEventListener("load", sivuLadattu);

function sivuLadattu(){
	var ympyrat = document.querySelectorAll("circle");
	
	for (var i = 0; i < ympyrat.length; i++){
		ympyrat[i].addEventListener("click", klikattu);
	}
}

function klikattu(e){
	console.log(e);
	e.target.setAttribute("r", parseInt(e.target.getAttribute("r")) + 10);
}
