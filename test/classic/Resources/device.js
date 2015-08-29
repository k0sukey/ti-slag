exports.iPhone5s = {
	name: Ti.Platform.name,
	osname: Ti.Platform.osname,
	model: Ti.Platform.model,
	version: Ti.Platform.version,
	architecture: Ti.Platform.architecture,
	ostype: Ti.Platform.ostype,
	displayCaps: {
		density: Ti.Platform.displayCaps.density,
		dpi: Ti.Platform.displayCaps.dpi,
		platformWidth: Ti.Platform.displayCaps.platformWidth,
		platformHeight: Ti.Platform.displayCaps.platformHeight
	}
};