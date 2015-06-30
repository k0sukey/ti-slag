function ListView(properties) {
	properties = properties || {};

	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.allowsSelection = properties.allowsSelection || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.ListView';
	this.backgroundColor = properties.backgroundColor || undefined;
	this.backgroundDisabledColor = properties.backgroundDisabledColor || undefined;
	this.backgroundDisabledImage = properties.backgroundDisabledImage || undefined;
	this.backgroundFocusedColor = properties.backgroundFocusedColor || undefined;
	this.backgroundFocusedImage = properties.backgroundFocusedImage || undefined;
	this.backgroundGradient = properties.backgroundGradient || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.backgroundLeftCap = properties.backgroundLeftCap || undefined;
	this.backgroundRepeat = properties.backgroundRepeat || undefined;
	this.backgroundTopCap = properties.backgroundTopCap || undefined;
	this.borderColor = properties.borderColor || undefined;
	this.borderRadius = properties.borderRadius || undefined;
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.canScroll = properties.canScroll || undefined;
	this.caseInsensitiveSearch = properties.caseInsensitiveSearch || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.defaultItemTemplate = properties.defaultItemTemplate || undefined;
	this.editing = properties.editing || undefined;
	this.focusable = properties.focusable || undefined;
	this.footerDividersEnabled = properties.footerDividersEnabled || undefined;
	this.footerTitle = properties.footerTitle || undefined;
	this.footerView = properties.footerView || undefined;
	this.headerDividersEnabled = properties.headerDividersEnabled || undefined;
	this.headerTitle = properties.headerTitle || undefined;
	this.headerView = properties.headerView || undefined;
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.keepSectionsInSearch = properties.keepSectionsInSearch || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pruneSectionsOnEdit = properties.pruneSectionsOnEdit || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.pullView = properties.pullView || undefined;
	this.rect = properties.rect || undefined;
	this.refreshControl = properties.refreshControl || undefined;
	this.right = properties.right || undefined;
	this.scrollIndicatorStyle = properties.scrollIndicatorStyle || undefined;
	this.searchText = properties.searchText || undefined;
	this.searchView = properties.searchView || undefined;
	this.sectionCount = properties.sectionCount || undefined;
	this.sectionIndexTitles = properties.sectionIndexTitles || undefined;
	this.sections = properties.sections || undefined;
	this.separatorColor = properties.separatorColor || undefined;
	this.separatorInsets = properties.separatorInsets || undefined;
	this.separatorStyle = properties.separatorStyle || undefined;
	this.showVerticalScrollIndicator = properties.showVerticalScrollIndicator || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.style = properties.style || undefined;
	this.templates = properties.templates || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.willScrollOnStatusTap = properties.willScrollOnStatusTap || undefined;
	this.zIndex = properties.zIndex || undefined;

	return this;
}

ListView.prototype.add = function(){};

ListView.prototype.addEventListener = function(){};

ListView.prototype.animate = function(){};

ListView.prototype.appendSection = function(){};

ListView.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

ListView.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

ListView.prototype.deleteSectionAt = function(){};

ListView.prototype.deselectItem = function(){};

ListView.prototype.finishLayout = function(){};

ListView.prototype.fireEvent = function(){};

ListView.prototype.getAccessibilityHidden = function(){ return this.accessibilityHidden; };

ListView.prototype.getAccessibilityHint = function(){ return this.accessibilityHint; };

ListView.prototype.getAccessibilityLabel = function(){ return this.accessibilityLabel; };

ListView.prototype.getAccessibilityValue = function(){ return this.accessibilityValue; };

ListView.prototype.getAllowsSelection = function(){ return this.allowsSelection; };

ListView.prototype.getAnchorPoint = function(){ return this.anchorPoint; };

ListView.prototype.getAnimatedCenter = function(){ return this.animatedCenter; };

ListView.prototype.getApiName = function(){ return this.apiName; };

ListView.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

ListView.prototype.getBackgroundDisabledColor = function(){ return this.backgroundDisabledColor; };

ListView.prototype.getBackgroundDisabledImage = function(){ return this.backgroundDisabledImage; };

ListView.prototype.getBackgroundFocusedColor = function(){ return this.backgroundFocusedColor; };

ListView.prototype.getBackgroundFocusedImage = function(){ return this.backgroundFocusedImage; };

ListView.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

ListView.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

ListView.prototype.getBackgroundLeftCap = function(){ return this.backgroundLeftCap; };

ListView.prototype.getBackgroundRepeat = function(){ return this.backgroundRepeat; };

ListView.prototype.getBackgroundTopCap = function(){ return this.backgroundTopCap; };

ListView.prototype.getBorderColor = function(){ return this.borderColor; };

ListView.prototype.getBorderRadius = function(){ return this.borderRadius; };

ListView.prototype.getBorderWidth = function(){ return this.borderWidth; };

ListView.prototype.getBottom = function(){ return this.bottom; };

ListView.prototype.getBubbleParent = function(){ return this.bubbleParent; };

ListView.prototype.getCanScroll = function(){ return this.canScroll; };

ListView.prototype.getCaseInsensitiveSearch = function(){ return this.caseInsensitiveSearch; };

ListView.prototype.getCenter = function(){ return this.center; };

ListView.prototype.getChildren = function(){ return this.children; };

ListView.prototype.getClipMode = function(){ return this.clipMode; };

ListView.prototype.getDefaultItemTemplate = function(){ return this.defaultItemTemplate; };

ListView.prototype.getEditing = function(){ return this.editing; };

ListView.prototype.getFocusable = function(){ return this.focusable; };

ListView.prototype.getFooterDividersEnabled = function(){ return this.footerDividersEnabled; };

ListView.prototype.getFooterTitle = function(){ return this.footerTitle; };

ListView.prototype.getFooterView = function(){ return this.footerView; };

ListView.prototype.getHeaderDividersEnabled = function(){ return this.headerDividersEnabled; };

ListView.prototype.getHeaderTitle = function(){ return this.headerTitle; };

ListView.prototype.getHeaderView = function(){ return this.headerView; };

ListView.prototype.getHeight = function(){ return this.height; };

ListView.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

ListView.prototype.getKeepScreenOn = function(){ return this.keepScreenOn; };

ListView.prototype.getKeepSectionsInSearch = function(){ return this.keepSectionsInSearch; };

ListView.prototype.getLayout = function(){ return this.layout; };

ListView.prototype.getLeft = function(){ return this.left; };

ListView.prototype.getOpacity = function(){ return this.opacity; };

ListView.prototype.getOverrideCurrentAnimation = function(){ return this.overrideCurrentAnimation; };

ListView.prototype.getPruneSectionsOnEdit = function(){ return this.pruneSectionsOnEdit; };

ListView.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

ListView.prototype.getPullView = function(){ return this.pullView; };

ListView.prototype.getRect = function(){ return this.rect; };

ListView.prototype.getRefreshControl = function(){ return this.refreshControl; };

ListView.prototype.getRight = function(){ return this.right; };

ListView.prototype.getScrollIndicatorStyle = function(){ return this.scrollIndicatorStyle; };

ListView.prototype.getSearchText = function(){ return this.searchText; };

ListView.prototype.getSearchView = function(){ return this.searchView; };

ListView.prototype.getSectionCount = function(){ return this.sectionCount; };

ListView.prototype.getSectionIndexTitles = function(){ return this.sectionIndexTitles; };

ListView.prototype.getSections = function(){ return this.sections; };

ListView.prototype.getSeparatorColor = function(){ return this.separatorColor; };

ListView.prototype.getSeparatorStyle = function(){ return this.separatorStyle; };

ListView.prototype.getShowVerticalScrollIndicator = function(){ return this.showVerticalScrollIndicator; };

ListView.prototype.getSize = function(){ return this.size; };

ListView.prototype.getSoftKeyboardOnFocus = function(){ return this.softKeyboardOnFocus; };

ListView.prototype.getStyle = function(){ return this.style; };

ListView.prototype.getTintColor = function(){ return this.tintColor; };

ListView.prototype.getTop = function(){ return this.top; };

ListView.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

ListView.prototype.getTransform = function(){ return this.transform; };

ListView.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

ListView.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

ListView.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

ListView.prototype.getVisible = function(){ return this.visible; };

ListView.prototype.getWidth = function(){ return this.width; };

ListView.prototype.getWillScrollOnStatusTap = function(){ return this.willScrollOnStatusTap; };

ListView.prototype.getZIndex = function(){ return this.zIndex; };

ListView.prototype.hide = function(){};

ListView.prototype.insertSectionAt = function(){};

ListView.prototype.remove = function(){};

ListView.prototype.removeAllChildren = function(){};

ListView.prototype.removeEventListener = function(){};

ListView.prototype.replaceSectionAt = function(){};

ListView.prototype.scrollToItem = function(){};

ListView.prototype.selectItem = function(){};

ListView.prototype.setAccessibilityHidden = function(property){ this.accessibilityHidden = property; };

ListView.prototype.setAccessibilityHint = function(property){ this.accessibilityHint = property; };

ListView.prototype.setAccessibilityLabel = function(property){ this.accessibilityLabel = property; };

ListView.prototype.setAccessibilityValue = function(property){ this.accessibilityValue = property; };

ListView.prototype.setAllowsSelection = function(property){ this.allowsSelection = property; };

ListView.prototype.setAnchorPoint = function(property){ this.anchorPoint = property; };

ListView.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

ListView.prototype.setBackgroundDisabledColor = function(property){ this.backgroundDisabledColor = property; };

ListView.prototype.setBackgroundDisabledImage = function(property){ this.backgroundDisabledImage = property; };

ListView.prototype.setBackgroundFocusedColor = function(property){ this.backgroundFocusedColor = property; };

ListView.prototype.setBackgroundFocusedImage = function(property){ this.backgroundFocusedImage = property; };

ListView.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

ListView.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

ListView.prototype.setBackgroundLeftCap = function(property){ this.backgroundLeftCap = property; };

ListView.prototype.setBackgroundRepeat = function(property){ this.backgroundRepeat = property; };

ListView.prototype.setBackgroundTopCap = function(property){ this.backgroundTopCap = property; };

ListView.prototype.setBorderColor = function(property){ this.borderColor = property; };

ListView.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

ListView.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

ListView.prototype.setBottom = function(property){ this.bottom = property; };

ListView.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

ListView.prototype.setCanScroll = function(property){ this.canScroll = property; };

ListView.prototype.setCaseInsensitiveSearch = function(property){ this.caseInsensitiveSearch = property; };

ListView.prototype.setCenter = function(property){ this.center = property; };

ListView.prototype.setClipMode = function(property){ this.clipMode = property; };

ListView.prototype.setContentInsets = function(){};

ListView.prototype.setDefaultItemTemplate = function(property){ this.defaultItemTemplate = property; };

ListView.prototype.setEditing = function(property){ this.editing = property; };

ListView.prototype.setFocusable = function(property){ this.focusable = property; };

ListView.prototype.setFooterTitle = function(property){ this.footerTitle = property; };

ListView.prototype.setFooterView = function(property){ this.footerView = property; };

ListView.prototype.setHeaderTitle = function(property){ this.headerTitle = property; };

ListView.prototype.setHeaderView = function(property){ this.headerView = property; };

ListView.prototype.setHeight = function(property){ this.height = property; };

ListView.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

ListView.prototype.setKeepScreenOn = function(property){ this.keepScreenOn = property; };

ListView.prototype.setKeepSectionsInSearch = function(property){ this.keepSectionsInSearch = property; };

ListView.prototype.setLayout = function(property){ this.layout = property; };

ListView.prototype.setLeft = function(property){ this.left = property; };

ListView.prototype.setMarker = function(){};

ListView.prototype.setOpacity = function(property){ this.opacity = property; };

ListView.prototype.setPruneSectionsOnEdit = function(property){ this.pruneSectionsOnEdit = property; };

ListView.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

ListView.prototype.setPullView = function(property){ this.pullView = property; };

ListView.prototype.setRefreshControl = function(property){ this.refreshControl = property; };

ListView.prototype.setRight = function(property){ this.right = property; };

ListView.prototype.setScrollIndicatorStyle = function(property){ this.scrollIndicatorStyle = property; };

ListView.prototype.setSearchText = function(property){ this.searchText = property; };

ListView.prototype.setSearchView = function(property){ this.searchView = property; };

ListView.prototype.setSectionIndexTitles = function(property){ this.sectionIndexTitles = property; };

ListView.prototype.setSections = function(property){ this.sections = property; };

ListView.prototype.setSeparatorColor = function(property){ this.separatorColor = property; };

ListView.prototype.setSeparatorInsets = function(property){ this.separatorInsets = property; };

ListView.prototype.setSeparatorStyle = function(property){ this.separatorStyle = property; };

ListView.prototype.setShowVerticalScrollIndicator = function(property){ this.showVerticalScrollIndicator = property; };

ListView.prototype.setSoftKeyboardOnFocus = function(property){ this.softKeyboardOnFocus = property; };

ListView.prototype.setTintColor = function(property){ this.tintColor = property; };

ListView.prototype.setTop = function(property){ this.top = property; };

ListView.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

ListView.prototype.setTransform = function(property){ this.transform = property; };

ListView.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

ListView.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

ListView.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

ListView.prototype.setVisible = function(property){ this.visible = property; };

ListView.prototype.setWidth = function(property){ this.width = property; };

ListView.prototype.setWillScrollOnStatusTap = function(property){ this.willScrollOnStatusTap = property; };

ListView.prototype.setZIndex = function(property){ this.zIndex = property; };

ListView.prototype.show = function(){};

ListView.prototype.startLayout = function(){};

ListView.prototype.toImage = function(){ return {}; };

ListView.prototype.updateLayout = function(){};

module.exports = function(properties){ return new ListView(properties); };