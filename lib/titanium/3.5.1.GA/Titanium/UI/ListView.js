function ListView(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || true;
	this.accessibilityHint = properties.accessibilityHint || '';
	this.accessibilityLabel = properties.accessibilityLabel || '';
	this.accessibilityValue = properties.accessibilityValue || '';
	this.allowsSelection = properties.allowsSelection || true;
	this.anchorPoint = properties.anchorPoint || {
		x: 0,
		y: 0
	};
	this.animatedCenter = properties.animatedCenter || {
		x: 0,
		y: 0
	};
	this.apiName = 'Ti.UI.ListView';
	this.backgroundColor = properties.backgroundColor || '';
	this.backgroundDisabledColor = properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = properties.backgroundFocusedImage || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundLeftCap = properties.backgroundLeftCap || 0;
	this.backgroundRepeat = properties.backgroundRepeat || true;
	this.backgroundTopCap = properties.backgroundTopCap || 0;
	this.borderColor = properties.borderColor || '';
	this.borderRadius = properties.borderRadius || 0;
	this.borderWidth = properties.borderWidth || 0;
	this.bottom = properties.bottom || 0;
	this.bubbleParent = properties.bubbleParent || true;
	this.canScroll = properties.canScroll || true;
	this.caseInsensitiveSearch = properties.caseInsensitiveSearch || true;
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.children = properties.children || [];
	this.clipMode = properties.clipMode || 0;
	this.defaultItemTemplate = properties.defaultItemTemplate || '';
	this.editing = properties.editing || true;
	this.focusable = properties.focusable || true;
	this.footerDividersEnabled = properties.footerDividersEnabled || true;
	this.footerTitle = properties.footerTitle || '';
	this.footerView = properties.footerView || {};
	this.headerDividersEnabled = properties.headerDividersEnabled || true;
	this.headerTitle = properties.headerTitle || '';
	this.headerView = properties.headerView || {};
	this.height = properties.height || 0;
	this.horizontalWrap = properties.horizontalWrap || true;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.keepSectionsInSearch = properties.keepSectionsInSearch || true;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.opacity = properties.opacity || 0;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.pruneSectionsOnEdit = properties.pruneSectionsOnEdit || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.pullView = properties.pullView || {};
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.refreshControl = properties.refreshControl || {};
	this.right = properties.right || 0;
	this.scrollIndicatorStyle = properties.scrollIndicatorStyle || 0;
	this.searchText = properties.searchText || '';
	this.searchView = properties.searchView || {};
	this.sectionCount = properties.sectionCount || 0;
	this.sectionIndexTitles = properties.sectionIndexTitles || [];
	this.sections = properties.sections || [];
	this.separatorColor = properties.separatorColor || '';
	this.separatorInsets = properties.separatorInsets || {};
	this.separatorStyle = properties.separatorStyle || 0;
	this.showVerticalScrollIndicator = properties.showVerticalScrollIndicator || true;
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.style = properties.style || 0;
	this.templates = properties.templates || {};
	this.tintColor = properties.tintColor || '';
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.transform = properties.transform || {};
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.willScrollOnStatusTap = properties.willScrollOnStatusTap || true;
	this.zIndex = properties.zIndex || 0;
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
ListView.prototype.getSeparatorInsets = function () {
	return {};
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
ListView.prototype.getTemplates = function () {
	return {};
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