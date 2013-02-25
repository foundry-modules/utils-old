$.callback = function(func, persist){

	// Create callback
	if ($.isFunction(func)) {

		var funcName = $.uid("cb");

		window[funcName] = function(){

			// Destroy itself after callback has been called
			if (!persist) {
				delete window[funcName];
			}

			return func.apply(null, arguments);
		}

		return funcName;
	}

	// Callback method
	if ($.isString(func)) {
		switch (func) {
			case "destroy":
				var funcName = persist;
				delete window[funcName];
				break;
		}
	}
}