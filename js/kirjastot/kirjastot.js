function haeKirjastot() {
	$.getJSON("http://www.hel.fi/palvelukarttaws/rest/v1/service/8551?callback=?", function(json) {
	// nyt json.unit_ids sisältää taulukon kirjasto-idejä
		for (i in json.unit_ids {
			haeKirjasto(json.unit_ids[i]);
		}
	});
}

function haeKirjasto(id) {
	$.getJSON("http://www.hel.fi/palvelukarttaws/rest/v1/unit/"+id+"?callback=?", function(json) {
    // tulosta kirjaston nimi
	console.log(json.name_fi);
	});
}
