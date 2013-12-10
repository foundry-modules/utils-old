$.sanitizeHTML = function(html) {
	return $($.parseHTML(html, document, true)).toHTML();
};