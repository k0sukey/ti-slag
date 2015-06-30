function AnchorAttachmentBehavior(properties) {
	properties = properties || {};
	this.anchor = properties.anchor || undefined;
	this.apiName = 'Titanium.UI.iOS.AnchorAttachmentBehavior';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.damping = properties.damping || undefined;
	this.distance = properties.distance || undefined;
	this.frequency = properties.frequency || undefined;
	this.item = properties.item || undefined;
	this.offset = properties.offset || undefined;
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
	return this.anchor;
};
AnchorAttachmentBehavior.prototype.getApiName = function () {
	return this.apiName;
};
AnchorAttachmentBehavior.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
AnchorAttachmentBehavior.prototype.getDamping = function () {
	return this.damping;
};
AnchorAttachmentBehavior.prototype.getDistance = function () {
	return this.distance;
};
AnchorAttachmentBehavior.prototype.getFrequency = function () {
	return this.frequency;
};
AnchorAttachmentBehavior.prototype.getItem = function () {
	return this.item;
};
AnchorAttachmentBehavior.prototype.getOffset = function () {
	return this.offset;
};
AnchorAttachmentBehavior.prototype.removeEventListener = function () {
};
AnchorAttachmentBehavior.prototype.setAnchor = function (property) {
	this.anchor = property;
};
AnchorAttachmentBehavior.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
AnchorAttachmentBehavior.prototype.setDamping = function (property) {
	this.damping = property;
};
AnchorAttachmentBehavior.prototype.setDistance = function (property) {
	this.distance = property;
};
AnchorAttachmentBehavior.prototype.setFrequency = function (property) {
	this.frequency = property;
};
AnchorAttachmentBehavior.prototype.setItem = function (property) {
	this.item = property;
};
AnchorAttachmentBehavior.prototype.setOffset = function (property) {
	this.offset = property;
};
module.exports = function (properties) {
	return new AnchorAttachmentBehavior(properties);
};