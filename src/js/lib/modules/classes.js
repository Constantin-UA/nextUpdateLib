import $ from '../core';

$.prototype.addClass = function (...classNames) {
	if (!classNames) {
		return this;
	}
	for (let i = 0; i < this.length; i++) {
		if (!this[i].classList) {
			continue;
		}
		this[i].classList.add(...classNames);
	}
	return this;
};

$.prototype.removeClass = function (...classNames) {
	if (!classNames) {
		return this;
	}
	for (let i = 0; i < this.length; i++) {
		if (!this[i].classList) {
			continue;
		}
		this[i].classList.remove(...classNames);
	}
	return this;
};

$.prototype.toggleClass = function (className) {
	if (!className) {
		return this;
	}
	for (let i = 0; i < this.length; i++) {
		if (!this[i].classList) {
			continue;
		}
		this[i].classList.toggle(className);
	}
	return this;
};

$.prototype.hasClass = function (className) {
	if (!className) {
		return this;
	}
	for (let i = 0; i < this.length; i++) {
		if (!this[i].classList) {
			continue;
		}
		if (this[i].classList.contains(className)) {
			return true;
		}
	}
	return false;
};
