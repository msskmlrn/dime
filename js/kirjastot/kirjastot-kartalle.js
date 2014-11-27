function initialize() {
    var latlng = new google.maps.LatLng(60.168842, 24.938622);
    var myOptions = {
      zoom: 12,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
	haeKirjastot();
}

function haeKirjastot() {
	$.getJSON("http://www.hel.fi/palvelukarttaws/rest/v1/service/8551?callback=?", function(json) {
		// nyt json.unit_ids sisältää taulukon kirjasto-idejä
		for(i in json.unit_ids) {
			haeKirjasto(json.unit_ids[i]);
		}
	});
}

function haeKirjasto(id) {
	$.getJSON("http://www.hel.fi/palvelukarttaws/rest/v1/unit/"+id+"?callback=?", function(json) {
		console.log(json.name_fi);
		lisääKirjastoKartalle(json.name_fi, json.latitude, json.longitude);
	});
}

function lisääKirjastoKartalle(nimi, lat, lng) {
	var kirjastoLatLng = new google.maps.LatLng(lat, lng);
	var marker = new google.maps.Marker({
		position: kirjastoLatLng,
		map: map,
		title: nimi
	});
}
