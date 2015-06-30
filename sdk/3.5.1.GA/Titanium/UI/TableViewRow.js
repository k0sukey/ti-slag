function TableViewRow(properties) {
	properties = properties || {};

	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.TableViewRow';
	this.backgroundColor = properties.backgroundColor || undefined;
	this.backgroundDisabledColor = properties.backgroundDisabledColor || undefined;
	this.backgroundDisabledImage = properties.backgroundDisabledImage || undefined;
	this.backgroundFocusedColor = properties.backgroundFocusedColor || undefined;
	this.backgroundFocusedImage = properties.backgroundFocusedImage || undefined;
	this.backgroundGradient = properties.backgroundGradient || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.backgroundLeftCap = properties.backgroundLeftCap || undefined;
	this.backgroundRepeat = properties.backgroundRepeat || undefined;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || undefined;
	this.backgroundSelectedImage = properties.backgroundSelectedImage || undefined;
	this.backgroundTopCap = properties.backgroundTopCap || undefined;
	this.borderColor = properties.borderColor || undefined;
	this.borderRadius = properties.borderRadius || undefined;
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.className = properties.className || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.color = properties.color || undefined;
	this.editable = properties.editable || undefined;
	this.focusable = properties.focusable || undefined;
	this.font = properties.font || undefined;
	this.hasCheck = properties.hasCheck || undefined;
	this.hasChild = properties.hasChild || undefined;
	this.hasDetail = properties.hasDetail || undefined;
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.indentionLevel = properties.indentionLevel || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.leftImage = properties.leftImage || undefined;
	this.moveable = properties.moveable || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.rightImage = properties.rightImage || undefined;
	this.selectedBackgroundColor = properties.selectedBackgroundColor || undefined;
	this.selectedBackgroundImage = properties.selectedBackgroundImage || undefined;
	this.selectedColor = properties.selectedColor || undefined;
	this.selectionStyle = properties.selectionStyle || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.title = properties.title || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;

	return this;
}

TableViewRow.prototype.add = function(){};

TableViewRow.prototype.addEventListener = function(){};

TableViewRow.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

TableViewRow.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

TableViewRow.prototype.finishLayout = function(){};

TableViewRow.prototype.fireEvent = function(){};

TableViewRow.prototype.getAccessibilityHidden = function(){ return this.accessibilityHidden; };

TableViewRow.prototype.getAccessibilityHint = function(){ return this.accessibilityHint; };

TableViewRow.prototype.getAccessibilityLabel = function(){ return this.accessibilityLabel; };

TableViewRow.prototype.getAccessibilityValue = function(){ return this.accessibilityValue; };

TableViewRow.prototype.getAnchorPoint = function(){ return this.anchorPoint; };

TableViewRow.prototype.getAnimatedCenter = function(){ return this.animatedCenter; };

TableViewRow.prototype.getApiName = function(){ return this.apiName; };

TableViewRow.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

TableViewRow.prototype.getBackgroundDisabledColor = function(){ return this.backgroundDisabledColor; };

TableViewRow.prototype.getBackgroundDisabledImage = function(){ return this.backgroundDisabledImage; };

TableViewRow.prototype.getBackgroundFocusedColor = function(){ return this.backgroundFocusedColor; };

TableViewRow.prototype.getBackgroundFocusedImage = function(){ return this.backgroundFocusedImage; };

TableViewRow.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

TableViewRow.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

TableViewRow.prototype.getBackgroundLeftCap = function(){ return this.backgroundLeftCap; };

TableViewRow.prototype.getBackgroundRepeat = function(){ return this.backgroundRepeat; };

TableViewRow.prototype.getBackgroundSelectedColor = function(){ return this.backgroundSelectedColor; };

TableViewRow.prototype.getBackgroundSelectedImage = function(){ return this.backgroundSelectedImage; };

TableViewRow.prototype.getBackgroundTopCap = function(){ return this.backgroundTopCap; };

TableViewRow.prototype.getBorderColor = function(){ return this.borderColor; };

TableViewRow.prototype.getBorderRadius = function(){ return this.borderRadius; };

TableViewRow.prototype.getBorderWidth = function(){ return this.borderWidth; };

TableViewRow.prototype.getBottom = function(){ return this.bottom; };

TableViewRow.prototype.getBubbleParent = function(){ return this.bubbleParent; };

TableViewRow.prototype.getCenter = function(){ return this.center; };

TableViewRow.prototype.getChildren = function(){ return this.children; };

TableViewRow.prototype.getClassName = function(){ return this.className; };

TableViewRow.prototype.getClipMode = function(){ return this.clipMode; };

TableViewRow.prototype.getColor = function(){ return this.color; };

TableViewRow.prototype.getEditable = function(){ return this.editable; };

TableViewRow.prototype.getFocusable = function(){ return this.focusable; };

TableViewRow.prototype.getHasCheck = function(){ return this.hasCheck; };

TableViewRow.prototype.getHasChild = function(){ return this.hasChild; };

TableViewRow.prototype.getHasDetail = function(){ return this.hasDetail; };

TableViewRow.prototype.getHeight = function(){ return this.height; };

TableViewRow.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

TableViewRow.prototype.getIndentionLevel = function(){ return this.indentionLevel; };

TableViewRow.prototype.getKeepScreenOn = function(){ return this.keepScreenOn; };

TableViewRow.prototype.getLayout = function(){ return this.layout; };

TableViewRow.prototype.getLeft = function(){ return this.left; };

TableViewRow.prototype.getLeftImage = function(){ return this.leftImage; };

TableViewRow.prototype.getMoveable = function(){ return this.moveable; };

TableViewRow.prototype.getOpacity = function(){ return this.opacity; };

TableViewRow.prototype.getOverrideCurrentAnimation = function(){ return this.overrideCurrentAnimation; };

TableViewRow.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

TableViewRow.prototype.getRect = function(){ return this.rect; };

TableViewRow.prototype.getRight = function(){ return this.right; };

TableViewRow.prototype.getRightImage = function(){ return this.rightImage; };

TableViewRow.prototype.getSelectedBackgroundColor = function(){ return this.selectedBackgroundColor; };

TableViewRow.prototype.getSelectedBackgroundImage = function(){ return this.selectedBackgroundImage; };

TableViewRow.prototype.getSelectedColor = function(){ return this.selectedColor; };

TableViewRow.prototype.getSelectionStyle = function(){ return this.selectionStyle; };

TableViewRow.prototype.getSize = function(){ return this.size; };

TableViewRow.prototype.getSoftKeyboardOnFocus = function(){ return this.softKeyboardOnFocus; };

TableViewRow.prototype.getTintColor = function(){ return this.tintColor; };

TableViewRow.prototype.getTitle = function(){ return this.title; };

TableViewRow.prototype.getTop = function(){ return this.top; };

TableViewRow.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

TableViewRow.prototype.getTransform = function(){ return this.transform; };

TableViewRow.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

TableViewRow.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

TableViewRow.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

TableViewRow.prototype.getVisible = function(){ return this.visible; };

TableViewRow.prototype.getWidth = function(){ return this.width; };

TableViewRow.prototype.getZIndex = function(){ return this.zIndex; };

TableViewRow.prototype.hide = function(){};

TableViewRow.prototype.remove = function(){};

TableViewRow.prototype.removeAllChildren = function(){};

TableViewRow.prototype.removeEventListener = function(){};

TableViewRow.prototype.setAccessibilityHidden = function(property){ this.accessibilityHidden = property; };

TableViewRow.prototype.setAccessibilityHint = function(property){ this.accessibilityHint = property; };

TableViewRow.prototype.setAccessibilityLabel = function(property){ this.accessibilityLabel = property; };

TableViewRow.prototype.setAccessibilityValue = function(property){ this.accessibilityValue = property; };

TableViewRow.prototype.setAnchorPoint = function(property){ this.anchorPoint = property; };

TableViewRow.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

TableViewRow.prototype.setBackgroundDisabledColor = function(property){ this.backgroundDisabledColor = property; };

TableViewRow.prototype.setBackgroundDisabledImage = function(property){ this.backgroundDisabledImage = property; };

TableViewRow.prototype.setBackgroundFocusedColor = function(property){ this.backgroundFocusedColor = property; };

TableViewRow.prototype.setBackgroundFocusedImage = function(property){ this.backgroundFocusedImage = property; };

TableViewRow.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

TableViewRow.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

TableViewRow.prototype.setBackgroundLeftCap = function(property){ this.backgroundLeftCap = property; };

TableViewRow.prototype.setBackgroundRepeat = function(property){ this.backgroundRepeat = property; };

TableViewRow.prototype.setBackgroundSelectedColor = function(property){ this.backgroundSelectedColor = property; };

TableViewRow.prototype.setBackgroundSelectedImage = function(property){ this.backgroundSelectedImage = property; };

TableViewRow.prototype.setBackgroundTopCap = function(property){ this.backgroundTopCap = property; };

TableViewRow.prototype.setBorderColor = function(property){ this.borderColor = property; };

TableViewRow.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

TableViewRow.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

TableViewRow.prototype.setBottom = function(property){ this.bottom = property; };

TableViewRow.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

TableViewRow.prototype.setCenter = function(property){ this.center = property; };

TableViewRow.prototype.setClassName = function(property){ this.className = property; };

TableViewRow.prototype.setClipMode = function(property){ this.clipMode = property; };

TableViewRow.prototype.setColor = function(property){ this.color = property; };

TableViewRow.prototype.setEditable = function(property){ this.editable = property; };

TableViewRow.prototype.setFocusable = function(property){ this.focusable = property; };

TableViewRow.prototype.setFont = function(property){ this.font = property; };

TableViewRow.prototype.setHasCheck = function(property){ this.hasCheck = property; };

TableViewRow.prototype.setHasChild = function(property){ this.hasChild = property; };

TableViewRow.prototype.setHasDetail = function(property){ this.hasDetail = property; };

TableViewRow.prototype.setHeight = function(property){ this.height = property; };

TableViewRow.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

TableViewRow.prototype.setIndentionLevel = function(property){ this.indentionLevel = property; };

TableViewRow.prototype.setKeepScreenOn = function(property){ this.keepScreenOn = property; };

TableViewRow.prototype.setLayout = function(property){ this.layout = property; };

TableViewRow.prototype.setLeft = function(property){ this.left = property; };

TableViewRow.prototype.setLeftImage = function(property){ this.leftImage = property; };

TableViewRow.prototype.setMoveable = function(property){ this.moveable = property; };

TableViewRow.prototype.setOpacity = function(property){ this.opacity = property; };

TableViewRow.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

TableViewRow.prototype.setRight = function(property){ this.right = property; };

TableViewRow.prototype.setRightImage = function(property){ this.rightImage = property; };

TableViewRow.prototype.setSelectedBackgroundColor = function(property){ this.selectedBackgroundColor = property; };

TableViewRow.prototype.setSelectedBackgroundImage = function(property){ this.selectedBackgroundImage = property; };

TableViewRow.prototype.setSelectedColor = function(property){ this.selectedColor = property; };

TableViewRow.prototype.setSelectionStyle = function(property){ this.selectionStyle = property; };

TableViewRow.prototype.setSoftKeyboardOnFocus = function(property){ this.softKeyboardOnFocus = property; };

TableViewRow.prototype.setTintColor = function(property){ this.tintColor = property; };

TableViewRow.prototype.setTitle = function(property){ this.title = property; };

TableViewRow.prototype.setTop = function(property){ this.top = property; };

TableViewRow.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

TableViewRow.prototype.setTransform = function(property){ this.transform = property; };

TableViewRow.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

TableViewRow.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

TableViewRow.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

TableViewRow.prototype.setVisible = function(property){ this.visible = property; };

TableViewRow.prototype.setWidth = function(property){ this.width = property; };

TableViewRow.prototype.setZIndex = function(property){ this.zIndex = property; };

TableViewRow.prototype.show = function(){};

TableViewRow.prototype.startLayout = function(){};

TableViewRow.prototype.toImage = function(){ return {}; };

TableViewRow.prototype.updateLayout = function(){};

module.exports = function(properties){ return new TableViewRow(properties); };