function ViewAttachmentBehavior(properties) {
	properties = properties || {};
	this.anchorItem = properties.anchorItem || undefined;
	this.anchorOffset = properties.anchorOffset || undefined;
	this.apiName = 'Ti.UI.iOS.ViewAttachmentBehavior';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.damping = properties.damping || undefined;
	this.distance = properties.distance || undefined;
	this.frequency = properties.frequency || undefined;
	this.item = properties.item || undefined;
	this.itemOffset = properties.itemOffset || undefined;
	return this;
}
ViewAttachmentBehavior.prototype.addEventListener = function () {
};
ViewAttachmentBehavior.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ViewAttachmentBehavior.prototype.fireEvent = function () {
};
ViewAttachmentBehavior.prototype.getAnchorItem = function () {
	return {};
};
ViewAttachmentBehavior.prototype.getAnchorOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
ViewAttachmentBehavior.prototype.getApiName = function () {
	return '';
};
ViewAttachmentBehavior.prototype.getBubbleParent = function () {
	return true;
};
ViewAttachmentBehavior.prototype.getDamping = function () {
	return 0;
};
ViewAttachmentBehavior.prototype.getDistance = function () {
	return 0;
};
ViewAttachmentBehavior.prototype.getFrequency = function () {
	return 0;
};
ViewAttachmentBehavior.prototype.getItem = function () {
	return {};
};
ViewAttachmentBehavior.prototype.getItemOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
ViewAttachmentBehavior.prototype.removeEventListener = function () {
};
ViewAttachmentBehavior.prototype.setAnchorItem = function () {
};
ViewAttachmentBehavior.prototype.setAnchorOffset = function () {
};
ViewAttachmentBehavior.prototype.setBubbleParent = function () {
};
ViewAttachmentBehavior.prototype.setDamping = function () {
};
ViewAttachmentBehavior.prototype.setDistance = function () {
};
ViewAttachmentBehavior.prototype.setFrequency = function () {
};
ViewAttachmentBehavior.prototype.setItem = function () {
};
ViewAttachmentBehavior.prototype.setItemOffset = function () {
};
module.exports = function (properties) {
	return new ViewAttachmentBehavior(properties);
};