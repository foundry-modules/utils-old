$.sanitizeHTML = function(html) {

	var fragmentContainer = document.createElement('div'),
	fragment = document.createDocumentFragment();

	$.clean([html], document, fragment);

	fragmentContainer.appendChild(fragment);

	return fragmentContainer.innerHTML;
};