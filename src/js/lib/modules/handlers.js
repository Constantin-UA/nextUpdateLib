import $ from '../core';

$.prototype.on = function (eventHandler, callback) {
	if (!eventHandler || !callback) {
		return this;
	}

	for (let i = 0; i < this.length; i++) {
		this[i].addEventListener(eventHandler, callback);
	}
	return this;
};

$.prototype.off = function (eventHandler, callback) {
	if (!eventHandler || !callback) {
		return this;
	}

	for (let i = 0; i < this.length; i++) {
		this[i].removeEventListener(eventHandler, callback);
	}
	return this;
};

$.prototype.click = function (callback) {
	for (let i = 0; i < this.length; i++) {
		if (!callback) {
			this[i].click();
		} else {
			this[i].addEventListener('click', callback);
		}
	}
	return this;
};
