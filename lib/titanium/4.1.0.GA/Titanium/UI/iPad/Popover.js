var crypto = require('crypto');
function Popover(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'height',
			'width',
			'arrowDirection',
			'contentView',
			'leftNavButton',
			'passthroughViews',
			'rightNavButton',
			'title',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iPad.Popover.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPad.Popover';
	if (__SLAG__properties.height) {
		throw new Error('Ti.UI.iPad.Popover.height was deprecated, since 3.4.2');
	}
	if (__SLAG__properties.width) {
		throw new Error('Ti.UI.iPad.Popover.width was deprecated, since 3.4.2');
	}
	this.arrowDirection = __SLAG__properties.arrowDirection || 0;
	this.contentView = __SLAG__properties.contentView || {};
	if (__SLAG__properties.leftNavButton) {
		throw new Error('Ti.UI.iPad.Popover.leftNavButton was deprecated, since 3.4.2');
	}
	this.passthroughViews = __SLAG__properties.passthroughViews || [];
	if (__SLAG__properties.rightNavButton) {
		throw new Error('Ti.UI.iPad.Popover.rightNavButton was deprecated, since 3.4.2');
	}
	if (__SLAG__properties.title) {
		throw new Error('Ti.UI.iPad.Popover.title was deprecated, since 3.4.2');
	}
	this.id = __SLAG__properties.id || '';
	return this;
}
Popover.prototype.addEventListener = function () {
};
Popover.prototype.removeEventListener = function () {
};
Popover.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Popover.prototype.fireEvent = function () {
};
Popover.prototype.finishLayout = function () {
	throw new Error('Ti.UI.iPad.Popover.finishLayout was deprecated, since 3.0.0');
};
Popover.prototype.startLayout = function () {
	throw new Error('Ti.UI.iPad.Popover.startLayout was deprecated, since 3.0.0');
};
Popover.prototype.updateLayout = function () {
	throw new Error('Ti.UI.iPad.Popover.updateLayout was deprecated, since 3.0.0');
};
Popover.prototype.add = function () {
	throw new Error('Ti.UI.iPad.Popover.add was deprecated, since 3.2.0');
};
Popover.prototype.hide = function () {
};
Popover.prototype.remove = function () {
	throw new Error('Ti.UI.iPad.Popover.remove was deprecated, since 3.2.0');
};
Popover.prototype.show = function () {
};
Popover.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Popover.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Popover.prototype.getApiName = function () {
	return this.apiName;
};
Popover.prototype.getHeight = function () {
	throw new Error('Ti.UI.iPad.Popover.getHeight was deprecated, since 3.4.2');
};
Popover.prototype.setHeight = function () {
	throw new Error('Ti.UI.iPad.Popover.setHeight was deprecated, since 3.4.2');
};
Popover.prototype.getWidth = function () {
	throw new Error('Ti.UI.iPad.Popover.getWidth was deprecated, since 3.4.2');
};
Popover.prototype.setWidth = function () {
	throw new Error('Ti.UI.iPad.Popover.setWidth was deprecated, since 3.4.2');
};
Popover.prototype.getArrowDirection = function () {
	return this.arrowDirection;
};
Popover.prototype.setArrowDirection = function (property) {
	this.arrowDirection = property;
};
Popover.prototype.getContentView = function () {
	return this.contentView;
};
Popover.prototype.setContentView = function (property) {
	this.contentView = property;
};
Popover.prototype.getLeftNavButton = function () {
	throw new Error('Ti.UI.iPad.Popover.getLeftNavButton was deprecated, since 3.4.2');
};
Popover.prototype.setLeftNavButton = function () {
	throw new Error('Ti.UI.iPad.Popover.setLeftNavButton was deprecated, since 3.4.2');
};
Popover.prototype.getPassthroughViews = function () {
	return this.passthroughViews;
};
Popover.prototype.setPassthroughViews = function (property) {
	this.passthroughViews = property;
};
Popover.prototype.getRightNavButton = function () {
	throw new Error('Ti.UI.iPad.Popover.getRightNavButton was deprecated, since 3.4.2');
};
Popover.prototype.setRightNavButton = function () {
	throw new Error('Ti.UI.iPad.Popover.setRightNavButton was deprecated, since 3.4.2');
};
Popover.prototype.getTitle = function () {
	throw new Error('Ti.UI.iPad.Popover.getTitle was deprecated, since 3.4.2');
};
Popover.prototype.setTitle = function () {
	throw new Error('Ti.UI.iPad.Popover.setTitle was deprecated, since 3.4.2');
};
module.exports = function (properties) {
	return new Popover(properties);
};