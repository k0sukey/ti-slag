function TableViewScrollPosition(properties) {
	properties = properties || {};

	this.BOTTOM = properties.BOTTOM || undefined;
	this.MIDDLE = properties.MIDDLE || undefined;
	this.NONE = properties.NONE || undefined;
	this.TOP = properties.TOP || undefined;
	this.apiName = 'Titanium.UI.iPhone.TableViewScrollPosition';
	this.bubbleParent = properties.bubbleParent || undefined;

	return this;
}

TableViewScrollPosition.prototype.addEventListener = function(){};

TableViewScrollPosition.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

TableViewScrollPosition.prototype.fireEvent = function(){};

TableViewScrollPosition.prototype.getApiName = function(){ return this.apiName; };

TableViewScrollPosition.prototype.getBubbleParent = function(){ return this.bubbleParent; };

TableViewScrollPosition.prototype.removeEventListener = function(){};

TableViewScrollPosition.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

module.exports = function(properties){ return new TableViewScrollPosition(properties); };