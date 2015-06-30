function TableView(properties) {
	properties = properties || {};

	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.allowsSelection = properties.allowsSelection || undefined;
	this.allowsSelectionDuringEditing = properties.allowsSelectionDuringEditing || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.TableView';
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
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.data = properties.data || undefined;
	this.editable = properties.editable || undefined;
	this.editing = properties.editing || undefined;
	this.filterAnchored = properties.filterAnchored || undefined;
	this.filterAttribute = properties.filterAttribute || undefined;
	this.filterCaseInsensitive = properties.filterCaseInsensitive || undefined;
	this.focusable = properties.focusable || undefined;
	this.footerDividersEnabled = properties.footerDividersEnabled || undefined;
	this.footerTitle = properties.footerTitle || undefined;
	this.footerView = properties.footerView || undefined;
	this.headerDividersEnabled = properties.headerDividersEnabled || undefined;
	this.headerPullView = properties.headerPullView || undefined;
	this.headerTitle = properties.headerTitle || undefined;
	this.headerView = properties.headerView || undefined;
	this.height = properties.height || undefined;
	this.hideSearchOnSelection = properties.hideSearchOnSelection || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.index = properties.index || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.maxRowHeight = properties.maxRowHeight || undefined;
	this.minRowHeight = properties.minRowHeight || undefined;
	this.moveable = properties.moveable || undefined;
	this.moving = properties.moving || undefined;
	this.opacity = properties.opacity || undefined;
	this.overScrollMode = properties.overScrollMode || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.refreshControl = properties.refreshControl || undefined;
	this.right = properties.right || undefined;
	this.rowHeight = properties.rowHeight || undefined;
	this.scrollIndicatorStyle = properties.scrollIndicatorStyle || undefined;
	this.scrollable = properties.scrollable || undefined;
	this.scrollsToTop = properties.scrollsToTop || undefined;
	this.search = properties.search || undefined;
	this.searchAsChild = properties.searchAsChild || undefined;
	this.searchHidden = properties.searchHidden || undefined;
	this.sectionCount = properties.sectionCount || undefined;
	this.sections = properties.sections || undefined;
	this.separatorColor = properties.separatorColor || undefined;
	this.separatorInsets = properties.separatorInsets || undefined;
	this.separatorStyle = properties.separatorStyle || undefined;
	this.showVerticalScrollIndicator = properties.showVerticalScrollIndicator || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.style = properties.style || undefined;
	this.tintColor = properties.tintColor || undefined;
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

TableView.prototype.add = function(){};

TableView.prototype.addEventListener = function(){};

TableView.prototype.animate = function(){};

TableView.prototype.appendRow = function(){};

TableView.prototype.appendSection = function(){};

TableView.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

TableView.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

TableView.prototype.deleteRow = function(){};

TableView.prototype.deleteSection = function(){};

TableView.prototype.deselectRow = function(){};

TableView.prototype.finishLayout = function(){};

TableView.prototype.fireEvent = function(){};

TableView.prototype.getAccessibilityHidden = function(){ return this.accessibilityHidden; };

TableView.prototype.getAccessibilityHint = function(){ return this.accessibilityHint; };

TableView.prototype.getAccessibilityLabel = function(){ return this.accessibilityLabel; };

TableView.prototype.getAccessibilityValue = function(){ return this.accessibilityValue; };

TableView.prototype.getAllowsSelection = function(){ return this.allowsSelection; };

TableView.prototype.getAllowsSelectionDuringEditing = function(){ return this.allowsSelectionDuringEditing; };

TableView.prototype.getAnchorPoint = function(){ return this.anchorPoint; };

TableView.prototype.getAnimatedCenter = function(){ return this.animatedCenter; };

TableView.prototype.getApiName = function(){ return this.apiName; };

TableView.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

TableView.prototype.getBackgroundDisabledColor = function(){ return this.backgroundDisabledColor; };

TableView.prototype.getBackgroundDisabledImage = function(){ return this.backgroundDisabledImage; };

TableView.prototype.getBackgroundFocusedColor = function(){ return this.backgroundFocusedColor; };

TableView.prototype.getBackgroundFocusedImage = function(){ return this.backgroundFocusedImage; };

TableView.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

TableView.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

TableView.prototype.getBackgroundLeftCap = function(){ return this.backgroundLeftCap; };

TableView.prototype.getBackgroundRepeat = function(){ return this.backgroundRepeat; };

TableView.prototype.getBackgroundTopCap = function(){ return this.backgroundTopCap; };

TableView.prototype.getBorderColor = function(){ return this.borderColor; };

TableView.prototype.getBorderRadius = function(){ return this.borderRadius; };

TableView.prototype.getBorderWidth = function(){ return this.borderWidth; };

TableView.prototype.getBottom = function(){ return this.bottom; };

TableView.prototype.getBubbleParent = function(){ return this.bubbleParent; };

TableView.prototype.getCenter = function(){ return this.center; };

TableView.prototype.getChildren = function(){ return this.children; };

TableView.prototype.getClipMode = function(){ return this.clipMode; };

TableView.prototype.getEditable = function(){ return this.editable; };

TableView.prototype.getEditing = function(){ return this.editing; };

TableView.prototype.getFilterAnchored = function(){ return this.filterAnchored; };

TableView.prototype.getFilterAttribute = function(){ return this.filterAttribute; };

TableView.prototype.getFilterCaseInsensitive = function(){ return this.filterCaseInsensitive; };

TableView.prototype.getFocusable = function(){ return this.focusable; };

TableView.prototype.getFooterDividersEnabled = function(){ return this.footerDividersEnabled; };

TableView.prototype.getFooterTitle = function(){ return this.footerTitle; };

TableView.prototype.getFooterView = function(){ return this.footerView; };

TableView.prototype.getHeaderDividersEnabled = function(){ return this.headerDividersEnabled; };

TableView.prototype.getHeaderPullView = function(){ return this.headerPullView; };

TableView.prototype.getHeaderTitle = function(){ return this.headerTitle; };

TableView.prototype.getHeaderView = function(){ return this.headerView; };

TableView.prototype.getHeight = function(){ return this.height; };

TableView.prototype.getHideSearchOnSelection = function(){ return this.hideSearchOnSelection; };

TableView.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

TableView.prototype.getIndex = function(){ return this.index; };

TableView.prototype.getKeepScreenOn = function(){ return this.keepScreenOn; };

TableView.prototype.getLayout = function(){ return this.layout; };

TableView.prototype.getLeft = function(){ return this.left; };

TableView.prototype.getMaxRowHeight = function(){ return this.maxRowHeight; };

TableView.prototype.getMinRowHeight = function(){ return this.minRowHeight; };

TableView.prototype.getMoveable = function(){ return this.moveable; };

TableView.prototype.getMoving = function(){ return this.moving; };

TableView.prototype.getOpacity = function(){ return this.opacity; };

TableView.prototype.getOverScrollMode = function(){ return this.overScrollMode; };

TableView.prototype.getOverrideCurrentAnimation = function(){ return this.overrideCurrentAnimation; };

TableView.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

TableView.prototype.getRect = function(){ return this.rect; };

TableView.prototype.getRefreshControl = function(){ return this.refreshControl; };

TableView.prototype.getRight = function(){ return this.right; };

TableView.prototype.getRowHeight = function(){ return this.rowHeight; };

TableView.prototype.getScrollIndicatorStyle = function(){ return this.scrollIndicatorStyle; };

TableView.prototype.getScrollable = function(){ return this.scrollable; };

TableView.prototype.getScrollsToTop = function(){ return this.scrollsToTop; };

TableView.prototype.getSearch = function(){ return this.search; };

TableView.prototype.getSearchAsChild = function(){ return this.searchAsChild; };

TableView.prototype.getSearchHidden = function(){ return this.searchHidden; };

TableView.prototype.getSectionCount = function(){ return this.sectionCount; };

TableView.prototype.getSections = function(){ return this.sections; };

TableView.prototype.getSeparatorColor = function(){ return this.separatorColor; };

TableView.prototype.getSeparatorStyle = function(){ return this.separatorStyle; };

TableView.prototype.getShowVerticalScrollIndicator = function(){ return this.showVerticalScrollIndicator; };

TableView.prototype.getSize = function(){ return this.size; };

TableView.prototype.getSoftKeyboardOnFocus = function(){ return this.softKeyboardOnFocus; };

TableView.prototype.getStyle = function(){ return this.style; };

TableView.prototype.getTintColor = function(){ return this.tintColor; };

TableView.prototype.getTop = function(){ return this.top; };

TableView.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

TableView.prototype.getTransform = function(){ return this.transform; };

TableView.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

TableView.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

TableView.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

TableView.prototype.getVisible = function(){ return this.visible; };

TableView.prototype.getWidth = function(){ return this.width; };

TableView.prototype.getZIndex = function(){ return this.zIndex; };

TableView.prototype.hide = function(){};

TableView.prototype.insertRowAfter = function(){};

TableView.prototype.insertRowBefore = function(){};

TableView.prototype.insertSectionAfter = function(){};

TableView.prototype.insertSectionBefore = function(){};

TableView.prototype.remove = function(){};

TableView.prototype.removeAllChildren = function(){};

TableView.prototype.removeEventListener = function(){};

TableView.prototype.scrollToIndex = function(){};

TableView.prototype.scrollToTop = function(){};

TableView.prototype.selectRow = function(){};

TableView.prototype.setAccessibilityHidden = function(property){ this.accessibilityHidden = property; };

TableView.prototype.setAccessibilityHint = function(property){ this.accessibilityHint = property; };

TableView.prototype.setAccessibilityLabel = function(property){ this.accessibilityLabel = property; };

TableView.prototype.setAccessibilityValue = function(property){ this.accessibilityValue = property; };

TableView.prototype.setAllowsSelection = function(property){ this.allowsSelection = property; };

TableView.prototype.setAllowsSelectionDuringEditing = function(property){ this.allowsSelectionDuringEditing = property; };

TableView.prototype.setAnchorPoint = function(property){ this.anchorPoint = property; };

TableView.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

TableView.prototype.setBackgroundDisabledColor = function(property){ this.backgroundDisabledColor = property; };

TableView.prototype.setBackgroundDisabledImage = function(property){ this.backgroundDisabledImage = property; };

TableView.prototype.setBackgroundFocusedColor = function(property){ this.backgroundFocusedColor = property; };

TableView.prototype.setBackgroundFocusedImage = function(property){ this.backgroundFocusedImage = property; };

TableView.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

TableView.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

TableView.prototype.setBackgroundLeftCap = function(property){ this.backgroundLeftCap = property; };

TableView.prototype.setBackgroundRepeat = function(property){ this.backgroundRepeat = property; };

TableView.prototype.setBackgroundTopCap = function(property){ this.backgroundTopCap = property; };

TableView.prototype.setBorderColor = function(property){ this.borderColor = property; };

TableView.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

TableView.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

TableView.prototype.setBottom = function(property){ this.bottom = property; };

TableView.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

TableView.prototype.setCenter = function(property){ this.center = property; };

TableView.prototype.setClipMode = function(property){ this.clipMode = property; };

TableView.prototype.setContentInsets = function(){};

TableView.prototype.setData = function(property){ this.data = property; };

TableView.prototype.setEditable = function(property){ this.editable = property; };

TableView.prototype.setEditing = function(property){ this.editing = property; };

TableView.prototype.setFilterAnchored = function(property){ this.filterAnchored = property; };

TableView.prototype.setFilterAttribute = function(property){ this.filterAttribute = property; };

TableView.prototype.setFilterCaseInsensitive = function(property){ this.filterCaseInsensitive = property; };

TableView.prototype.setFocusable = function(property){ this.focusable = property; };

TableView.prototype.setFooterTitle = function(property){ this.footerTitle = property; };

TableView.prototype.setFooterView = function(property){ this.footerView = property; };

TableView.prototype.setHeaderPullView = function(property){ this.headerPullView = property; };

TableView.prototype.setHeaderTitle = function(property){ this.headerTitle = property; };

TableView.prototype.setHeaderView = function(property){ this.headerView = property; };

TableView.prototype.setHeight = function(property){ this.height = property; };

TableView.prototype.setHideSearchOnSelection = function(property){ this.hideSearchOnSelection = property; };

TableView.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

TableView.prototype.setIndex = function(property){ this.index = property; };

TableView.prototype.setKeepScreenOn = function(property){ this.keepScreenOn = property; };

TableView.prototype.setLayout = function(property){ this.layout = property; };

TableView.prototype.setLeft = function(property){ this.left = property; };

TableView.prototype.setMaxRowHeight = function(property){ this.maxRowHeight = property; };

TableView.prototype.setMinRowHeight = function(property){ this.minRowHeight = property; };

TableView.prototype.setMoveable = function(property){ this.moveable = property; };

TableView.prototype.setMoving = function(property){ this.moving = property; };

TableView.prototype.setOpacity = function(property){ this.opacity = property; };

TableView.prototype.setOverScrollMode = function(property){ this.overScrollMode = property; };

TableView.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

TableView.prototype.setRefreshControl = function(property){ this.refreshControl = property; };

TableView.prototype.setRight = function(property){ this.right = property; };

TableView.prototype.setRowHeight = function(property){ this.rowHeight = property; };

TableView.prototype.setScrollIndicatorStyle = function(property){ this.scrollIndicatorStyle = property; };

TableView.prototype.setScrollable = function(property){ this.scrollable = property; };

TableView.prototype.setScrollsToTop = function(property){ this.scrollsToTop = property; };

TableView.prototype.setSearch = function(property){ this.search = property; };

TableView.prototype.setSearchAsChild = function(property){ this.searchAsChild = property; };

TableView.prototype.setSearchHidden = function(property){ this.searchHidden = property; };

TableView.prototype.setSections = function(property){ this.sections = property; };

TableView.prototype.setSeparatorColor = function(property){ this.separatorColor = property; };

TableView.prototype.setSeparatorInsets = function(property){ this.separatorInsets = property; };

TableView.prototype.setSeparatorStyle = function(property){ this.separatorStyle = property; };

TableView.prototype.setShowVerticalScrollIndicator = function(property){ this.showVerticalScrollIndicator = property; };

TableView.prototype.setSoftKeyboardOnFocus = function(property){ this.softKeyboardOnFocus = property; };

TableView.prototype.setStyle = function(property){ this.style = property; };

TableView.prototype.setTintColor = function(property){ this.tintColor = property; };

TableView.prototype.setTop = function(property){ this.top = property; };

TableView.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

TableView.prototype.setTransform = function(property){ this.transform = property; };

TableView.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

TableView.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

TableView.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

TableView.prototype.setVisible = function(property){ this.visible = property; };

TableView.prototype.setWidth = function(property){ this.width = property; };

TableView.prototype.setZIndex = function(property){ this.zIndex = property; };

TableView.prototype.show = function(){};

TableView.prototype.startLayout = function(){};

TableView.prototype.toImage = function(){ return {}; };

TableView.prototype.updateLayout = function(){};

TableView.prototype.updateRow = function(){};

TableView.prototype.updateSection = function(){};

module.exports = function(properties){ return new TableView(properties); };