numero = 0;
window.addEventListener("load", sivuLadattu);

function sivuLadattu() {
	var thumbnales = document.querySelectorAll("a");
	for (var i = 0; i < thumbnales.length; i++) {
		thumbnales[i].addEventListener("click", kuvaaKlikattu);
	}
	
	slideshow.addEventListener("click", aloitaSlideshow);
}

function kuvaaKlikattu(e) {
	e.preventDefault();
	
	var href = e.target.parentNode.getAttribute("href");
	var alt = e.target.parentNode.getAttribute("alt");
	
	var iso = document.querySelector("#isokuva");
	iso.setAttribute("src", href);
	iso.setAttribute("alt", alt);
}

function aloitaSlideshow(e) {
	if (e.target.textContent == "Aloita show") {
		e.target.textContent = "Lopeta show";
		intervalID = window.setInterval(vaihdaKuva, 3000);	
	}
	else {
		window.clearInterval(intervalID);
		e.target.textContent="Aloita show";
	}
}

function vaihdaKuva() {
	var thumbnales = document.querySelectorAll("a");
	
	var href = thumbnales[numero].getAttribute("href");
	var alt = thumbnales[numero].getAttribute("alt");
	
	var iso = document.querySelector("#isokuva");
	iso.setAttribute("src",href);
	iso.setAttribute("alt",alt);
	
	numero++;
	if (numero == thumbnales.length) {
		numero = 0;
	}  	
}	

