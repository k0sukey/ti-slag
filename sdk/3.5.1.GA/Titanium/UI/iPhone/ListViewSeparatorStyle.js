function ListViewSeparatorStyle(properties) {
	properties = properties || {};

	this.NONE = properties.NONE || undefined;
	this.SINGLE_LINE = properties.SINGLE_LINE || undefined;
	this.apiName = 'Titanium.UI.iPhone.ListViewSeparatorStyle';
	this.bubbleParent = properties.bubbleParent || undefined;

	return this;
}

ListViewSeparatorStyle.prototype.addEventListener = function(){};

ListViewSeparatorStyle.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

ListViewSeparatorStyle.prototype.fireEvent = function(){};

ListViewSeparatorStyle.prototype.getApiName = function(){ return this.apiName; };

ListViewSeparatorStyle.prototype.getBubbleParent = function(){ return this.bubbleParent; };

ListViewSeparatorStyle.prototype.removeEventListener = function(){};

ListViewSeparatorStyle.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

module.exports = function(properties){ return new ListViewSeparatorStyle(properties); };