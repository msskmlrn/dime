/* 
 	drag&drop ~kaikille svg-elementeille.
 	
 	Muokkaa SVG-tiedostoa seuraavasti:
 	1) Lisää svg-elementin attribuuteiksi puuttuva xmlns:xlink -nimiavaruus:
 		xmlns:xlink="http://www.w3.org/1999/xlink"
	2) Lisää svg-elementin ensimmäiseksi lapseksi linkki dragdrop.js -"kirjastoon":
		<script type="application/ecmascript" xlink:href="dragdrop.js"></script>

	t. SAMPUMON
*/

var prevX, prevY;

window.addEventListener("load", function(e) {
	var paths = document.querySelectorAll("path, rect, circle, ellipse, line, polygon, polyline, image, text");

	// globaali prev-hiiriarvojen päivitys
	// OBS: lapsielementtien mousemove kutsutaan ensin, koska doCapture==FALSE
	window.addEventListener("mousemove", mouseMove);

	for (var i = 0; i < paths.length; i++) {
		paths[i].addEventListener("mousedown", beginDrag);
	}
});

function mouseMove(e) {
	prevX = e.x;
	prevY = e.y;
}

function beginDrag(e) {
	// this.dragx ja this.dragy ei ole ennestään, vaan tässä ne luodaan nykyiselle elementille
	this.dragX = this.dragX ? this.dragX : 0;
	this.dragY = this.dragY ? this.dragY : 0;

	// itse raahaus tapahtuu täällä
	this.addEventListener("mousemove", doDrag);

	// ja lopulta raahaus lopetetaan
	this.addEventListener("mouseup", endDrag);
}

function doDrag(e) {
	this.dragX += e.x - prevX;
	this.dragY += e.y - prevY;

	// entä jos elementillä on transformaatioita ennestään? :o
	this.setAttribute("transform", "translate(" + this.dragX + "," + this.dragY + ")");
}

function endDrag(e) {
	this.removeEventListener("mousemove", doDrag);
	this.removeEventListener("mouseup", endDrag);	
}
