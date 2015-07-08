function AnchorAttachmentBehavior(properties) {
	properties = properties || {};
	this.anchor = properties.anchor || {
		x: 0,
		y: 0
	};
	this.apiName = 'Ti.UI.iOS.AnchorAttachmentBehavior';
	this.bubbleParent = properties.bubbleParent || true;
	this.damping = properties.damping || 0;
	this.distance = properties.distance || 0;
	this.frequency = properties.frequency || 0;
	this.item = properties.item || {};
	this.offset = properties.offset || {
		x: 0,
		y: 0
	};
	return this;
}
AnchorAttachmentBehavior.prototype.addEventListener = function () {
};
AnchorAttachmentBehavior.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
AnchorAttachmentBehavior.prototype.fireEvent = function () {
};
AnchorAttachmentBehavior.prototype.getAnchor = function () {
	return {
		x: 0,
		y: 0
	};
};
AnchorAttachmentBehavior.prototype.getApiName = function () {
	return '';
};
AnchorAttachmentBehavior.prototype.getBubbleParent = function () {
	return true;
};
AnchorAttachmentBehavior.prototype.getDamping = function () {
	return 0;
};
AnchorAttachmentBehavior.prototype.getDistance = function () {
	return 0;
};
AnchorAttachmentBehavior.prototype.getFrequency = function () {
	return 0;
};
AnchorAttachmentBehavior.prototype.getItem = function () {
	return {};
};
AnchorAttachmentBehavior.prototype.getOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
AnchorAttachmentBehavior.prototype.removeEventListener = function () {
};
AnchorAttachmentBehavior.prototype.setAnchor = function () {
};
AnchorAttachmentBehavior.prototype.setBubbleParent = function () {
};
AnchorAttachmentBehavior.prototype.setDamping = function () {
};
AnchorAttachmentBehavior.prototype.setDistance = function () {
};
AnchorAttachmentBehavior.prototype.setFrequency = function () {
};
AnchorAttachmentBehavior.prototype.setItem = function () {
};
AnchorAttachmentBehavior.prototype.setOffset = function () {
};
module.exports = function (properties) {
	return new AnchorAttachmentBehavior(properties);
};