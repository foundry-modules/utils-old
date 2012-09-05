/**
* jquery.disabled
* Checks if element is disabled and adds a disable class
*
*/

$.fn.disabled = function(x) {
	return (x === undefined) ? this.hasClass('disabled') : this.toggleClass("disabled", !!x);
};

$.fn.enabled = function(x) {
	return (x===undefined) ? !this.disabled() : this.disabled(!x);
};
