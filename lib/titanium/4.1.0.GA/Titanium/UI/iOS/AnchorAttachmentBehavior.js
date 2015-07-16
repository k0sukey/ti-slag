function AnchorAttachmentBehavior(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iOS.AnchorAttachmentBehavior';
	this.anchor = properties.anchor || {
		x: 0,
		y: 0
	};
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
AnchorAttachmentBehavior.prototype.removeEventListener = function () {
};
AnchorAttachmentBehavior.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
AnchorAttachmentBehavior.prototype.fireEvent = function () {
};
AnchorAttachmentBehavior.prototype.getBubbleParent = function () {
	return true;
};
AnchorAttachmentBehavior.prototype.setBubbleParent = function () {
};
AnchorAttachmentBehavior.prototype.getApiName = function () {
	return '';
};
AnchorAttachmentBehavior.prototype.getAnchor = function () {
	return {
		x: 0,
		y: 0
	};
};
AnchorAttachmentBehavior.prototype.setAnchor = function () {
};
AnchorAttachmentBehavior.prototype.getDamping = function () {
	return 0;
};
AnchorAttachmentBehavior.prototype.setDamping = function () {
};
AnchorAttachmentBehavior.prototype.getDistance = function () {
	return 0;
};
AnchorAttachmentBehavior.prototype.setDistance = function () {
};
AnchorAttachmentBehavior.prototype.getFrequency = function () {
	return 0;
};
AnchorAttachmentBehavior.prototype.setFrequency = function () {
};
AnchorAttachmentBehavior.prototype.getItem = function () {
	return {};
};
AnchorAttachmentBehavior.prototype.setItem = function () {
};
AnchorAttachmentBehavior.prototype.getOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
AnchorAttachmentBehavior.prototype.setOffset = function () {
};
module.exports = function (properties) {
	return new AnchorAttachmentBehavior(properties);
};