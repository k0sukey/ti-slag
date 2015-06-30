exports.getLabel = function(){
	return Ti.UI.createLabel({
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		text: 'Hello, world',
		font: {
			fontSize: 20,
			fontWeight: 'bold'
		}
	});
};