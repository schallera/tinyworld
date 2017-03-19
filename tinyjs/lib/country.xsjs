$.import("lib", "countrylib");
var saveCountry = $.lib.countrylib.saveCountry;

var country = {
	name: $.request.parameters.get("name"),
	partof: $.request.parameters.get("continent")
};

var output = saveCountry(country);
$.response.contentType = "application/json";
$.response.setBody(output);