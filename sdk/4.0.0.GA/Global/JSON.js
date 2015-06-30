function JSON(properties) {
	properties = properties || {};


	return this;
}

JSON.prototype.stringify = function(){ return ''; };

module.exports = function(properties){ return new JSON(properties); };