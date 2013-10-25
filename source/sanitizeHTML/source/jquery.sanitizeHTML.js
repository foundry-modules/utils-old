$.sanitizeHTML = function(html) {
	return $($.parseHTML(html)).toHTML();
};