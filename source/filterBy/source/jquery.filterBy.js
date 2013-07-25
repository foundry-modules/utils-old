$.fn.filterBy = function(key, val, operator) {

	var operator = operator || "=",
		selector = "[data-" + key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() + operator + val + "]";

	return this.filter(selector);
}
