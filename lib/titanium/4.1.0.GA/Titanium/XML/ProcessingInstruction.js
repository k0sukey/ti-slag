function ProcessingInstruction(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.XML.ProcessingInstruction';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.data = properties.data || '';
	this.target = properties.target || '';
	return this;
}
ProcessingInstruction.prototype.addEventListener = function () {
};
ProcessingInstruction.prototype.removeEventListener = function () {
};
ProcessingInstruction.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ProcessingInstruction.prototype.fireEvent = function () {
};
ProcessingInstruction.prototype.getBubbleParent = function () {
	return true;
};
ProcessingInstruction.prototype.setBubbleParent = function () {
};
ProcessingInstruction.prototype.getApiName = function () {
	return '';
};
ProcessingInstruction.prototype.getLifecycleContainer = function () {
	return {};
};
ProcessingInstruction.prototype.setLifecycleContainer = function () {
};
ProcessingInstruction.prototype.getData = function () {
	return '';
};
ProcessingInstruction.prototype.setData = function () {
};
ProcessingInstruction.prototype.getTarget = function () {
	return '';
};
module.exports = function (properties) {
	return new ProcessingInstruction(properties);
};