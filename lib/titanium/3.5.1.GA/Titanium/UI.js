function UI(properties) {
	properties = properties || {};
	this.ANIMATION_CURVE_EASE_IN = properties.ANIMATION_CURVE_EASE_IN || undefined;
	this.ANIMATION_CURVE_EASE_IN_OUT = properties.ANIMATION_CURVE_EASE_IN_OUT || undefined;
	this.ANIMATION_CURVE_EASE_OUT = properties.ANIMATION_CURVE_EASE_OUT || undefined;
	this.ANIMATION_CURVE_LINEAR = properties.ANIMATION_CURVE_LINEAR || undefined;
	if (properties.AUTODETECT_ADDRESS) {
		throw new Error('Ti.UI.AUTODETECT_ADDRESS was deprecated, since 1.8.0');
	}
	if (properties.AUTODETECT_ALL) {
		throw new Error('Ti.UI.AUTODETECT_ALL was deprecated, since 1.8.0');
	}
	if (properties.AUTODETECT_CALENDAR) {
		throw new Error('Ti.UI.AUTODETECT_CALENDAR was deprecated, since 1.8.0');
	}
	if (properties.AUTODETECT_LINK) {
		throw new Error('Ti.UI.AUTODETECT_LINK was deprecated, since 1.8.0');
	}
	if (properties.AUTODETECT_NONE) {
		throw new Error('Ti.UI.AUTODETECT_NONE was deprecated, since 1.8.0');
	}
	if (properties.AUTODETECT_PHONE) {
		throw new Error('Ti.UI.AUTODETECT_PHONE was deprecated, since 1.8.0');
	}
	this.AUTOLINK_ALL = properties.AUTOLINK_ALL || undefined;
	this.AUTOLINK_CALENDAR = properties.AUTOLINK_CALENDAR || undefined;
	this.AUTOLINK_EMAIL_ADDRESSES = properties.AUTOLINK_EMAIL_ADDRESSES || undefined;
	this.AUTOLINK_MAP_ADDRESSES = properties.AUTOLINK_MAP_ADDRESSES || undefined;
	this.AUTOLINK_NONE = properties.AUTOLINK_NONE || undefined;
	this.AUTOLINK_PHONE_NUMBERS = properties.AUTOLINK_PHONE_NUMBERS || undefined;
	this.AUTOLINK_URLS = properties.AUTOLINK_URLS || undefined;
	if (properties.BLEND_MODE_CLEAR) {
		throw new Error('Ti.UI.BLEND_MODE_CLEAR was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_COLOR) {
		throw new Error('Ti.UI.BLEND_MODE_COLOR was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_COLOR_BURN) {
		throw new Error('Ti.UI.BLEND_MODE_COLOR_BURN was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_COLOR_DODGE) {
		throw new Error('Ti.UI.BLEND_MODE_COLOR_DODGE was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_COPY) {
		throw new Error('Ti.UI.BLEND_MODE_COPY was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_DARKEN) {
		throw new Error('Ti.UI.BLEND_MODE_DARKEN was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_DESTINATION_ATOP) {
		throw new Error('Ti.UI.BLEND_MODE_DESTINATION_ATOP was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_DESTINATION_IN) {
		throw new Error('Ti.UI.BLEND_MODE_DESTINATION_IN was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_DESTINATION_OUT) {
		throw new Error('Ti.UI.BLEND_MODE_DESTINATION_OUT was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_DESTINATION_OVER) {
		throw new Error('Ti.UI.BLEND_MODE_DESTINATION_OVER was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_DIFFERENCE) {
		throw new Error('Ti.UI.BLEND_MODE_DIFFERENCE was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_EXCLUSION) {
		throw new Error('Ti.UI.BLEND_MODE_EXCLUSION was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_HARD_LIGHT) {
		throw new Error('Ti.UI.BLEND_MODE_HARD_LIGHT was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_HUE) {
		throw new Error('Ti.UI.BLEND_MODE_HUE was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_LIGHTEN) {
		throw new Error('Ti.UI.BLEND_MODE_LIGHTEN was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_LUMINOSITY) {
		throw new Error('Ti.UI.BLEND_MODE_LUMINOSITY was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_MULTIPLY) {
		throw new Error('Ti.UI.BLEND_MODE_MULTIPLY was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_NORMAL) {
		throw new Error('Ti.UI.BLEND_MODE_NORMAL was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_OVERLAY) {
		throw new Error('Ti.UI.BLEND_MODE_OVERLAY was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_PLUS_DARKER) {
		throw new Error('Ti.UI.BLEND_MODE_PLUS_DARKER was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_PLUS_LIGHTER) {
		throw new Error('Ti.UI.BLEND_MODE_PLUS_LIGHTER was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_SATURATION) {
		throw new Error('Ti.UI.BLEND_MODE_SATURATION was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_SCREEN) {
		throw new Error('Ti.UI.BLEND_MODE_SCREEN was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_SOFT_LIGHT) {
		throw new Error('Ti.UI.BLEND_MODE_SOFT_LIGHT was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_SOURCE_ATOP) {
		throw new Error('Ti.UI.BLEND_MODE_SOURCE_ATOP was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_SOURCE_IN) {
		throw new Error('Ti.UI.BLEND_MODE_SOURCE_IN was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_SOURCE_OUT) {
		throw new Error('Ti.UI.BLEND_MODE_SOURCE_OUT was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_XOR) {
		throw new Error('Ti.UI.BLEND_MODE_XOR was deprecated, since 1.8.0');
	}
	this.EXTEND_EDGE_ALL = properties.EXTEND_EDGE_ALL || undefined;
	this.EXTEND_EDGE_BOTTOM = properties.EXTEND_EDGE_BOTTOM || undefined;
	this.EXTEND_EDGE_LEFT = properties.EXTEND_EDGE_LEFT || undefined;
	this.EXTEND_EDGE_NONE = properties.EXTEND_EDGE_NONE || undefined;
	this.EXTEND_EDGE_RIGHT = properties.EXTEND_EDGE_RIGHT || undefined;
	this.EXTEND_EDGE_TOP = properties.EXTEND_EDGE_TOP || undefined;
	this.FACE_DOWN = properties.FACE_DOWN || undefined;
	this.FACE_UP = properties.FACE_UP || undefined;
	this.FILL = properties.FILL || undefined;
	this.INHERIT = properties.INHERIT || undefined;
	this.INPUT_BORDERSTYLE_BEZEL = properties.INPUT_BORDERSTYLE_BEZEL || undefined;
	this.INPUT_BORDERSTYLE_LINE = properties.INPUT_BORDERSTYLE_LINE || undefined;
	this.INPUT_BORDERSTYLE_NONE = properties.INPUT_BORDERSTYLE_NONE || undefined;
	this.INPUT_BORDERSTYLE_ROUNDED = properties.INPUT_BORDERSTYLE_ROUNDED || undefined;
	this.INPUT_BUTTONMODE_ALWAYS = properties.INPUT_BUTTONMODE_ALWAYS || undefined;
	this.INPUT_BUTTONMODE_NEVER = properties.INPUT_BUTTONMODE_NEVER || undefined;
	this.INPUT_BUTTONMODE_ONBLUR = properties.INPUT_BUTTONMODE_ONBLUR || undefined;
	this.INPUT_BUTTONMODE_ONFOCUS = properties.INPUT_BUTTONMODE_ONFOCUS || undefined;
	this.KEYBOARD_APPEARANCE_ALERT = properties.KEYBOARD_APPEARANCE_ALERT || undefined;
	this.KEYBOARD_APPEARANCE_DEFAULT = properties.KEYBOARD_APPEARANCE_DEFAULT || undefined;
	this.KEYBOARD_ASCII = properties.KEYBOARD_ASCII || undefined;
	this.KEYBOARD_DECIMAL_PAD = properties.KEYBOARD_DECIMAL_PAD || undefined;
	this.KEYBOARD_DEFAULT = properties.KEYBOARD_DEFAULT || undefined;
	this.KEYBOARD_EMAIL = properties.KEYBOARD_EMAIL || undefined;
	this.KEYBOARD_NAMEPHONE_PAD = properties.KEYBOARD_NAMEPHONE_PAD || undefined;
	this.KEYBOARD_NUMBERS_PUNCTUATION = properties.KEYBOARD_NUMBERS_PUNCTUATION || undefined;
	this.KEYBOARD_NUMBER_PAD = properties.KEYBOARD_NUMBER_PAD || undefined;
	this.KEYBOARD_PHONE_PAD = properties.KEYBOARD_PHONE_PAD || undefined;
	this.KEYBOARD_URL = properties.KEYBOARD_URL || undefined;
	this.LANDSCAPE_LEFT = properties.LANDSCAPE_LEFT || undefined;
	this.LANDSCAPE_RIGHT = properties.LANDSCAPE_RIGHT || undefined;
	this.LIST_ACCESSORY_TYPE_CHECKMARK = properties.LIST_ACCESSORY_TYPE_CHECKMARK || undefined;
	this.LIST_ACCESSORY_TYPE_DETAIL = properties.LIST_ACCESSORY_TYPE_DETAIL || undefined;
	this.LIST_ACCESSORY_TYPE_DISCLOSURE = properties.LIST_ACCESSORY_TYPE_DISCLOSURE || undefined;
	this.LIST_ACCESSORY_TYPE_NONE = properties.LIST_ACCESSORY_TYPE_NONE || undefined;
	this.LIST_ITEM_TEMPLATE_CONTACTS = properties.LIST_ITEM_TEMPLATE_CONTACTS || undefined;
	this.LIST_ITEM_TEMPLATE_DEFAULT = properties.LIST_ITEM_TEMPLATE_DEFAULT || undefined;
	this.LIST_ITEM_TEMPLATE_SETTINGS = properties.LIST_ITEM_TEMPLATE_SETTINGS || undefined;
	this.LIST_ITEM_TEMPLATE_SUBTITLE = properties.LIST_ITEM_TEMPLATE_SUBTITLE || undefined;
	this.NOTIFICATION_DURATION_LONG = properties.NOTIFICATION_DURATION_LONG || undefined;
	this.NOTIFICATION_DURATION_SHORT = properties.NOTIFICATION_DURATION_SHORT || undefined;
	this.PICKER_TYPE_COUNT_DOWN_TIMER = properties.PICKER_TYPE_COUNT_DOWN_TIMER || undefined;
	this.PICKER_TYPE_DATE = properties.PICKER_TYPE_DATE || undefined;
	this.PICKER_TYPE_DATE_AND_TIME = properties.PICKER_TYPE_DATE_AND_TIME || undefined;
	this.PICKER_TYPE_PLAIN = properties.PICKER_TYPE_PLAIN || undefined;
	this.PICKER_TYPE_TIME = properties.PICKER_TYPE_TIME || undefined;
	this.PORTRAIT = properties.PORTRAIT || undefined;
	this.RETURNKEY_DEFAULT = properties.RETURNKEY_DEFAULT || undefined;
	this.RETURNKEY_DONE = properties.RETURNKEY_DONE || undefined;
	this.RETURNKEY_EMERGENCY_CALL = properties.RETURNKEY_EMERGENCY_CALL || undefined;
	this.RETURNKEY_GO = properties.RETURNKEY_GO || undefined;
	this.RETURNKEY_GOOGLE = properties.RETURNKEY_GOOGLE || undefined;
	this.RETURNKEY_JOIN = properties.RETURNKEY_JOIN || undefined;
	this.RETURNKEY_NEXT = properties.RETURNKEY_NEXT || undefined;
	this.RETURNKEY_ROUTE = properties.RETURNKEY_ROUTE || undefined;
	this.RETURNKEY_SEARCH = properties.RETURNKEY_SEARCH || undefined;
	this.RETURNKEY_SEND = properties.RETURNKEY_SEND || undefined;
	this.RETURNKEY_YAHOO = properties.RETURNKEY_YAHOO || undefined;
	this.SIZE = properties.SIZE || undefined;
	this.TEXT_ALIGNMENT_CENTER = properties.TEXT_ALIGNMENT_CENTER || undefined;
	this.TEXT_ALIGNMENT_LEFT = properties.TEXT_ALIGNMENT_LEFT || undefined;
	this.TEXT_ALIGNMENT_RIGHT = properties.TEXT_ALIGNMENT_RIGHT || undefined;
	this.TEXT_AUTOCAPITALIZATION_ALL = properties.TEXT_AUTOCAPITALIZATION_ALL || undefined;
	this.TEXT_AUTOCAPITALIZATION_NONE = properties.TEXT_AUTOCAPITALIZATION_NONE || undefined;
	this.TEXT_AUTOCAPITALIZATION_SENTENCES = properties.TEXT_AUTOCAPITALIZATION_SENTENCES || undefined;
	this.TEXT_AUTOCAPITALIZATION_WORDS = properties.TEXT_AUTOCAPITALIZATION_WORDS || undefined;
	this.TEXT_STYLE_BODY = properties.TEXT_STYLE_BODY || undefined;
	this.TEXT_STYLE_CAPTION1 = properties.TEXT_STYLE_CAPTION1 || undefined;
	this.TEXT_STYLE_CAPTION2 = properties.TEXT_STYLE_CAPTION2 || undefined;
	this.TEXT_STYLE_FOOTNOTE = properties.TEXT_STYLE_FOOTNOTE || undefined;
	this.TEXT_STYLE_HEADLINE = properties.TEXT_STYLE_HEADLINE || undefined;
	this.TEXT_STYLE_SUBHEADLINE = properties.TEXT_STYLE_SUBHEADLINE || undefined;
	this.TEXT_VERTICAL_ALIGNMENT_BOTTOM = properties.TEXT_VERTICAL_ALIGNMENT_BOTTOM || undefined;
	this.TEXT_VERTICAL_ALIGNMENT_CENTER = properties.TEXT_VERTICAL_ALIGNMENT_CENTER || undefined;
	this.TEXT_VERTICAL_ALIGNMENT_TOP = properties.TEXT_VERTICAL_ALIGNMENT_TOP || undefined;
	this.UNIT_CM = properties.UNIT_CM || undefined;
	this.UNIT_DIP = properties.UNIT_DIP || undefined;
	this.UNIT_IN = properties.UNIT_IN || undefined;
	this.UNIT_MM = properties.UNIT_MM || undefined;
	this.UNIT_PX = properties.UNIT_PX || undefined;
	this.UNKNOWN = properties.UNKNOWN || undefined;
	this.UPSIDE_PORTRAIT = properties.UPSIDE_PORTRAIT || undefined;
	this.URL_ERROR_AUTHENTICATION = properties.URL_ERROR_AUTHENTICATION || undefined;
	this.URL_ERROR_BAD_URL = properties.URL_ERROR_BAD_URL || undefined;
	this.URL_ERROR_CONNECT = properties.URL_ERROR_CONNECT || undefined;
	this.URL_ERROR_FILE = properties.URL_ERROR_FILE || undefined;
	this.URL_ERROR_FILE_NOT_FOUND = properties.URL_ERROR_FILE_NOT_FOUND || undefined;
	this.URL_ERROR_HOST_LOOKUP = properties.URL_ERROR_HOST_LOOKUP || undefined;
	this.URL_ERROR_REDIRECT_LOOP = properties.URL_ERROR_REDIRECT_LOOP || undefined;
	this.URL_ERROR_SSL_FAILED = properties.URL_ERROR_SSL_FAILED || undefined;
	this.URL_ERROR_TIMEOUT = properties.URL_ERROR_TIMEOUT || undefined;
	this.URL_ERROR_UNKNOWN = properties.URL_ERROR_UNKNOWN || undefined;
	this.URL_ERROR_UNSUPPORTED_SCHEME = properties.URL_ERROR_UNSUPPORTED_SCHEME || undefined;
	this.apiName = 'Ti.UI';
	this.backgroundColor = properties.backgroundColor || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.currentTab = properties.currentTab || undefined;
	this.currentWindow = properties.currentWindow || undefined;
	if (properties.orientation) {
		throw new Error('Ti.UI.orientation was deprecated, since 1.7.2');
	}
	return this;
}
UI.prototype.addEventListener = function () {
};
UI.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
UI.prototype.convertUnits = function () {
	return 0;
};
UI.prototype.create2DMatrix = function (params) {
	var TwoDMatrix = require('./UI/2DMatrix');
	return TwoDMatrix(params);
};
UI.prototype.create3DMatrix = function (params) {
	var ThreeDMatrix = require('./UI/3DMatrix');
	return ThreeDMatrix(params);
};
UI.prototype.createActivityIndicator = function (params) {
	var ActivityIndicator = require('./UI/ActivityIndicator');
	return ActivityIndicator(params);
};
UI.prototype.createAlertDialog = function (params) {
	var AlertDialog = require('./UI/AlertDialog');
	return AlertDialog(params);
};
UI.prototype.createAnimation = function (params) {
	var Animation = require('./UI/Animation');
	return Animation(params);
};
UI.prototype.createButton = function (params) {
	var Button = require('./UI/Button');
	return Button(params);
};
UI.prototype.createButtonBar = function (params) {
	var ButtonBar = require('./UI/ButtonBar');
	return ButtonBar(params);
};
UI.prototype.createCoverFlowView = function () {
	throw new Error('Ti.UI.createCoverFlowView was deprecated, since 1.8.0');
};
UI.prototype.createDashboardItem = function (params) {
	var DashboardItem = require('./UI/DashboardItem');
	return DashboardItem(params);
};
UI.prototype.createDashboardView = function (params) {
	var DashboardView = require('./UI/DashboardView');
	return DashboardView(params);
};
UI.prototype.createEmailDialog = function (params) {
	var EmailDialog = require('./UI/EmailDialog');
	return EmailDialog(params);
};
UI.prototype.createImageView = function (params) {
	var ImageView = require('./UI/ImageView');
	return ImageView(params);
};
UI.prototype.createLabel = function (params) {
	var Label = require('./UI/Label');
	return Label(params);
};
UI.prototype.createListSection = function (params) {
	var ListSection = require('./UI/ListSection');
	return ListSection(params);
};
UI.prototype.createListView = function (params) {
	var ListView = require('./UI/ListView');
	return ListView(params);
};
UI.prototype.createMaskedImage = function (params) {
	var MaskedImage = require('./UI/MaskedImage');
	return MaskedImage(params);
};
UI.prototype.createNotification = function (params) {
	var Notification = require('./UI/Notification');
	return Notification(params);
};
UI.prototype.createOptionDialog = function (params) {
	var OptionDialog = require('./UI/OptionDialog');
	return OptionDialog(params);
};
UI.prototype.createPicker = function (params) {
	var Picker = require('./UI/Picker');
	return Picker(params);
};
UI.prototype.createPickerColumn = function (params) {
	var PickerColumn = require('./UI/PickerColumn');
	return PickerColumn(params);
};
UI.prototype.createPickerRow = function (params) {
	var PickerRow = require('./UI/PickerRow');
	return PickerRow(params);
};
UI.prototype.createProgressBar = function (params) {
	var ProgressBar = require('./UI/ProgressBar');
	return ProgressBar(params);
};
UI.prototype.createRefreshControl = function (params) {
	var RefreshControl = require('./UI/RefreshControl');
	return RefreshControl(params);
};
UI.prototype.createSMSDialog = function (params) {
	var SMSDialog = require('./UI/SMSDialog');
	return SMSDialog(params);
};
UI.prototype.createScrollView = function (params) {
	var ScrollView = require('./UI/ScrollView');
	return ScrollView(params);
};
UI.prototype.createScrollableView = function (params) {
	var ScrollableView = require('./UI/ScrollableView');
	return ScrollableView(params);
};
UI.prototype.createSearchBar = function (params) {
	var SearchBar = require('./UI/SearchBar');
	return SearchBar(params);
};
UI.prototype.createSlider = function (params) {
	var Slider = require('./UI/Slider');
	return Slider(params);
};
UI.prototype.createSwitch = function (params) {
	var Switch = require('./UI/Switch');
	return Switch(params);
};
UI.prototype.createTab = function (params) {
	var Tab = require('./UI/Tab');
	return Tab(params);
};
UI.prototype.createTabGroup = function (params) {
	var TabGroup = require('./UI/TabGroup');
	return TabGroup(params);
};
UI.prototype.createTabbedBar = function () {
	throw new Error('Ti.UI.createTabbedBar was deprecated, since 1.8.0');
};
UI.prototype.createTableView = function (params) {
	var TableView = require('./UI/TableView');
	return TableView(params);
};
UI.prototype.createTableViewRow = function (params) {
	var TableViewRow = require('./UI/TableViewRow');
	return TableViewRow(params);
};
UI.prototype.createTableViewSection = function (params) {
	var TableViewSection = require('./UI/TableViewSection');
	return TableViewSection(params);
};
UI.prototype.createTextArea = function (params) {
	var TextArea = require('./UI/TextArea');
	return TextArea(params);
};
UI.prototype.createTextField = function (params) {
	var TextField = require('./UI/TextField');
	return TextField(params);
};
UI.prototype.createToolbar = function () {
	throw new Error('Ti.UI.createToolbar was deprecated, since 1.8.0');
};
UI.prototype.createView = function (params) {
	var View = require('./UI/View');
	return View(params);
};
UI.prototype.createWebView = function (params) {
	var WebView = require('./UI/WebView');
	return WebView(params);
};
UI.prototype.createWindow = function (params) {
	var Window = require('./UI/Window');
	return Window(params);
};
UI.prototype.fireEvent = function () {
};
UI.prototype.getApiName = function () {
	return '';
};
UI.prototype.getBackgroundColor = function () {
	return '';
};
UI.prototype.getBackgroundImage = function () {
	return '';
};
UI.prototype.getBubbleParent = function () {
	return true;
};
UI.prototype.getCurrentTab = function () {
	return {};
};
UI.prototype.getCurrentWindow = function () {
	return {};
};
UI.prototype.getOrientation = function () {
	throw new Error('Ti.UI.getOrientation was deprecated, since 1.7.2');
};
UI.prototype.removeEventListener = function () {
};
UI.prototype.setBackgroundColor = function () {
};
UI.prototype.setBackgroundImage = function () {
};
UI.prototype.setBubbleParent = function () {
};
UI.prototype.setCurrentTab = function () {
};
UI.prototype.setOrientation = function () {
	throw new Error('Ti.UI.setOrientation was deprecated, since 1.7.2');
};
module.exports = function (properties) {
	return new UI(properties);
};