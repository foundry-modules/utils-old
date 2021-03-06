$.buildHTML = function(html, keepScripts) {

	// If a jquery element was passed in, return as it is.
	if (html instanceof $) return html;

    var doc = document;

    // If CloudFlare exists, use document from iframe
    // because CloudFlare Rocketscript overrides native methods.
    if (window["CloudFlare"]) {

        var iframe = $.buildHTML.iframe;

        // If iframe wasn't created, or iframe was removed or detached,
        // create the iframe element again;
        if (!iframe || !iframe.contentDocument) {

            // Create iframe
            var iframe =
                $.buildHTML.iframe =
                document.createElement("iframe");

            // Hide iframe
            iframe.style.display = "none";

            // Append iframe to body
            document.body.appendChild(iframe);
        }

        doc = iframe.contentDocument;
    }

	// Trim out any whitespace so no unusable text nodes are introduced.
	var html = $.trim(html),

		// Build html fragment while keeping a separate reference to the script
		scripts = [],
        fragment = $.buildFragment([html], doc, scripts),

		// Convert childNodes into a proper array
		nodes = $.merge([], fragment.childNodes);

	// If we want to remove the script after
	// it is appended to the DOM & executed
	if (!keepScripts && scripts.length > 0) {

		// Create script remover
		var script = doc.createElement("script");
			// This is wrapped in try..catch because Cloudflare's
			// proxy node executes this twice for some reason.
			// The second time this executes, the callback has been removed,
			// so let it fail silently.
			script.text = "try{" + $.callback(function(){$(scripts).remove();}) + "();}catch(e){}";

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