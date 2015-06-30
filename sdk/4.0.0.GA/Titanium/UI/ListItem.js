function ListItem(properties) {
	properties = properties || {};

	this.accessoryType = properties.accessoryType || undefined;
	this.apiName = 'Titanium.UI.ListItem';
	this.backgroundColor = properties.backgroundColor || undefined;
	this.backgroundGradient = properties.backgroundGradient || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.canEdit = properties.canEdit || undefined;
	this.canMove = properties.canMove || undefined;
	this.color = properties.color || undefined;
	this.font = properties.font || undefined;
	this.height = properties.height || undefined;
	this.image = properties.image || undefined;
	this.itemId = properties.itemId || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.searchableText = properties.searchableText || undefined;
	this.selectedBackgroundColor = properties.selectedBackgroundColor || undefined;
	this.selectedBackgroundGradient = properties.selectedBackgroundGradient || undefined;
	this.selectedBackgroundImage = properties.selectedBackgroundImage || undefined;
	this.selectionStyle = properties.selectionStyle || undefined;
	this.subtitle = properties.subtitle || undefined;
	this.title = properties.title || undefined;

	return this;
}

ListItem.prototype.getApiName = function(){ return this.apiName; };

ListItem.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

ListItem.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

module.exports = function(properties){ return new ListItem(properties); };