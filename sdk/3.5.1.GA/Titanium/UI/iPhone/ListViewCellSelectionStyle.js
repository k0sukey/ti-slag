function ListViewCellSelectionStyle(properties) {
	properties = properties || {};

	this.BLUE = properties.BLUE || undefined;
	this.GRAY = properties.GRAY || undefined;
	this.NONE = properties.NONE || undefined;
	this.apiName = 'Titanium.UI.iPhone.ListViewCellSelectionStyle';

	return this;
}

ListViewCellSelectionStyle.prototype.getApiName = function(){ return this.apiName; };

module.exports = function(properties){ return new ListViewCellSelectionStyle(properties); };