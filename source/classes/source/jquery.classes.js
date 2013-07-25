$.fn.addTransitionClass = function(classname, duration){

	var $el = this.addClass(classname);

	setTimeout(function(){
		$el.removeClass(classname);
	}, duration || 0);

	return this;
};

$.fn.switchClass = function(classname, delimiter){

	var delimiter = delimiter || "-",
		prefix = classname.split(delimiter)[0] + delimiter,
		length = prefix.length;

	return this.each(function(){

		var $el = $(this),
			classnames =
				$.map($el.attr("class").split(' '), function(classname){
					return (classname.slice(0, length)==prefix || classname=="") ? null : classname;
				});
			classnames.push(classname);

		$el.attr("class", classnames.join(" "));
	});
};
