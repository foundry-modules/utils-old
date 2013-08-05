$.buildHTML = function(html, keepScripts) {

	var callback,
		scripts = [];

	// If we want to remove the script after it is executed
	if (!keepScripts) {

		// Create script removal callback
		callback = document.createElement("script");
		callback.text = $.callback(function(){$(scripts).remove();}) + "();";
	}

	// Build html fragment while keeping a separate reference to the script
	var fragment = $.buildFragment([html, callback], document, scripts);

	// Convert nodes of the fragment into jquery instance
	return $($.merge([], fragment.childNodes));
};