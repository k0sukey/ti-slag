function TableViewCellSelectionStyle(properties) {
	properties = properties || {};

	this.BLUE = properties.BLUE || undefined;
	this.GRAY = properties.GRAY || undefined;
	this.NONE = properties.NONE || undefined;
	this.apiName = 'Titanium.UI.iPhone.TableViewCellSelectionStyle';
	this.bubbleParent = properties.bubbleParent || undefined;

	return this;
}

TableViewCellSelectionStyle.prototype.addEventListener = function(){};

TableViewCellSelectionStyle.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

TableViewCellSelectionStyle.prototype.fireEvent = function(){};

TableViewCellSelectionStyle.prototype.getApiName = function(){ return this.apiName; };

TableViewCellSelectionStyle.prototype.getBubbleParent = function(){ return this.bubbleParent; };

TableViewCellSelectionStyle.prototype.removeEventListener = function(){};

TableViewCellSelectionStyle.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

module.exports = function(properties){ return new TableViewCellSelectionStyle(properties); };