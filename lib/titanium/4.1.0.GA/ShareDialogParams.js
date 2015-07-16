function ShareDialogParams(properties) {
	properties = properties || {};
	this.caption = properties.caption || '';
	this.description = properties.description || '';
	this.link = properties.link || '';
	this.name = properties.name || '';
	this.picture = properties.picture || '';
	return this;
}
module.exports = function (properties) {
	return new ShareDialogParams(properties);
};