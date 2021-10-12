import $ from '../core';

$.prototype.setAttribute = function (attrName, attrValue) {
	if (!attrName || !attrValue) {
		return this;
	}

	for (let i = 0; i < this.length; i++) {
		if (!this[i].setAttribute) {
			continue;
		}
		this[i].setAttribute(attrName, attrValue);
	}
	return this;
};

$.prototype.getAttribute = function (attrName) {
	if (!attrName) {
		return this;
	}

	for (let i = 0; i < this.length; i++) {
		if (!this[i].getAttribute) {
			continue;
		}
		if (this[i].hasAttribute(attrName)) {
			return this[i].getAttribute(attrName);
		}
	}
	return this;
};

$.prototype.removeAttribute = function (attrName) {
	if (!attrName) {
		return this;
	}

	for (let i = 0; i < this.length; i++) {
		if (!this[i].removeAttribute) {
			continue;
		}

		this[i].removeAttribute(attrName);
	}
	return this;
};

$.prototype.hasAttribute = function (attrName) {
	if (!attrName) {
		return this;
	}

	for (let i = 0; i < this.length; i++) {
		if (!this[i].hasAttribute) {
			continue;
		}

		if (this[i].hasAttribute(attrName)) {
			return true;
		}
	}
	return false;
};
