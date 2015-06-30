var win = Ti.UI.createWindow({
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	width: Ti.UI.FILL,
	height: Ti.UI.FILL,
	backgroundColor: '#ffffff',
	title: 'Window'
});

win.applyProperties({
	backgroundColor: '#f00'
});
Ti.API.info(win.backgroundColor);
win.setBackgroundColor('#0f0');

win.backgroundColor = '#00f';

var view = require('view');
console.log(view);
win.add(view.getView());

var label = require('label');
console.log(label);
win.add(label.getLabel());

var image = require('image');
console.log(image);
win.add(new image());

win.open();