function ListView(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.allowsSelection = properties.allowsSelection || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.ListView';
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
ListView.prototype.add = function () {
};
ListView.prototype.addEventListener = function () {
};
ListView.prototype.animate = function () {
};
ListView.prototype.appendSection = function () {
};
ListView.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ListView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
ListView.prototype.deleteSectionAt = function () {
};
ListView.prototype.deselectItem = function () {
};
ListView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.ListView.finishLayout was deprecated, since 3.0.0');
};
ListView.prototype.fireEvent = function () {
};
ListView.prototype.getAccessibilityHidden = function () {
	return true;
};
ListView.prototype.getAccessibilityHint = function () {
	return '';
};
ListView.prototype.getAccessibilityLabel = function () {
	return '';
};
ListView.prototype.getAccessibilityValue = function () {
	return '';
};
ListView.prototype.getAllowsSelection = function () {
	return true;
};
ListView.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
ListView.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ListView.prototype.getApiName = function () {
	return '';
};
ListView.prototype.getBackgroundColor = function () {
	return '';
};
ListView.prototype.getBackgroundDisabledColor = function () {
	return '';
};
ListView.prototype.getBackgroundDisabledImage = function () {
	return '';
};
ListView.prototype.getBackgroundFocusedColor = function () {
	return '';
};
ListView.prototype.getBackgroundFocusedImage = function () {
	return '';
};
ListView.prototype.getBackgroundGradient = function () {
	return {};
};
ListView.prototype.getBackgroundImage = function () {
	return '';
};
ListView.prototype.getBackgroundLeftCap = function () {
	return 0;
};
ListView.prototype.getBackgroundRepeat = function () {
	return true;
};
ListView.prototype.getBackgroundTopCap = function () {
	return 0;
};
ListView.prototype.getBorderColor = function () {
	return '';
};
ListView.prototype.getBorderRadius = function () {
	return 0;
};
ListView.prototype.getBorderWidth = function () {
	return 0;
};
ListView.prototype.getBottom = function () {
	return 0;
};
ListView.prototype.getBubbleParent = function () {
	return true;
};
ListView.prototype.getCanScroll = function () {
	return true;
};
ListView.prototype.getCaseInsensitiveSearch = function () {
	return true;
};
ListView.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ListView.prototype.getChildren = function () {
	return [];
};
ListView.prototype.getClipMode = function () {
	return 0;
};
ListView.prototype.getDefaultItemTemplate = function () {
	return '';
};
ListView.prototype.getEditing = function () {
	return true;
};
ListView.prototype.getFocusable = function () {
	return true;
};
ListView.prototype.getFooterDividersEnabled = function () {
	return true;
};
ListView.prototype.getFooterTitle = function () {
	return '';
};
ListView.prototype.getFooterView = function () {
	return {};
};
ListView.prototype.getHeaderDividersEnabled = function () {
	return true;
};
ListView.prototype.getHeaderTitle = function () {
	return '';
};
ListView.prototype.getHeaderView = function () {
	return {};
};
ListView.prototype.getHeight = function () {
	return 0;
};
ListView.prototype.getHorizontalWrap = function () {
	return true;
};
ListView.prototype.getKeepScreenOn = function () {
	return true;
};
ListView.prototype.getKeepSectionsInSearch = function () {
	return true;
};
ListView.prototype.getLayout = function () {
	return '';
};
ListView.prototype.getLeft = function () {
	return 0;
};
ListView.prototype.getOpacity = function () {
	return 0;
};
ListView.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
ListView.prototype.getPruneSectionsOnEdit = function () {
	return true;
};
ListView.prototype.getPullBackgroundColor = function () {
	return '';
};
ListView.prototype.getPullView = function () {
	return {};
};
ListView.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ListView.prototype.getRefreshControl = function () {
	return {};
};
ListView.prototype.getRight = function () {
	return 0;
};
ListView.prototype.getScrollIndicatorStyle = function () {
	return 0;
};
ListView.prototype.getSearchText = function () {
	return '';
};
ListView.prototype.getSearchView = function () {
	return {};
};
ListView.prototype.getSectionCount = function () {
	return 0;
};
ListView.prototype.getSectionIndexTitles = function () {
	return [];
};
ListView.prototype.getSections = function () {
	return [];
};
ListView.prototype.getSeparatorColor = function () {
	return '';
};
ListView.prototype.getSeparatorStyle = function () {
	return 0;
};
ListView.prototype.getShowVerticalScrollIndicator = function () {
	return true;
};
ListView.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ListView.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
ListView.prototype.getStyle = function () {
	return 0;
};
ListView.prototype.getTintColor = function () {
	return '';
};
ListView.prototype.getTop = function () {
	return 0;
};
ListView.prototype.getTouchEnabled = function () {
	return true;
};
ListView.prototype.getTransform = function () {
	return {};
};
ListView.prototype.getViewShadowColor = function () {
	return '';
};
ListView.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
ListView.prototype.getViewShadowRadius = function () {
	return 0;
};
ListView.prototype.getVisible = function () {
	return true;
};
ListView.prototype.getWidth = function () {
	return 0;
};
ListView.prototype.getWillScrollOnStatusTap = function () {
	return true;
};
ListView.prototype.getZIndex = function () {
	return 0;
};
ListView.prototype.hide = function () {
};
ListView.prototype.insertSectionAt = function () {
};
ListView.prototype.remove = function () {
};
ListView.prototype.removeAllChildren = function () {
};
ListView.prototype.removeEventListener = function () {
};
ListView.prototype.replaceSectionAt = function () {
};
ListView.prototype.scrollToItem = function () {
};
ListView.prototype.selectItem = function () {
};
ListView.prototype.setAccessibilityHidden = function () {
};
ListView.prototype.setAccessibilityHint = function () {
};
ListView.prototype.setAccessibilityLabel = function () {
};
ListView.prototype.setAccessibilityValue = function () {
};
ListView.prototype.setAllowsSelection = function () {
};
ListView.prototype.setAnchorPoint = function () {
};
ListView.prototype.setBackgroundColor = function () {
};
ListView.prototype.setBackgroundDisabledColor = function () {
};
ListView.prototype.setBackgroundDisabledImage = function () {
};
ListView.prototype.setBackgroundFocusedColor = function () {
};
ListView.prototype.setBackgroundFocusedImage = function () {
};
ListView.prototype.setBackgroundGradient = function () {
};
ListView.prototype.setBackgroundImage = function () {
};
ListView.prototype.setBackgroundLeftCap = function () {
};
ListView.prototype.setBackgroundRepeat = function () {
};
ListView.prototype.setBackgroundTopCap = function () {
};
ListView.prototype.setBorderColor = function () {
};
ListView.prototype.setBorderRadius = function () {
};
ListView.prototype.setBorderWidth = function () {
};
ListView.prototype.setBottom = function () {
};
ListView.prototype.setBubbleParent = function () {
};
ListView.prototype.setCanScroll = function () {
};
ListView.prototype.setCaseInsensitiveSearch = function () {
};
ListView.prototype.setCenter = function () {
};
ListView.prototype.setClipMode = function () {
};
ListView.prototype.setContentInsets = function () {
};
ListView.prototype.setDefaultItemTemplate = function () {
};
ListView.prototype.setEditing = function () {
};
ListView.prototype.setFocusable = function () {
};
ListView.prototype.setFooterTitle = function () {
};
ListView.prototype.setFooterView = function () {
};
ListView.prototype.setHeaderTitle = function () {
};
ListView.prototype.setHeaderView = function () {
};
ListView.prototype.setHeight = function () {
};
ListView.prototype.setHorizontalWrap = function () {
};
ListView.prototype.setKeepScreenOn = function () {
};
ListView.prototype.setKeepSectionsInSearch = function () {
};
ListView.prototype.setLayout = function () {
};
ListView.prototype.setLeft = function () {
};
ListView.prototype.setMarker = function () {
};
ListView.prototype.setOpacity = function () {
};
ListView.prototype.setPruneSectionsOnEdit = function () {
};
ListView.prototype.setPullBackgroundColor = function () {
};
ListView.prototype.setPullView = function () {
};
ListView.prototype.setRefreshControl = function () {
};
ListView.prototype.setRight = function () {
};
ListView.prototype.setScrollIndicatorStyle = function () {
};
ListView.prototype.setSearchText = function () {
};
ListView.prototype.setSearchView = function () {
};
ListView.prototype.setSectionIndexTitles = function () {
};
ListView.prototype.setSections = function () {
};
ListView.prototype.setSeparatorColor = function () {
};
ListView.prototype.setSeparatorInsets = function () {
};
ListView.prototype.setSeparatorStyle = function () {
};
ListView.prototype.setShowVerticalScrollIndicator = function () {
};
ListView.prototype.setSoftKeyboardOnFocus = function () {
};
ListView.prototype.setTintColor = function () {
};
ListView.prototype.setTop = function () {
};
ListView.prototype.setTouchEnabled = function () {
};
ListView.prototype.setTransform = function () {
};
ListView.prototype.setViewShadowColor = function () {
};
ListView.prototype.setViewShadowOffset = function () {
};
ListView.prototype.setViewShadowRadius = function () {
};
ListView.prototype.setVisible = function () {
};
ListView.prototype.setWidth = function () {
};
ListView.prototype.setWillScrollOnStatusTap = function () {
};
ListView.prototype.setZIndex = function () {
};
ListView.prototype.show = function () {
};
ListView.prototype.startLayout = function () {
	throw new Error('Ti.UI.ListView.startLayout was deprecated, since 3.0.0');
};
ListView.prototype.toImage = function () {
	return {};
};
ListView.prototype.updateLayout = function () {
	throw new Error('Ti.UI.ListView.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new ListView(properties);
};