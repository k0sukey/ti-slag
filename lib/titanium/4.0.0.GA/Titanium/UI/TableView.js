function TableView(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || true;
	this.accessibilityHint = properties.accessibilityHint || '';
	this.accessibilityLabel = properties.accessibilityLabel || '';
	this.accessibilityValue = properties.accessibilityValue || '';
	this.allowsSelection = properties.allowsSelection || true;
	this.allowsSelectionDuringEditing = properties.allowsSelectionDuringEditing || true;
	this.anchorPoint = properties.anchorPoint || {
		x: 0,
		y: 0
	};
	this.animatedCenter = properties.animatedCenter || {
		x: 0,
		y: 0
	};
	this.apiName = 'Ti.UI.TableView';
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
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.children = properties.children || [];
	this.clipMode = properties.clipMode || 0;
	this.data = properties.data || {};
	this.editable = properties.editable || true;
	this.editing = properties.editing || true;
	this.filterAnchored = properties.filterAnchored || true;
	this.filterAttribute = properties.filterAttribute || '';
	this.filterCaseInsensitive = properties.filterCaseInsensitive || true;
	this.focusable = properties.focusable || true;
	this.footerDividersEnabled = properties.footerDividersEnabled || true;
	this.footerTitle = properties.footerTitle || '';
	this.footerView = properties.footerView || {};
	this.headerDividersEnabled = properties.headerDividersEnabled || true;
	this.headerPullView = properties.headerPullView || {};
	this.headerTitle = properties.headerTitle || '';
	this.headerView = properties.headerView || {};
	this.height = properties.height || 0;
	this.hideSearchOnSelection = properties.hideSearchOnSelection || true;
	this.horizontalWrap = properties.horizontalWrap || true;
	this.index = properties.index || [];
	this.keepScreenOn = properties.keepScreenOn || true;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.maxRowHeight = properties.maxRowHeight || 0;
	this.minRowHeight = properties.minRowHeight || 0;
	this.moveable = properties.moveable || true;
	this.moving = properties.moving || true;
	this.opacity = properties.opacity || 0;
	this.overScrollMode = properties.overScrollMode || 0;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.refreshControl = properties.refreshControl || {};
	this.right = properties.right || 0;
	this.rowHeight = properties.rowHeight || 0;
	this.scrollIndicatorStyle = properties.scrollIndicatorStyle || 0;
	this.scrollable = properties.scrollable || true;
	this.scrollsToTop = properties.scrollsToTop || true;
	this.search = properties.search || {};
	this.searchAsChild = properties.searchAsChild || true;
	this.searchHidden = properties.searchHidden || true;
	this.sectionCount = properties.sectionCount || 0;
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
	this.zIndex = properties.zIndex || 0;
	return this;
}
TableView.prototype.add = function () {
};
TableView.prototype.addEventListener = function () {
};
TableView.prototype.animate = function () {
};
TableView.prototype.appendRow = function () {
};
TableView.prototype.appendSection = function () {
};
TableView.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
TableView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
TableView.prototype.deleteRow = function () {
};
TableView.prototype.deleteSection = function () {
};
TableView.prototype.deselectRow = function () {
};
TableView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.TableView.finishLayout was deprecated, since 3.0.0');
};
TableView.prototype.fireEvent = function () {
};
TableView.prototype.getAccessibilityHidden = function () {
	return true;
};
TableView.prototype.getAccessibilityHint = function () {
	return '';
};
TableView.prototype.getAccessibilityLabel = function () {
	return '';
};
TableView.prototype.getAccessibilityValue = function () {
	return '';
};
TableView.prototype.getAllowsSelection = function () {
	return true;
};
TableView.prototype.getAllowsSelectionDuringEditing = function () {
	return true;
};
TableView.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
TableView.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TableView.prototype.getApiName = function () {
	return '';
};
TableView.prototype.getBackgroundColor = function () {
	return '';
};
TableView.prototype.getBackgroundDisabledColor = function () {
	return '';
};
TableView.prototype.getBackgroundDisabledImage = function () {
	return '';
};
TableView.prototype.getBackgroundFocusedColor = function () {
	return '';
};
TableView.prototype.getBackgroundFocusedImage = function () {
	return '';
};
TableView.prototype.getBackgroundGradient = function () {
	return {};
};
TableView.prototype.getBackgroundImage = function () {
	return '';
};
TableView.prototype.getBackgroundLeftCap = function () {
	return 0;
};
TableView.prototype.getBackgroundRepeat = function () {
	return true;
};
TableView.prototype.getBackgroundTopCap = function () {
	return 0;
};
TableView.prototype.getBorderColor = function () {
	return '';
};
TableView.prototype.getBorderRadius = function () {
	return 0;
};
TableView.prototype.getBorderWidth = function () {
	return 0;
};
TableView.prototype.getBottom = function () {
	return 0;
};
TableView.prototype.getBubbleParent = function () {
	return true;
};
TableView.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TableView.prototype.getChildren = function () {
	return [];
};
TableView.prototype.getClipMode = function () {
	return 0;
};
TableView.prototype.getData = function () {
	return {};
};
TableView.prototype.getEditable = function () {
	return true;
};
TableView.prototype.getEditing = function () {
	return true;
};
TableView.prototype.getFilterAnchored = function () {
	return true;
};
TableView.prototype.getFilterAttribute = function () {
	return '';
};
TableView.prototype.getFilterCaseInsensitive = function () {
	return true;
};
TableView.prototype.getFocusable = function () {
	return true;
};
TableView.prototype.getFooterDividersEnabled = function () {
	return true;
};
TableView.prototype.getFooterTitle = function () {
	return '';
};
TableView.prototype.getFooterView = function () {
	return {};
};
TableView.prototype.getHeaderDividersEnabled = function () {
	return true;
};
TableView.prototype.getHeaderPullView = function () {
	return {};
};
TableView.prototype.getHeaderTitle = function () {
	return '';
};
TableView.prototype.getHeaderView = function () {
	return {};
};
TableView.prototype.getHeight = function () {
	return 0;
};
TableView.prototype.getHideSearchOnSelection = function () {
	return true;
};
TableView.prototype.getHorizontalWrap = function () {
	return true;
};
TableView.prototype.getIndex = function () {
	return [];
};
TableView.prototype.getKeepScreenOn = function () {
	return true;
};
TableView.prototype.getLayout = function () {
	return '';
};
TableView.prototype.getLeft = function () {
	return 0;
};
TableView.prototype.getLifecycleContainer = function () {
	return {};
};
TableView.prototype.getMaxRowHeight = function () {
	return 0;
};
TableView.prototype.getMinRowHeight = function () {
	return 0;
};
TableView.prototype.getMoveable = function () {
	return true;
};
TableView.prototype.getMoving = function () {
	return true;
};
TableView.prototype.getOpacity = function () {
	return 0;
};
TableView.prototype.getOverScrollMode = function () {
	return 0;
};
TableView.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
TableView.prototype.getPullBackgroundColor = function () {
	return '';
};
TableView.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TableView.prototype.getRefreshControl = function () {
	return {};
};
TableView.prototype.getRight = function () {
	return 0;
};
TableView.prototype.getRowHeight = function () {
	return 0;
};
TableView.prototype.getScrollIndicatorStyle = function () {
	return 0;
};
TableView.prototype.getScrollable = function () {
	return true;
};
TableView.prototype.getScrollsToTop = function () {
	return true;
};
TableView.prototype.getSearch = function () {
	return {};
};
TableView.prototype.getSearchAsChild = function () {
	return true;
};
TableView.prototype.getSearchHidden = function () {
	return true;
};
TableView.prototype.getSectionCount = function () {
	return 0;
};
TableView.prototype.getSections = function () {
	return [];
};
TableView.prototype.getSeparatorColor = function () {
	return '';
};
TableView.prototype.getSeparatorInsets = function () {
	return {};
};
TableView.prototype.getSeparatorStyle = function () {
	return 0;
};
TableView.prototype.getShowVerticalScrollIndicator = function () {
	return true;
};
TableView.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TableView.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
TableView.prototype.getStyle = function () {
	return 0;
};
TableView.prototype.getTintColor = function () {
	return '';
};
TableView.prototype.getTop = function () {
	return 0;
};
TableView.prototype.getTouchEnabled = function () {
	return true;
};
TableView.prototype.getTransform = function () {
	return {};
};
TableView.prototype.getViewShadowColor = function () {
	return '';
};
TableView.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
TableView.prototype.getViewShadowRadius = function () {
	return 0;
};
TableView.prototype.getVisible = function () {
	return true;
};
TableView.prototype.getWidth = function () {
	return 0;
};
TableView.prototype.getZIndex = function () {
	return 0;
};
TableView.prototype.hide = function () {
};
TableView.prototype.insertRowAfter = function () {
};
TableView.prototype.insertRowBefore = function () {
};
TableView.prototype.insertSectionAfter = function () {
};
TableView.prototype.insertSectionBefore = function () {
};
TableView.prototype.remove = function () {
};
TableView.prototype.removeAllChildren = function () {
};
TableView.prototype.removeEventListener = function () {
};
TableView.prototype.scrollToIndex = function () {
};
TableView.prototype.scrollToTop = function () {
};
TableView.prototype.selectRow = function () {
};
TableView.prototype.setAccessibilityHidden = function () {
};
TableView.prototype.setAccessibilityHint = function () {
};
TableView.prototype.setAccessibilityLabel = function () {
};
TableView.prototype.setAccessibilityValue = function () {
};
TableView.prototype.setAllowsSelection = function () {
};
TableView.prototype.setAllowsSelectionDuringEditing = function () {
};
TableView.prototype.setAnchorPoint = function () {
};
TableView.prototype.setBackgroundColor = function () {
};
TableView.prototype.setBackgroundDisabledColor = function () {
};
TableView.prototype.setBackgroundDisabledImage = function () {
};
TableView.prototype.setBackgroundFocusedColor = function () {
};
TableView.prototype.setBackgroundFocusedImage = function () {
};
TableView.prototype.setBackgroundGradient = function () {
};
TableView.prototype.setBackgroundImage = function () {
};
TableView.prototype.setBackgroundLeftCap = function () {
};
TableView.prototype.setBackgroundRepeat = function () {
};
TableView.prototype.setBackgroundTopCap = function () {
};
TableView.prototype.setBorderColor = function () {
};
TableView.prototype.setBorderRadius = function () {
};
TableView.prototype.setBorderWidth = function () {
};
TableView.prototype.setBottom = function () {
};
TableView.prototype.setBubbleParent = function () {
};
TableView.prototype.setCenter = function () {
};
TableView.prototype.setClipMode = function () {
};
TableView.prototype.setContentInsets = function () {
};
TableView.prototype.setData = function () {
};
TableView.prototype.setEditable = function () {
};
TableView.prototype.setEditing = function () {
};
TableView.prototype.setFilterAnchored = function () {
};
TableView.prototype.setFilterAttribute = function () {
};
TableView.prototype.setFilterCaseInsensitive = function () {
};
TableView.prototype.setFocusable = function () {
};
TableView.prototype.setFooterTitle = function () {
};
TableView.prototype.setFooterView = function () {
};
TableView.prototype.setHeaderPullView = function () {
};
TableView.prototype.setHeaderTitle = function () {
};
TableView.prototype.setHeaderView = function () {
};
TableView.prototype.setHeight = function () {
};
TableView.prototype.setHideSearchOnSelection = function () {
};
TableView.prototype.setHorizontalWrap = function () {
};
TableView.prototype.setIndex = function () {
};
TableView.prototype.setKeepScreenOn = function () {
};
TableView.prototype.setLayout = function () {
};
TableView.prototype.setLeft = function () {
};
TableView.prototype.setLifecycleContainer = function () {
};
TableView.prototype.setMaxRowHeight = function () {
};
TableView.prototype.setMinRowHeight = function () {
};
TableView.prototype.setMoveable = function () {
};
TableView.prototype.setMoving = function () {
};
TableView.prototype.setOpacity = function () {
};
TableView.prototype.setOverScrollMode = function () {
};
TableView.prototype.setPullBackgroundColor = function () {
};
TableView.prototype.setRefreshControl = function () {
};
TableView.prototype.setRight = function () {
};
TableView.prototype.setRowHeight = function () {
};
TableView.prototype.setScrollIndicatorStyle = function () {
};
TableView.prototype.setScrollable = function () {
};
TableView.prototype.setScrollsToTop = function () {
};
TableView.prototype.setSearch = function () {
};
TableView.prototype.setSearchAsChild = function () {
};
TableView.prototype.setSearchHidden = function () {
};
TableView.prototype.setSections = function () {
};
TableView.prototype.setSeparatorColor = function () {
};
TableView.prototype.setSeparatorInsets = function () {
};
TableView.prototype.setSeparatorStyle = function () {
};
TableView.prototype.setShowVerticalScrollIndicator = function () {
};
TableView.prototype.setSoftKeyboardOnFocus = function () {
};
TableView.prototype.setStyle = function () {
};
TableView.prototype.setTintColor = function () {
};
TableView.prototype.setTop = function () {
};
TableView.prototype.setTouchEnabled = function () {
};
TableView.prototype.setTransform = function () {
};
TableView.prototype.setViewShadowColor = function () {
};
TableView.prototype.setViewShadowOffset = function () {
};
TableView.prototype.setViewShadowRadius = function () {
};
TableView.prototype.setVisible = function () {
};
TableView.prototype.setWidth = function () {
};
TableView.prototype.setZIndex = function () {
};
TableView.prototype.show = function () {
};
TableView.prototype.startLayout = function () {
	throw new Error('Ti.UI.TableView.startLayout was deprecated, since 3.0.0');
};
TableView.prototype.toImage = function () {
	return {};
};
TableView.prototype.updateLayout = function () {
	throw new Error('Ti.UI.TableView.updateLayout was deprecated, since 3.0.0');
};
TableView.prototype.updateRow = function () {
};
TableView.prototype.updateSection = function () {
};
module.exports = function (properties) {
	return new TableView(properties);
};