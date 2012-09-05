/**
* jquery.disabled
* Checks if element is disabled and adds a disable class
*
*/

$.fn.disabled = function(x) {
	if(x === undefined) {
		return this.hasClass('disabled');
	} else {
		if(!!x) {
			this.addClass('disabled');
		} else {
			this.removeClass('disabled');
		}
		return this;
	}
};

$.fn.enabled = function(x) {
	return (x===undefined) ? !this.disabled() : this.disabled(!x);
};
