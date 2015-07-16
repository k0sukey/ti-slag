function ListItem(properties) {
	properties = properties || {};
	this.apiName = 'Ti.UI.ListItem';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.itemId = properties.itemId || '';
	this.accessoryType = properties.accessoryType || 0;
	this.backgroundColor = properties.backgroundColor || '';
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.selectedBackgroundColor = properties.selectedBackgroundColor || '';
	this.selectedBackgroundImage = properties.selectedBackgroundImage || '';
	this.selectedBackgroundGradient = properties.selectedBackgroundGradient || {};
	this.canEdit = properties.canEdit || true;
	this.canMove = properties.canMove || true;
	this.editActions = properties.editActions || [];
	this.searchableText = properties.searchableText || '';
	this.color = properties.color || '';
	this.font = properties.font || {};
	this.height = properties.height || 0;
	this.image = properties.image || '';
	this.title = properties.title || '';
	this.selectionStyle = properties.selectionStyle || 0;
	this.subtitle = properties.subtitle || '';
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
ListItem.prototype.getEditActions = function () {
	return [];
};
ListItem.prototype.setEditActions = function () {
};
module.exports = function (properties) {
	return new ListItem(properties);
};