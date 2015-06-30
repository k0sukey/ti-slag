function titleAttributesParams(properties) {
	properties = properties || {};
	this.color = properties.color || undefined;
	this.font = properties.font || undefined;
	this.shadow = properties.shadow || undefined;
	return this;
}
module.exports = function (properties) {
	return new titleAttributesParams(properties);
};