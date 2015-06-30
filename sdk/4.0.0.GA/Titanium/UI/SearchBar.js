function SearchBar(properties) {
	properties = properties || {};

	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.SearchBar';
	this.autocapitalization = properties.autocapitalization || undefined;
	this.autocorrect = properties.autocorrect || undefined;
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
	this.barColor = properties.barColor || undefined;
	this.borderColor = properties.borderColor || undefined;
	this.borderRadius = properties.borderRadius || undefined;
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.focusable = properties.focusable || undefined;
	this.height = properties.height || undefined;
	this.hintText = properties.hintText || undefined;
	this.hinttextid = properties.hinttextid || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.keyboardType = properties.keyboardType || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.prompt = properties.prompt || undefined;
	this.promptid = properties.promptid || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.showBookmark = properties.showBookmark || undefined;
	this.showCancel = properties.showCancel || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.value = properties.value || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;

	return this;
}

SearchBar.prototype.addEventListener = function(){};

SearchBar.prototype.animate = function(){};

SearchBar.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

SearchBar.prototype.blur = function(){};

SearchBar.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

SearchBar.prototype.finishLayout = function(){};

SearchBar.prototype.fireEvent = function(){};

SearchBar.prototype.focus = function(){};

SearchBar.prototype.getAccessibilityHidden = function(){ return this.accessibilityHidden; };

SearchBar.prototype.getAccessibilityHint = function(){ return this.accessibilityHint; };

SearchBar.prototype.getAccessibilityLabel = function(){ return this.accessibilityLabel; };

SearchBar.prototype.getAccessibilityValue = function(){ return this.accessibilityValue; };

SearchBar.prototype.getAnchorPoint = function(){ return this.anchorPoint; };

SearchBar.prototype.getAnimatedCenter = function(){ return this.animatedCenter; };

SearchBar.prototype.getApiName = function(){ return this.apiName; };

SearchBar.prototype.getAutocapitalization = function(){ return this.autocapitalization; };

SearchBar.prototype.getAutocorrect = function(){ return this.autocorrect; };

SearchBar.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

SearchBar.prototype.getBackgroundDisabledColor = function(){ return this.backgroundDisabledColor; };

SearchBar.prototype.getBackgroundDisabledImage = function(){ return this.backgroundDisabledImage; };

SearchBar.prototype.getBackgroundFocusedColor = function(){ return this.backgroundFocusedColor; };

SearchBar.prototype.getBackgroundFocusedImage = function(){ return this.backgroundFocusedImage; };

SearchBar.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

SearchBar.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

SearchBar.prototype.getBackgroundLeftCap = function(){ return this.backgroundLeftCap; };

SearchBar.prototype.getBackgroundRepeat = function(){ return this.backgroundRepeat; };

SearchBar.prototype.getBackgroundSelectedColor = function(){ return this.backgroundSelectedColor; };

SearchBar.prototype.getBackgroundSelectedImage = function(){ return this.backgroundSelectedImage; };

SearchBar.prototype.getBackgroundTopCap = function(){ return this.backgroundTopCap; };

SearchBar.prototype.getBarColor = function(){ return this.barColor; };

SearchBar.prototype.getBorderColor = function(){ return this.borderColor; };

SearchBar.prototype.getBorderRadius = function(){ return this.borderRadius; };

SearchBar.prototype.getBorderWidth = function(){ return this.borderWidth; };

SearchBar.prototype.getBottom = function(){ return this.bottom; };

SearchBar.prototype.getBubbleParent = function(){ return this.bubbleParent; };

SearchBar.prototype.getCenter = function(){ return this.center; };

SearchBar.prototype.getChildren = function(){ return this.children; };

SearchBar.prototype.getClipMode = function(){ return this.clipMode; };

SearchBar.prototype.getFocusable = function(){ return this.focusable; };

SearchBar.prototype.getHeight = function(){ return this.height; };

SearchBar.prototype.getHintText = function(){ return this.hintText; };

SearchBar.prototype.getHinttextid = function(){ return this.hinttextid; };

SearchBar.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

SearchBar.prototype.getKeepScreenOn = function(){ return this.keepScreenOn; };

SearchBar.prototype.getKeyboardType = function(){ return this.keyboardType; };

SearchBar.prototype.getLayout = function(){ return this.layout; };

SearchBar.prototype.getLeft = function(){ return this.left; };

SearchBar.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

SearchBar.prototype.getOpacity = function(){ return this.opacity; };

SearchBar.prototype.getOverrideCurrentAnimation = function(){ return this.overrideCurrentAnimation; };

SearchBar.prototype.getPrompt = function(){ return this.prompt; };

SearchBar.prototype.getPromptid = function(){ return this.promptid; };

SearchBar.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

SearchBar.prototype.getRect = function(){ return this.rect; };

SearchBar.prototype.getRight = function(){ return this.right; };

SearchBar.prototype.getShowBookmark = function(){ return this.showBookmark; };

SearchBar.prototype.getShowCancel = function(){ return this.showCancel; };

SearchBar.prototype.getSize = function(){ return this.size; };

SearchBar.prototype.getSoftKeyboardOnFocus = function(){ return this.softKeyboardOnFocus; };

SearchBar.prototype.getTintColor = function(){ return this.tintColor; };

SearchBar.prototype.getTop = function(){ return this.top; };

SearchBar.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

SearchBar.prototype.getTransform = function(){ return this.transform; };

SearchBar.prototype.getValue = function(){ return this.value; };

SearchBar.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

SearchBar.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

SearchBar.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

SearchBar.prototype.getVisible = function(){ return this.visible; };

SearchBar.prototype.getWidth = function(){ return this.width; };

SearchBar.prototype.getZIndex = function(){ return this.zIndex; };

SearchBar.prototype.hide = function(){};

SearchBar.prototype.remove = function(){};

SearchBar.prototype.removeEventListener = function(){};

SearchBar.prototype.setAccessibilityHidden = function(property){ this.accessibilityHidden = property; };

SearchBar.prototype.setAccessibilityHint = function(property){ this.accessibilityHint = property; };

SearchBar.prototype.setAccessibilityLabel = function(property){ this.accessibilityLabel = property; };

SearchBar.prototype.setAccessibilityValue = function(property){ this.accessibilityValue = property; };

SearchBar.prototype.setAnchorPoint = function(property){ this.anchorPoint = property; };

SearchBar.prototype.setAutocapitalization = function(property){ this.autocapitalization = property; };

SearchBar.prototype.setAutocorrect = function(property){ this.autocorrect = property; };

SearchBar.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

SearchBar.prototype.setBackgroundDisabledColor = function(property){ this.backgroundDisabledColor = property; };

SearchBar.prototype.setBackgroundDisabledImage = function(property){ this.backgroundDisabledImage = property; };

SearchBar.prototype.setBackgroundFocusedColor = function(property){ this.backgroundFocusedColor = property; };

SearchBar.prototype.setBackgroundFocusedImage = function(property){ this.backgroundFocusedImage = property; };

SearchBar.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

SearchBar.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

SearchBar.prototype.setBackgroundLeftCap = function(property){ this.backgroundLeftCap = property; };

SearchBar.prototype.setBackgroundRepeat = function(property){ this.backgroundRepeat = property; };

SearchBar.prototype.setBackgroundSelectedColor = function(property){ this.backgroundSelectedColor = property; };

SearchBar.prototype.setBackgroundSelectedImage = function(property){ this.backgroundSelectedImage = property; };

SearchBar.prototype.setBackgroundTopCap = function(property){ this.backgroundTopCap = property; };

SearchBar.prototype.setBarColor = function(property){ this.barColor = property; };

SearchBar.prototype.setBorderColor = function(property){ this.borderColor = property; };

SearchBar.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

SearchBar.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

SearchBar.prototype.setBottom = function(property){ this.bottom = property; };

SearchBar.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

SearchBar.prototype.setCenter = function(property){ this.center = property; };

SearchBar.prototype.setClipMode = function(property){ this.clipMode = property; };

SearchBar.prototype.setFocusable = function(property){ this.focusable = property; };

SearchBar.prototype.setHeight = function(property){ this.height = property; };

SearchBar.prototype.setHintText = function(property){ this.hintText = property; };

SearchBar.prototype.setHinttextid = function(property){ this.hinttextid = property; };

SearchBar.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

SearchBar.prototype.setKeepScreenOn = function(property){ this.keepScreenOn = property; };

SearchBar.prototype.setKeyboardType = function(property){ this.keyboardType = property; };

SearchBar.prototype.setLayout = function(property){ this.layout = property; };

SearchBar.prototype.setLeft = function(property){ this.left = property; };

SearchBar.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

SearchBar.prototype.setOpacity = function(property){ this.opacity = property; };

SearchBar.prototype.setPrompt = function(property){ this.prompt = property; };

SearchBar.prototype.setPromptid = function(property){ this.promptid = property; };

SearchBar.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

SearchBar.prototype.setRight = function(property){ this.right = property; };

SearchBar.prototype.setShowBookmark = function(property){ this.showBookmark = property; };

SearchBar.prototype.setShowCancel = function(property){ this.showCancel = property; };

SearchBar.prototype.setSoftKeyboardOnFocus = function(property){ this.softKeyboardOnFocus = property; };

SearchBar.prototype.setTintColor = function(property){ this.tintColor = property; };

SearchBar.prototype.setTop = function(property){ this.top = property; };

SearchBar.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

SearchBar.prototype.setTransform = function(property){ this.transform = property; };

SearchBar.prototype.setValue = function(property){ this.value = property; };

SearchBar.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

SearchBar.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

SearchBar.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

SearchBar.prototype.setVisible = function(property){ this.visible = property; };

SearchBar.prototype.setWidth = function(property){ this.width = property; };

SearchBar.prototype.setZIndex = function(property){ this.zIndex = property; };

SearchBar.prototype.show = function(){};

SearchBar.prototype.startLayout = function(){};

SearchBar.prototype.toImage = function(){ return {}; };

SearchBar.prototype.updateLayout = function(){};

module.exports = function(properties){ return new SearchBar(properties); };