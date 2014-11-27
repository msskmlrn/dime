window.addEventListener('load', sivuLadattu);

function sivuLadattu(){
		var jquery = document.createElement("script");
		jquery.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js"
		document.head.appendChild(jquery);

		var jqueryui = document.createElement("script");
		jqueryui.src = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"
		document.head.appendChild(jqueryui);
		
		setTimeout("odota()", 50);
	}

function odota(){
	var elementit = $("*");
	for (var i = 0; i < elementit.length; ++i) {
		$(elementit[i]).click(poistaElementit);
	}
}

function poistaElementit(e){
	if ( e.target.nodeName == "BODY") {
		 alert('Älä töki bodyä, vaan elementtejä!');
		return;
	}
	var elementti = e.target;
	$(elementti).fadeOut("slow", function() {
		$(elementti).remove();
	});
}
