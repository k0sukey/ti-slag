function titleAttributesParams(properties) {
	properties = properties || {};
	this.color = properties.color || '';
	this.font = properties.font || {};
	this.shadow = properties.shadow || {};
	return this;
}
module.exports = function (properties) {
	return new titleAttributesParams(properties);
};