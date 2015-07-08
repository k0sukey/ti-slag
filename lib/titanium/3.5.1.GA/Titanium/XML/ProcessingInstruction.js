function ProcessingInstruction(properties) {
	properties = properties || {};
	this.apiName = 'Ti.XML.ProcessingInstruction';
	this.bubbleParent = properties.bubbleParent || true;
	this.data = properties.data || '';
	this.target = properties.target || '';
	return this;
}
ProcessingInstruction.prototype.addEventListener = function () {
};
ProcessingInstruction.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ProcessingInstruction.prototype.fireEvent = function () {
};
ProcessingInstruction.prototype.getApiName = function () {
	return '';
};
ProcessingInstruction.prototype.getBubbleParent = function () {
	return true;
};
ProcessingInstruction.prototype.getData = function () {
	return '';
};
ProcessingInstruction.prototype.getTarget = function () {
	return '';
};
ProcessingInstruction.prototype.removeEventListener = function () {
};
ProcessingInstruction.prototype.setBubbleParent = function () {
};
ProcessingInstruction.prototype.setData = function () {
};
module.exports = function (properties) {
	return new ProcessingInstruction(properties);
};