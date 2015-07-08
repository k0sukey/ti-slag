function ListItem(properties) {
	properties = properties || {};
	this.accessoryType = properties.accessoryType || 0;
	this.apiName = 'Ti.UI.ListItem';
	this.backgroundColor = properties.backgroundColor || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.canEdit = properties.canEdit || true;
	this.canMove = properties.canMove || true;
	this.color = properties.color || '';
	this.font = properties.font || {};
	this.height = properties.height || 0;
	this.image = properties.image || '';
	this.itemId = properties.itemId || '';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.searchableText = properties.searchableText || '';
	this.selectedBackgroundColor = properties.selectedBackgroundColor || '';
	this.selectedBackgroundGradient = properties.selectedBackgroundGradient || {};
	this.selectedBackgroundImage = properties.selectedBackgroundImage || '';
	this.selectionStyle = properties.selectionStyle || 0;
	this.subtitle = properties.subtitle || '';
	this.title = properties.title || '';
	return this;
}
ListItem.prototype.getApiName = function () {
	return '';
};
ListItem.prototype.getLifecycleContainer = function () {
	return {};
};
ListItem.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new ListItem(properties);
};