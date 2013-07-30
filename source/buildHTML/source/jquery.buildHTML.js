$.buildHTML = function(html, keepScripts) {

	// Normalize arguments
	if (keepScripts===undefined) keepScripts = false;

	// Build html fragment
	var scripts = [],
		fragment = $($.buildFragment([html], document, scripts));

	// If we want to remove the script after it is executed
	if (!keepScripts) {

		// Create script removal callback
		var callback = document.createElement("script");
		callback.text = $.callback(function(){$(scripts).remove();}) + "();"

		// When the content is inserted into the DOM,
		// the callback will execute and remove scripts within it.
		fragment.append(callback);

		// Add it to the array of scripts so that
		// the callback script gets removed altogether.
		scripts.push(callback);
	}

	// Return the html fragment
	return fragment;
};