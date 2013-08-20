$(function(){
	$("[data-recovery-id]").each(function(){
		var script = $(this),
			recoveryId = script.attr("data-recovery-id");
		// Execute script if it wasn't executed
		if (!window[recoveryId]) try { eval(script[0].innerHTML); } catch(e) { throw e; }
		delete window[recoveryId];
	});
});