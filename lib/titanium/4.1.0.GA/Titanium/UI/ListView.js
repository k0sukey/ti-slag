function ListView(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.ListView';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.accessibilityHidden = properties.accessibilityHidden || true;
	this.accessibilityHint = properties.accessibilityHint || '';
	this.accessibilityLabel = properties.accessibilityLabel || '';
	this.accessibilityValue = properties.accessibilityValue || '';
	this.anchorPoint = properties.anchorPoint || {
		x: 0,
		y: 0
	};
	this.animatedCenter = properties.animatedCenter || {
		x: 0,
		y: 0
	};
	this.backgroundDisabledColor = properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = properties.backgroundFocusedImage || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundRepeat = properties.backgroundRepeat || true;
	this.backgroundLeftCap = properties.backgroundLeftCap || 0;
	this.backgroundTopCap = properties.backgroundTopCap || 0;
	this.clipMode = properties.clipMode || 0;
	this.focusable = properties.focusable || true;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.transform = properties.transform || {};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.horizontalWrap = properties.horizontalWrap || true;
	this.zIndex = properties.zIndex || 0;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.backgroundColor = properties.backgroundColor || '';
	this.borderColor = properties.borderColor || '';
	this.borderRadius = properties.borderRadius || 0;
	this.borderWidth = properties.borderWidth || 0;
	this.bottom = properties.bottom || 0;
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.children = properties.children || [];
	this.height = properties.height || 0;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.opacity = properties.opacity || 0;
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = properties.right || 0;
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.tintColor = properties.tintColor || '';
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.allowsSelection = properties.allowsSelection || true;
	this.canScroll = properties.canScroll || true;
	this.editing = properties.editing || true;
	this.pruneSectionsOnEdit = properties.pruneSectionsOnEdit || true;
	this.templates = properties.templates || {};
	this.separatorHeight = properties.separatorHeight || '';
	this.footerDividersEnabled = properties.footerDividersEnabled || true;
	this.headerDividersEnabled = properties.headerDividersEnabled || true;
	this.pullView = properties.pullView || {};
	this.refreshControl = properties.refreshControl || {};
	this.keepSectionsInSearch = properties.keepSectionsInSearch || true;
	this.sectionIndexTitles = properties.sectionIndexTitles || [];
	this.scrollIndicatorStyle = properties.scrollIndicatorStyle || 0;
	this.willScrollOnStatusTap = properties.willScrollOnStatusTap || true;
	this.separatorInsets = properties.separatorInsets || {};
	this.separatorStyle = properties.separatorStyle || 0;
	this.style = properties.style || 0;
	this.sections = properties.sections || [];
	this.footerTitle = properties.footerTitle || '';
	this.headerTitle = properties.headerTitle || '';
	this.searchText = properties.searchText || '';
	this.footerView = properties.footerView || {};
	this.headerView = properties.headerView || {};
	this.searchView = properties.searchView || {};
	this.caseInsensitiveSearch = properties.caseInsensitiveSearch || true;
	this.sectionCount = properties.sectionCount || 0;
	this.showVerticalScrollIndicator = properties.showVerticalScrollIndicator || true;
	this.separatorColor = properties.separatorColor || '';
	this.defaultItemTemplate = properties.defaultItemTemplate || '';
	return this;
}
ListView.prototype.addEventListener = function () {
};
ListView.prototype.removeEventListener = function () {
};
ListView.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ListView.prototype.fireEvent = function () {
};
ListView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.ListView.finishLayout was deprecated, since 3.0.0');
};
ListView.prototype.removeAllChildren = function () {
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
ListView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
ListView.prototype.add = function () {
};
ListView.prototype.animate = function () {
};
ListView.prototype.hide = function () {
};
ListView.prototype.remove = function () {
};
ListView.prototype.show = function () {
};
ListView.prototype.deselectItem = function () {
};
ListView.prototype.selectItem = function () {
};
ListView.prototype.setContentInsets = function () {
};
ListView.prototype.setContentOffset = function () {
};
ListView.prototype.addMarker = function () {
};
ListView.prototype.scrollToItem = function () {
};
ListView.prototype.appendSection = function () {
};
ListView.prototype.deleteSectionAt = function () {
};
ListView.prototype.insertSectionAt = function () {
};
ListView.prototype.replaceSectionAt = function () {
};
ListView.prototype.setMarker = function () {
};
ListView.prototype.getBubbleParent = function () {
	return true;
};
ListView.prototype.setBubbleParent = function () {
};
ListView.prototype.getApiName = function () {
	return '';
};
ListView.prototype.getLifecycleContainer = function () {
	return {};
};
ListView.prototype.setLifecycleContainer = function () {
};
ListView.prototype.getAccessibilityHidden = function () {
	return true;
};
ListView.prototype.setAccessibilityHidden = function () {
};
ListView.prototype.getAccessibilityHint = function () {
	return '';
};
ListView.prototype.setAccessibilityHint = function () {
};
ListView.prototype.getAccessibilityLabel = function () {
	return '';
};
ListView.prototype.setAccessibilityLabel = function () {
};
ListView.prototype.getAccessibilityValue = function () {
	return '';
};
ListView.prototype.setAccessibilityValue = function () {
};
ListView.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
ListView.prototype.setAnchorPoint = function () {
};
ListView.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ListView.prototype.getBackgroundDisabledColor = function () {
	return '';
};
ListView.prototype.setBackgroundDisabledColor = function () {
};
ListView.prototype.getBackgroundDisabledImage = function () {
	return '';
};
ListView.prototype.setBackgroundDisabledImage = function () {
};
ListView.prototype.getBackgroundFocusedColor = function () {
	return '';
};
ListView.prototype.setBackgroundFocusedColor = function () {
};
ListView.prototype.getBackgroundFocusedImage = function () {
	return '';
};
ListView.prototype.setBackgroundFocusedImage = function () {
};
ListView.prototype.getBackgroundGradient = function () {
	return {};
};
ListView.prototype.setBackgroundGradient = function () {
};
ListView.prototype.getBackgroundImage = function () {
	return '';
};
ListView.prototype.setBackgroundImage = function () {
};
ListView.prototype.getBackgroundRepeat = function () {
	return true;
};
ListView.prototype.setBackgroundRepeat = function () {
};
ListView.prototype.getBackgroundLeftCap = function () {
	return 0;
};
ListView.prototype.setBackgroundLeftCap = function () {
};
ListView.prototype.getBackgroundTopCap = function () {
	return 0;
};
ListView.prototype.setBackgroundTopCap = function () {
};
ListView.prototype.getClipMode = function () {
	return 0;
};
ListView.prototype.setClipMode = function () {
};
ListView.prototype.getFocusable = function () {
	return true;
};
ListView.prototype.setFocusable = function () {
};
ListView.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
ListView.prototype.setOverrideCurrentAnimation = function () {
};
ListView.prototype.getPullBackgroundColor = function () {
	return '';
};
ListView.prototype.setPullBackgroundColor = function () {
};
ListView.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
ListView.prototype.setSoftKeyboardOnFocus = function () {
};
ListView.prototype.getTransform = function () {
	return {};
};
ListView.prototype.setTransform = function () {
};
ListView.prototype.getViewShadowRadius = function () {
	return 0;
};
ListView.prototype.setViewShadowRadius = function () {
};
ListView.prototype.getViewShadowColor = function () {
	return '';
};
ListView.prototype.setViewShadowColor = function () {
};
ListView.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
ListView.prototype.setViewShadowOffset = function () {
};
ListView.prototype.getHorizontalWrap = function () {
	return true;
};
ListView.prototype.setHorizontalWrap = function () {
};
ListView.prototype.getZIndex = function () {
	return 0;
};
ListView.prototype.setZIndex = function () {
};
ListView.prototype.getKeepScreenOn = function () {
	return true;
};
ListView.prototype.setKeepScreenOn = function () {
};
ListView.prototype.getBackgroundColor = function () {
	return '';
};
ListView.prototype.setBackgroundColor = function () {
};
ListView.prototype.getBorderColor = function () {
	return '';
};
ListView.prototype.setBorderColor = function () {
};
ListView.prototype.getBorderRadius = function () {
	return 0;
};
ListView.prototype.setBorderRadius = function () {
};
ListView.prototype.getBorderWidth = function () {
	return 0;
};
ListView.prototype.setBorderWidth = function () {
};
ListView.prototype.getBottom = function () {
	return '';
};
ListView.prototype.setBottom = function () {
};
ListView.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ListView.prototype.setCenter = function () {
};
ListView.prototype.getChildren = function () {
	return [];
};
ListView.prototype.getHeight = function () {
	return '';
};
ListView.prototype.setHeight = function () {
};
ListView.prototype.getLayout = function () {
	return '';
};
ListView.prototype.setLayout = function () {
};
ListView.prototype.getLeft = function () {
	return '';
};
ListView.prototype.setLeft = function () {
};
ListView.prototype.getOpacity = function () {
	return 0;
};
ListView.prototype.setOpacity = function () {
};
ListView.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ListView.prototype.getRight = function () {
	return '';
};
ListView.prototype.setRight = function () {
};
ListView.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ListView.prototype.getTintColor = function () {
	return '';
};
ListView.prototype.setTintColor = function () {
};
ListView.prototype.getTop = function () {
	return '';
};
ListView.prototype.setTop = function () {
};
ListView.prototype.getTouchEnabled = function () {
	return true;
};
ListView.prototype.setTouchEnabled = function () {
};
ListView.prototype.getVisible = function () {
	return true;
};
ListView.prototype.setVisible = function () {
};
ListView.prototype.getWidth = function () {
	return '';
};
ListView.prototype.setWidth = function () {
};
ListView.prototype.getAllowsSelection = function () {
	return true;
};
ListView.prototype.setAllowsSelection = function () {
};
ListView.prototype.getCanScroll = function () {
	return true;
};
ListView.prototype.setCanScroll = function () {
};
ListView.prototype.getEditing = function () {
	return true;
};
ListView.prototype.setEditing = function () {
};
ListView.prototype.getPruneSectionsOnEdit = function () {
	return true;
};
ListView.prototype.setPruneSectionsOnEdit = function () {
};
ListView.prototype.getTemplates = function () {
	return {};
};
ListView.prototype.setTemplates = function () {
};
ListView.prototype.getSeparatorHeight = function () {
	return '';
};
ListView.prototype.setSeparatorHeight = function () {
};
ListView.prototype.getFooterDividersEnabled = function () {
	return true;
};
ListView.prototype.setFooterDividersEnabled = function () {
};
ListView.prototype.getHeaderDividersEnabled = function () {
	return true;
};
ListView.prototype.setHeaderDividersEnabled = function () {
};
ListView.prototype.getPullView = function () {
	return {};
};
ListView.prototype.setPullView = function () {
};
ListView.prototype.getRefreshControl = function () {
	return {};
};
ListView.prototype.setRefreshControl = function () {
};
ListView.prototype.getKeepSectionsInSearch = function () {
	return true;
};
ListView.prototype.setKeepSectionsInSearch = function () {
};
ListView.prototype.getSectionIndexTitles = function () {
	return [];
};
ListView.prototype.setSectionIndexTitles = function () {
};
ListView.prototype.getScrollIndicatorStyle = function () {
	return 0;
};
ListView.prototype.setScrollIndicatorStyle = function () {
};
ListView.prototype.getWillScrollOnStatusTap = function () {
	return true;
};
ListView.prototype.setWillScrollOnStatusTap = function () {
};
ListView.prototype.getSeparatorInsets = function () {
	return {};
};
ListView.prototype.setSeparatorInsets = function () {
};
ListView.prototype.getSeparatorStyle = function () {
	return 0;
};
ListView.prototype.setSeparatorStyle = function () {
};
ListView.prototype.getStyle = function () {
	return 0;
};
ListView.prototype.setStyle = function () {
};
ListView.prototype.getSections = function () {
	return [];
};
ListView.prototype.setSections = function () {
};
ListView.prototype.getFooterTitle = function () {
	return '';
};
ListView.prototype.setFooterTitle = function () {
};
ListView.prototype.getHeaderTitle = function () {
	return '';
};
ListView.prototype.setHeaderTitle = function () {
};
ListView.prototype.getSearchText = function () {
	return '';
};
ListView.prototype.setSearchText = function () {
};
ListView.prototype.getFooterView = function () {
	return {};
};
ListView.prototype.setFooterView = function () {
};
ListView.prototype.getHeaderView = function () {
	return {};
};
ListView.prototype.setHeaderView = function () {
};
ListView.prototype.getSearchView = function () {
	return {};
};
ListView.prototype.setSearchView = function () {
};
ListView.prototype.getCaseInsensitiveSearch = function () {
	return true;
};
ListView.prototype.setCaseInsensitiveSearch = function () {
};
ListView.prototype.getSectionCount = function () {
	return 0;
};
ListView.prototype.getShowVerticalScrollIndicator = function () {
	return true;
};
ListView.prototype.setShowVerticalScrollIndicator = function () {
};
ListView.prototype.getSeparatorColor = function () {
	return '';
};
ListView.prototype.setSeparatorColor = function () {
};
ListView.prototype.getDefaultItemTemplate = function () {
	return '';
};
ListView.prototype.setDefaultItemTemplate = function () {
};
module.exports = function (properties) {
	return new ListView(properties);
};