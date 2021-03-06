;$.fn.visible = function(partial){

	var $t	= $(this),
		$w	= $(window);

	if ($t.length < 1) return;
	
	var viewTop	= $w.scrollTop(),
	viewBottom	= viewTop + $w.height(),
	_top		= $t.offset().top,
	_bottom		= _top + $t.height(),
	compareTop	= partial === true ? _bottom : _top,
	compareBottom	= partial === true ? _top : _bottom;

	return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
};

$.fn.selectAll = function() {
	return this.each(function(){ this.select() });
};

$.fn.unselect = function() {
	return this.each(function(){
		var input = this,
			value = input.value;
			input.value += " ";
			input.value = value;
	});
};