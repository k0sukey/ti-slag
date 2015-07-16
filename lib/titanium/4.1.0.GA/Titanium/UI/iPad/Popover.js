function Popover(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iPad.Popover';
	if (properties.height) {
		throw new Error('Ti.UI.iPad.Popover.height was deprecated, since 3.4.2');
	}
	if (properties.width) {
		throw new Error('Ti.UI.iPad.Popover.width was deprecated, since 3.4.2');
	}
	this.arrowDirection = properties.arrowDirection || 0;
	this.contentView = properties.contentView || {};
	if (properties.leftNavButton) {
		throw new Error('Ti.UI.iPad.Popover.leftNavButton was deprecated, since 3.4.2');
	}
	this.passthroughViews = properties.passthroughViews || [];
	if (properties.rightNavButton) {
		throw new Error('Ti.UI.iPad.Popover.rightNavButton was deprecated, since 3.4.2');
	}
	if (properties.title) {
		throw new Error('Ti.UI.iPad.Popover.title was deprecated, since 3.4.2');
	}
	return this;
}
Popover.prototype.addEventListener = function () {
};
Popover.prototype.removeEventListener = function () {
};
Popover.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
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
	return true;
};
Popover.prototype.setBubbleParent = function () {
};
Popover.prototype.getApiName = function () {
	return '';
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
	return 0;
};
Popover.prototype.setArrowDirection = function () {
};
Popover.prototype.getContentView = function () {
	return {};
};
Popover.prototype.setContentView = function () {
};
Popover.prototype.getLeftNavButton = function () {
	throw new Error('Ti.UI.iPad.Popover.getLeftNavButton was deprecated, since 3.4.2');
};
Popover.prototype.setLeftNavButton = function () {
	throw new Error('Ti.UI.iPad.Popover.setLeftNavButton was deprecated, since 3.4.2');
};
Popover.prototype.getPassthroughViews = function () {
	return [];
};
Popover.prototype.setPassthroughViews = function () {
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