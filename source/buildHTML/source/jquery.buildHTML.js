$.buildHTML = function(html, keepScripts) {

	// If a jquery element was passed in, return as it is.
	if (html instanceof $) return html;

	// Trim out any whitespace so no unusable text nodes are introduced.
	var html = $.trim(html),

		// Build html fragment while keeping a separate reference to the script
		scripts = [],
		fragment = $.buildFragment([html], document, scripts),

		// Convert childNodes into a proper array
		nodes = $.merge([], fragment.childNodes);

	// If we want to remove the script after
	// it is appended to the DOM & executed
	if (!keepScripts && scripts.length > 0) {

		// Create script remover
		var script = document.createElement("script");
			script.text = $.callback(function(){$(scripts).remove();}) + "();";

		// Go through nodes in reverse
		var i = nodes.length-1, node, inserted;

		while (node = nodes[i--]) {

			// If a script node is found first, we'll just append
			// script remover next to it to ensure this last script
			// executes before any script removal happens.
			if (node.nodeName==="SCRIPT") {
				inserted = nodes.push(script);
			} else if (node.nodeType===1) {
				inserted = node.appendChild(script);
			}

			if (inserted) break;
		}

		// If script remover was not inserted,
		// then just add it to the array of nodes
		if (!inserted) nodes.push(script);

		// Add script remover itself to the
		// array of scripts to be removed.
		scripts.push(script);
	}

	// Convert nodes into jquery instance and return
	return $(nodes);
};