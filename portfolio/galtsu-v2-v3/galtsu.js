var kuvat;
var nykyinenKuva;
var isokuva;
var isovideo;

window.addEventListener("load", sivuLadattu);

function kasittele(json) {
	kuvat = json;
}

function sivuLadattu() {
	pikkukuvat = document.querySelector("#pikkukuvat");
	isokuva = document.querySelector("#isokuva");
	isovideo = document.querySelector("#isovideo");	
	
	for (var i = 0; i < kuvat.length; i++) {
		var kuva = document.createElement("img");
		
		if (kuvat[i].substr((kuvat[i].length - 3)) == "jpg") {
			kuva.src = "./pienet/" + kuvat[i];
			kuva.addEventListener("click", pikkukuvaaKlikattu);
		} else {
			kuva.src = "./pienet/" + kuvat[i].replace("ogv", "jpg");
			kuva.addEventListener("click", videotaKlikattu);
		}
		pikkukuvat.appendChild(kuva);
	}
	
	window.addEventListener("keydown", nappainpanallus);
	document.querySelector("#light").addEventListener("click", suljeIsoElementti);
	isokuva.addEventListener("load", valmisteleIsoElementti);
	isovideo.addEventListener("play", valmisteleIsoElementti);
}

function pikkukuvaaKlikattu(e) {
	avaaPikkukuva(e.target);
}

function avaaPikkukuva(kuva) {
	nykyinenKuva = kuva;
	isokuva.src = kuva.src.replace("/pienet/", "/isot/");
	isokuva.style.display = "block";
}

function videotaKlikattu(e) {
	video = e.target;
	avaaVideo(video);
}

function avaaVideo(vid) {
	nykyinenKuva = vid;
	var video = vid.src.replace(".jpg", ".ogv");
	video = video.replace("/pienet/", "/isot/");
	isovideo.src = video;
	isovideo.style.display = "block";
	isovideo.load();
	isovideo.play();
}

function valmisteleIsoElementti(e) {
	var light = document.querySelector("#light");
	light.style.width = e.target.width + "px";
	light.style.height = e.target.height + "px";
	document.querySelector("#fade").style.display = "block";
	light.style.display = "block";	
}

function suljeIsoElementti() {
	tyhjennaElementti();
	document.querySelector("#light").style.display = "none";
	document.querySelector("#fade").style.display = "none";
}

function tyhjennaElementti() {
	isokuva.src = "";
	isokuva.style.display = "none";
	isovideo.src = "";
	isovideo.style.display = "none";
	isovideo.pause();
}

function tarkistaKuva(str) {
	for (var i = 0; i < kuvat.length; i++) {
		if (str.src.indexOf(kuvat[i]) > 0) { 
			return true;
		}	
	}
	return false;
}

function nappainpanallus(e) {
	if (e.keyCode == 27) {
		suljeIsoElementti();
	} else if (e.keyCode == 37) {
		if (nykyinenKuva.previousElementSibling == null) {
			return;
		}
		tyhjennaElementti();
		if (tarkistaKuva(nykyinenKuva.previousElementSibling)) {
			avaaPikkukuva(nykyinenKuva.previousElementSibling);
		} else {
			avaaVideo(nykyinenKuva.previousElementSibling);
		}
	} else if (e.keyCode == 39) {
		if (nykyinenKuva.nextElementSibling == null) {
			return;
		}	
		tyhjennaElementti();
		if (tarkistaKuva(nykyinenKuva.nextElementSibling)) {
			avaaPikkukuva(nykyinenKuva.nextElementSibling);
		} else {
			avaaVideo(nykyinenKuva.nextElementSibling)
		}
	}
}
