var crypto = require('crypto');
function Popover(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.iPad.Popover.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPad.Popover';
	if (__SLAG_PROPERTIES.height) {
		throw new Error('Ti.UI.iPad.Popover.height was deprecated, since 3.4.2');
	}
	if (__SLAG_PROPERTIES.width) {
		throw new Error('Ti.UI.iPad.Popover.width was deprecated, since 3.4.2');
	}
	this.arrowDirection = __SLAG_PROPERTIES.arrowDirection || 0;
	this.contentView = __SLAG_PROPERTIES.contentView || {};
	if (__SLAG_PROPERTIES.leftNavButton) {
		throw new Error('Ti.UI.iPad.Popover.leftNavButton was deprecated, since 3.4.2');
	}
	this.passthroughViews = __SLAG_PROPERTIES.passthroughViews || [];
	if (__SLAG_PROPERTIES.rightNavButton) {
		throw new Error('Ti.UI.iPad.Popover.rightNavButton was deprecated, since 3.4.2');
	}
	if (__SLAG_PROPERTIES.title) {
		throw new Error('Ti.UI.iPad.Popover.title was deprecated, since 3.4.2');
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Popover.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Popover.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Popover.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Popover.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
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
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Popover.prototype.remove = function () {
	throw new Error('Ti.UI.iPad.Popover.remove was deprecated, since 3.2.0');
};
Popover.prototype.show = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Popover.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Popover.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Popover.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
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
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.arrowDirection;
};
Popover.prototype.setArrowDirection = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.arrowDirection = __SLAG__PROPERTY;
};
Popover.prototype.getContentView = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.contentView;
};
Popover.prototype.setContentView = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.contentView = __SLAG__PROPERTY;
};
Popover.prototype.getLeftNavButton = function () {
	throw new Error('Ti.UI.iPad.Popover.getLeftNavButton was deprecated, since 3.4.2');
};
Popover.prototype.setLeftNavButton = function () {
	throw new Error('Ti.UI.iPad.Popover.setLeftNavButton was deprecated, since 3.4.2');
};
Popover.prototype.getPassthroughViews = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.passthroughViews;
};
Popover.prototype.setPassthroughViews = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.passthroughViews = __SLAG__PROPERTY;
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