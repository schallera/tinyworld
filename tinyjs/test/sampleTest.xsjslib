describe("sample test suite", function() {

	beforeEach(function() {});

	it("add simple", function() {
		$.import("calc", "calculator");
		var calc = $.calc.calculator;
		var sum = calc.add(1, 1);
		expect(sum).toBe(2);
	});

	it("add_country", function() {
		$.import("lib", "countrylib");
		var saveCountry = $.lib.countrylib.saveCountry;
		var country = {
			name: "Austria",
			partof: "Europe"
		};
		var result = saveCountry(country);
		expect(result).toBe("ERROR: Country Austria already exists!");
	});
});