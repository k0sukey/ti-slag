function ViewAttachmentBehavior(properties) {
	properties = properties || {};
	this.anchorItem = properties.anchorItem || undefined;
	this.anchorOffset = properties.anchorOffset || undefined;
	this.apiName = 'Titanium.UI.iOS.ViewAttachmentBehavior';
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
	return this.anchorItem;
};
ViewAttachmentBehavior.prototype.getAnchorOffset = function () {
	return this.anchorOffset;
};
ViewAttachmentBehavior.prototype.getApiName = function () {
	return this.apiName;
};
ViewAttachmentBehavior.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ViewAttachmentBehavior.prototype.getDamping = function () {
	return this.damping;
};
ViewAttachmentBehavior.prototype.getDistance = function () {
	return this.distance;
};
ViewAttachmentBehavior.prototype.getFrequency = function () {
	return this.frequency;
};
ViewAttachmentBehavior.prototype.getItem = function () {
	return this.item;
};
ViewAttachmentBehavior.prototype.getItemOffset = function () {
	return this.itemOffset;
};
ViewAttachmentBehavior.prototype.removeEventListener = function () {
};
ViewAttachmentBehavior.prototype.setAnchorItem = function (property) {
	this.anchorItem = property;
};
ViewAttachmentBehavior.prototype.setAnchorOffset = function (property) {
	this.anchorOffset = property;
};
ViewAttachmentBehavior.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
ViewAttachmentBehavior.prototype.setDamping = function (property) {
	this.damping = property;
};
ViewAttachmentBehavior.prototype.setDistance = function (property) {
	this.distance = property;
};
ViewAttachmentBehavior.prototype.setFrequency = function (property) {
	this.frequency = property;
};
ViewAttachmentBehavior.prototype.setItem = function (property) {
	this.item = property;
};
ViewAttachmentBehavior.prototype.setItemOffset = function (property) {
	this.itemOffset = property;
};
module.exports = function (properties) {
	return new ViewAttachmentBehavior(properties);
};