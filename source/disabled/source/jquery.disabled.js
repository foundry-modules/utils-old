/**
* jquery.disabled
* Checks if element is disabled and adds a disable class
*
*/

$.fn.disabled = function(state) {
	return (state===undefined) ?
				(this.is(":disabled") || this.hasClass('disabled')) :
				this.prop('disabled', !!state).toggleClass("disabled", !!state);
};

$.fn.enabled = function(state) {
	return (state===undefined) ? !this.disabled() : this.disabled(!state);
};
