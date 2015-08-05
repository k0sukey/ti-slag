var crypto = require('crypto');
function SystemIcon(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'ACCEPT',
			'ACCOUNT',
			'ADD',
			'ADDFRIEND',
			'ADMIN',
			'ALIGNCENTER',
			'ALIGNLEFT',
			'ALIGNRIGHT',
			'ALLAPPS',
			'ATTACH',
			'ATTACHCAMERA',
			'AUDIO',
			'BACK',
			'BACKTOWINDOW',
			'BLOCKCONTACT',
			'BOLD',
			'BOOKMARKS',
			'BROWSEPHOTOS',
			'BULLETS',
			'CALCULATOR',
			'CALENDAR',
			'CALENDARDAY',
			'CALENDARREPLY',
			'CALENDARWEEK',
			'CAMERA',
			'CANCEL',
			'CAPTION',
			'CELLPHONE',
			'CHARACTER',
			'CLEAR',
			'CLEARSELECTION',
			'CLOCK',
			'CLOSEDCAPTION',
			'CLOSEPANE',
			'COMMENT',
			'CONTACT',
			'CONTACT2',
			'CONTACTINFO',
			'CONTACTPRESENCE',
			'COPY',
			'CROP',
			'CUT',
			'DELETE',
			'DIRECTIONS',
			'DISABLEUPDATES',
			'DISCONNECTDRIVE',
			'DISLIKE',
			'DOCKBOTTOM',
			'DOCKLEFT',
			'DOCKRIGHT',
			'DOCUMENT',
			'DOWNLOAD',
			'EDIT',
			'EMOJI',
			'EMOJI2',
			'FAVORITE',
			'FILTER',
			'FIND',
			'FLAG',
			'FOLDER',
			'FONT',
			'FONTCOLOR',
			'FONTDECREASE',
			'FONTINCREASE',
			'FONTSIZE',
			'FORWARD',
			'FOURBARS',
			'FULLSCREEN',
			'GLOBE',
			'GO',
			'GOTOSTART',
			'GOTOTODAY',
			'HANGUP',
			'HELP',
			'HIDEBCC',
			'HIGHLIGHT',
			'HOME',
			'IMPORT',
			'IMPORTALL',
			'IMPORTANT',
			'ITALIC',
			'KEYBOARD',
			'LEAVECHAT',
			'LIBRARY',
			'LIKE',
			'LIKEDISLIKE',
			'LINK',
			'LIST',
			'MAIL',
			'MAILFILLED',
			'MAILFORWARD',
			'MAILREPLY',
			'MAILREPLYALL',
			'MANAGE',
			'MAP',
			'MAPDRIVE',
			'MAPPIN',
			'MEMO',
			'MESSAGE',
			'MICROPHONE',
			'MORE',
			'MOVETOFOLDER',
			'MUSICINFO',
			'MUTE',
			'NEWFOLDER',
			'NEWWINDOW',
			'NEXT',
			'ONEBAR',
			'OPENFILE',
			'OPENLOCAL',
			'OPENPANE',
			'OPENWITH',
			'ORIENTATION',
			'OTHERUSER',
			'OUTLINESTAR',
			'PAGE',
			'PAGE2',
			'PASTE',
			'PAUSE',
			'PEOPLE',
			'PERMISSIONS',
			'PHONE',
			'PHONEBOOK',
			'PICTURES',
			'PIN',
			'PLACEHOLDER',
			'PLAY',
			'POSTUPDATE',
			'PREVIEW',
			'PREVIEWLINK',
			'PREVIOUS',
			'PRIORITY',
			'PROTECTEDDOCUMENT',
			'READ',
			'REDO',
			'REFRESH',
			'REMOTE',
			'REMOVE',
			'RENAME',
			'REPAIR',
			'REPEATALL',
			'REPEATONE',
			'REPORTHACKED',
			'RESHARE',
			'ROTATE',
			'ROTATECAMERA',
			'SAVE',
			'SAVELOCAL',
			'SCAN',
			'SELECTALL',
			'SEND',
			'SETLOCKSCREEN',
			'SETTILE',
			'SETTING',
			'SHOP',
			'SHOWBCC',
			'SHOWRESULTS',
			'SHUFFLE',
			'SLIDESHOW',
			'SOLIDSTAR',
			'SORT',
			'STOP',
			'STOPSLIDESHOW',
			'STREET',
			'SWITCH',
			'SWITCHAPPS',
			'SYNC',
			'SYNCFOLDER',
			'TAG',
			'TARGET',
			'THREEBARS',
			'TOUCHPOINTER',
			'TRIM',
			'TWOBARS',
			'TWOPAGE',
			'UNDERLINE',
			'UNDO',
			'UNFAVORITE',
			'UNPIN',
			'UNSYNCFOLDER',
			'UP',
			'UPLOAD',
			'VIDEO',
			'VIDEOCHAT',
			'VIEW',
			'VIEWALL',
			'VOLUME',
			'WEBCAM',
			'WORLD',
			'ZEROBARS',
			'ZOOM',
			'ZOOMIN',
			'ZOOMOUT',
			'id'
		];
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG_PROPERTIES.ACCEPT) {
		throw new Error('Ti.UI.Windows.SystemIcon.ACCEPT is read only property');
	}
	this.ACCEPT = 0;
	if (__SLAG_PROPERTIES.ACCOUNT) {
		throw new Error('Ti.UI.Windows.SystemIcon.ACCOUNT is read only property');
	}
	this.ACCOUNT = 0;
	if (__SLAG_PROPERTIES.ADD) {
		throw new Error('Ti.UI.Windows.SystemIcon.ADD is read only property');
	}
	this.ADD = 0;
	if (__SLAG_PROPERTIES.ADDFRIEND) {
		throw new Error('Ti.UI.Windows.SystemIcon.ADDFRIEND is read only property');
	}
	this.ADDFRIEND = 0;
	if (__SLAG_PROPERTIES.ADMIN) {
		throw new Error('Ti.UI.Windows.SystemIcon.ADMIN is read only property');
	}
	this.ADMIN = 0;
	if (__SLAG_PROPERTIES.ALIGNCENTER) {
		throw new Error('Ti.UI.Windows.SystemIcon.ALIGNCENTER is read only property');
	}
	this.ALIGNCENTER = 0;
	if (__SLAG_PROPERTIES.ALIGNLEFT) {
		throw new Error('Ti.UI.Windows.SystemIcon.ALIGNLEFT is read only property');
	}
	this.ALIGNLEFT = 0;
	if (__SLAG_PROPERTIES.ALIGNRIGHT) {
		throw new Error('Ti.UI.Windows.SystemIcon.ALIGNRIGHT is read only property');
	}
	this.ALIGNRIGHT = 0;
	if (__SLAG_PROPERTIES.ALLAPPS) {
		throw new Error('Ti.UI.Windows.SystemIcon.ALLAPPS is read only property');
	}
	this.ALLAPPS = 0;
	if (__SLAG_PROPERTIES.ATTACH) {
		throw new Error('Ti.UI.Windows.SystemIcon.ATTACH is read only property');
	}
	this.ATTACH = 0;
	if (__SLAG_PROPERTIES.ATTACHCAMERA) {
		throw new Error('Ti.UI.Windows.SystemIcon.ATTACHCAMERA is read only property');
	}
	this.ATTACHCAMERA = 0;
	if (__SLAG_PROPERTIES.AUDIO) {
		throw new Error('Ti.UI.Windows.SystemIcon.AUDIO is read only property');
	}
	this.AUDIO = 0;
	if (__SLAG_PROPERTIES.BACK) {
		throw new Error('Ti.UI.Windows.SystemIcon.BACK is read only property');
	}
	this.BACK = 0;
	if (__SLAG_PROPERTIES.BACKTOWINDOW) {
		throw new Error('Ti.UI.Windows.SystemIcon.BACKTOWINDOW is read only property');
	}
	this.BACKTOWINDOW = 0;
	if (__SLAG_PROPERTIES.BLOCKCONTACT) {
		throw new Error('Ti.UI.Windows.SystemIcon.BLOCKCONTACT is read only property');
	}
	this.BLOCKCONTACT = 0;
	if (__SLAG_PROPERTIES.BOLD) {
		throw new Error('Ti.UI.Windows.SystemIcon.BOLD is read only property');
	}
	this.BOLD = 0;
	if (__SLAG_PROPERTIES.BOOKMARKS) {
		throw new Error('Ti.UI.Windows.SystemIcon.BOOKMARKS is read only property');
	}
	this.BOOKMARKS = 0;
	if (__SLAG_PROPERTIES.BROWSEPHOTOS) {
		throw new Error('Ti.UI.Windows.SystemIcon.BROWSEPHOTOS is read only property');
	}
	this.BROWSEPHOTOS = 0;
	if (__SLAG_PROPERTIES.BULLETS) {
		throw new Error('Ti.UI.Windows.SystemIcon.BULLETS is read only property');
	}
	this.BULLETS = 0;
	if (__SLAG_PROPERTIES.CALCULATOR) {
		throw new Error('Ti.UI.Windows.SystemIcon.CALCULATOR is read only property');
	}
	this.CALCULATOR = 0;
	if (__SLAG_PROPERTIES.CALENDAR) {
		throw new Error('Ti.UI.Windows.SystemIcon.CALENDAR is read only property');
	}
	this.CALENDAR = 0;
	if (__SLAG_PROPERTIES.CALENDARDAY) {
		throw new Error('Ti.UI.Windows.SystemIcon.CALENDARDAY is read only property');
	}
	this.CALENDARDAY = 0;
	if (__SLAG_PROPERTIES.CALENDARREPLY) {
		throw new Error('Ti.UI.Windows.SystemIcon.CALENDARREPLY is read only property');
	}
	this.CALENDARREPLY = 0;
	if (__SLAG_PROPERTIES.CALENDARWEEK) {
		throw new Error('Ti.UI.Windows.SystemIcon.CALENDARWEEK is read only property');
	}
	this.CALENDARWEEK = 0;
	if (__SLAG_PROPERTIES.CAMERA) {
		throw new Error('Ti.UI.Windows.SystemIcon.CAMERA is read only property');
	}
	this.CAMERA = 0;
	if (__SLAG_PROPERTIES.CANCEL) {
		throw new Error('Ti.UI.Windows.SystemIcon.CANCEL is read only property');
	}
	this.CANCEL = 0;
	if (__SLAG_PROPERTIES.CAPTION) {
		throw new Error('Ti.UI.Windows.SystemIcon.CAPTION is read only property');
	}
	this.CAPTION = 0;
	if (__SLAG_PROPERTIES.CELLPHONE) {
		throw new Error('Ti.UI.Windows.SystemIcon.CELLPHONE is read only property');
	}
	this.CELLPHONE = 0;
	if (__SLAG_PROPERTIES.CHARACTER) {
		throw new Error('Ti.UI.Windows.SystemIcon.CHARACTER is read only property');
	}
	this.CHARACTER = 0;
	if (__SLAG_PROPERTIES.CLEAR) {
		throw new Error('Ti.UI.Windows.SystemIcon.CLEAR is read only property');
	}
	this.CLEAR = 0;
	if (__SLAG_PROPERTIES.CLEARSELECTION) {
		throw new Error('Ti.UI.Windows.SystemIcon.CLEARSELECTION is read only property');
	}
	this.CLEARSELECTION = 0;
	if (__SLAG_PROPERTIES.CLOCK) {
		throw new Error('Ti.UI.Windows.SystemIcon.CLOCK is read only property');
	}
	this.CLOCK = 0;
	if (__SLAG_PROPERTIES.CLOSEDCAPTION) {
		throw new Error('Ti.UI.Windows.SystemIcon.CLOSEDCAPTION is read only property');
	}
	this.CLOSEDCAPTION = 0;
	if (__SLAG_PROPERTIES.CLOSEPANE) {
		throw new Error('Ti.UI.Windows.SystemIcon.CLOSEPANE is read only property');
	}
	this.CLOSEPANE = 0;
	if (__SLAG_PROPERTIES.COMMENT) {
		throw new Error('Ti.UI.Windows.SystemIcon.COMMENT is read only property');
	}
	this.COMMENT = 0;
	if (__SLAG_PROPERTIES.CONTACT) {
		throw new Error('Ti.UI.Windows.SystemIcon.CONTACT is read only property');
	}
	this.CONTACT = 0;
	if (__SLAG_PROPERTIES.CONTACT2) {
		throw new Error('Ti.UI.Windows.SystemIcon.CONTACT2 is read only property');
	}
	this.CONTACT2 = 0;
	if (__SLAG_PROPERTIES.CONTACTINFO) {
		throw new Error('Ti.UI.Windows.SystemIcon.CONTACTINFO is read only property');
	}
	this.CONTACTINFO = 0;
	if (__SLAG_PROPERTIES.CONTACTPRESENCE) {
		throw new Error('Ti.UI.Windows.SystemIcon.CONTACTPRESENCE is read only property');
	}
	this.CONTACTPRESENCE = 0;
	if (__SLAG_PROPERTIES.COPY) {
		throw new Error('Ti.UI.Windows.SystemIcon.COPY is read only property');
	}
	this.COPY = 0;
	if (__SLAG_PROPERTIES.CROP) {
		throw new Error('Ti.UI.Windows.SystemIcon.CROP is read only property');
	}
	this.CROP = 0;
	if (__SLAG_PROPERTIES.CUT) {
		throw new Error('Ti.UI.Windows.SystemIcon.CUT is read only property');
	}
	this.CUT = 0;
	if (__SLAG_PROPERTIES.DELETE) {
		throw new Error('Ti.UI.Windows.SystemIcon.DELETE is read only property');
	}
	this.DELETE = 0;
	if (__SLAG_PROPERTIES.DIRECTIONS) {
		throw new Error('Ti.UI.Windows.SystemIcon.DIRECTIONS is read only property');
	}
	this.DIRECTIONS = 0;
	if (__SLAG_PROPERTIES.DISABLEUPDATES) {
		throw new Error('Ti.UI.Windows.SystemIcon.DISABLEUPDATES is read only property');
	}
	this.DISABLEUPDATES = 0;
	if (__SLAG_PROPERTIES.DISCONNECTDRIVE) {
		throw new Error('Ti.UI.Windows.SystemIcon.DISCONNECTDRIVE is read only property');
	}
	this.DISCONNECTDRIVE = 0;
	if (__SLAG_PROPERTIES.DISLIKE) {
		throw new Error('Ti.UI.Windows.SystemIcon.DISLIKE is read only property');
	}
	this.DISLIKE = 0;
	if (__SLAG_PROPERTIES.DOCKBOTTOM) {
		throw new Error('Ti.UI.Windows.SystemIcon.DOCKBOTTOM is read only property');
	}
	this.DOCKBOTTOM = 0;
	if (__SLAG_PROPERTIES.DOCKLEFT) {
		throw new Error('Ti.UI.Windows.SystemIcon.DOCKLEFT is read only property');
	}
	this.DOCKLEFT = 0;
	if (__SLAG_PROPERTIES.DOCKRIGHT) {
		throw new Error('Ti.UI.Windows.SystemIcon.DOCKRIGHT is read only property');
	}
	this.DOCKRIGHT = 0;
	if (__SLAG_PROPERTIES.DOCUMENT) {
		throw new Error('Ti.UI.Windows.SystemIcon.DOCUMENT is read only property');
	}
	this.DOCUMENT = 0;
	if (__SLAG_PROPERTIES.DOWNLOAD) {
		throw new Error('Ti.UI.Windows.SystemIcon.DOWNLOAD is read only property');
	}
	this.DOWNLOAD = 0;
	if (__SLAG_PROPERTIES.EDIT) {
		throw new Error('Ti.UI.Windows.SystemIcon.EDIT is read only property');
	}
	this.EDIT = 0;
	if (__SLAG_PROPERTIES.EMOJI) {
		throw new Error('Ti.UI.Windows.SystemIcon.EMOJI is read only property');
	}
	this.EMOJI = 0;
	if (__SLAG_PROPERTIES.EMOJI2) {
		throw new Error('Ti.UI.Windows.SystemIcon.EMOJI2 is read only property');
	}
	this.EMOJI2 = 0;
	if (__SLAG_PROPERTIES.FAVORITE) {
		throw new Error('Ti.UI.Windows.SystemIcon.FAVORITE is read only property');
	}
	this.FAVORITE = 0;
	if (__SLAG_PROPERTIES.FILTER) {
		throw new Error('Ti.UI.Windows.SystemIcon.FILTER is read only property');
	}
	this.FILTER = 0;
	if (__SLAG_PROPERTIES.FIND) {
		throw new Error('Ti.UI.Windows.SystemIcon.FIND is read only property');
	}
	this.FIND = 0;
	if (__SLAG_PROPERTIES.FLAG) {
		throw new Error('Ti.UI.Windows.SystemIcon.FLAG is read only property');
	}
	this.FLAG = 0;
	if (__SLAG_PROPERTIES.FOLDER) {
		throw new Error('Ti.UI.Windows.SystemIcon.FOLDER is read only property');
	}
	this.FOLDER = 0;
	if (__SLAG_PROPERTIES.FONT) {
		throw new Error('Ti.UI.Windows.SystemIcon.FONT is read only property');
	}
	this.FONT = 0;
	if (__SLAG_PROPERTIES.FONTCOLOR) {
		throw new Error('Ti.UI.Windows.SystemIcon.FONTCOLOR is read only property');
	}
	this.FONTCOLOR = 0;
	if (__SLAG_PROPERTIES.FONTDECREASE) {
		throw new Error('Ti.UI.Windows.SystemIcon.FONTDECREASE is read only property');
	}
	this.FONTDECREASE = 0;
	if (__SLAG_PROPERTIES.FONTINCREASE) {
		throw new Error('Ti.UI.Windows.SystemIcon.FONTINCREASE is read only property');
	}
	this.FONTINCREASE = 0;
	if (__SLAG_PROPERTIES.FONTSIZE) {
		throw new Error('Ti.UI.Windows.SystemIcon.FONTSIZE is read only property');
	}
	this.FONTSIZE = 0;
	if (__SLAG_PROPERTIES.FORWARD) {
		throw new Error('Ti.UI.Windows.SystemIcon.FORWARD is read only property');
	}
	this.FORWARD = 0;
	if (__SLAG_PROPERTIES.FOURBARS) {
		throw new Error('Ti.UI.Windows.SystemIcon.FOURBARS is read only property');
	}
	this.FOURBARS = 0;
	if (__SLAG_PROPERTIES.FULLSCREEN) {
		throw new Error('Ti.UI.Windows.SystemIcon.FULLSCREEN is read only property');
	}
	this.FULLSCREEN = 0;
	if (__SLAG_PROPERTIES.GLOBE) {
		throw new Error('Ti.UI.Windows.SystemIcon.GLOBE is read only property');
	}
	this.GLOBE = 0;
	if (__SLAG_PROPERTIES.GO) {
		throw new Error('Ti.UI.Windows.SystemIcon.GO is read only property');
	}
	this.GO = 0;
	if (__SLAG_PROPERTIES.GOTOSTART) {
		throw new Error('Ti.UI.Windows.SystemIcon.GOTOSTART is read only property');
	}
	this.GOTOSTART = 0;
	if (__SLAG_PROPERTIES.GOTOTODAY) {
		throw new Error('Ti.UI.Windows.SystemIcon.GOTOTODAY is read only property');
	}
	this.GOTOTODAY = 0;
	if (__SLAG_PROPERTIES.HANGUP) {
		throw new Error('Ti.UI.Windows.SystemIcon.HANGUP is read only property');
	}
	this.HANGUP = 0;
	if (__SLAG_PROPERTIES.HELP) {
		throw new Error('Ti.UI.Windows.SystemIcon.HELP is read only property');
	}
	this.HELP = 0;
	if (__SLAG_PROPERTIES.HIDEBCC) {
		throw new Error('Ti.UI.Windows.SystemIcon.HIDEBCC is read only property');
	}
	this.HIDEBCC = 0;
	if (__SLAG_PROPERTIES.HIGHLIGHT) {
		throw new Error('Ti.UI.Windows.SystemIcon.HIGHLIGHT is read only property');
	}
	this.HIGHLIGHT = 0;
	if (__SLAG_PROPERTIES.HOME) {
		throw new Error('Ti.UI.Windows.SystemIcon.HOME is read only property');
	}
	this.HOME = 0;
	if (__SLAG_PROPERTIES.IMPORT) {
		throw new Error('Ti.UI.Windows.SystemIcon.IMPORT is read only property');
	}
	this.IMPORT = 0;
	if (__SLAG_PROPERTIES.IMPORTALL) {
		throw new Error('Ti.UI.Windows.SystemIcon.IMPORTALL is read only property');
	}
	this.IMPORTALL = 0;
	if (__SLAG_PROPERTIES.IMPORTANT) {
		throw new Error('Ti.UI.Windows.SystemIcon.IMPORTANT is read only property');
	}
	this.IMPORTANT = 0;
	if (__SLAG_PROPERTIES.ITALIC) {
		throw new Error('Ti.UI.Windows.SystemIcon.ITALIC is read only property');
	}
	this.ITALIC = 0;
	if (__SLAG_PROPERTIES.KEYBOARD) {
		throw new Error('Ti.UI.Windows.SystemIcon.KEYBOARD is read only property');
	}
	this.KEYBOARD = 0;
	if (__SLAG_PROPERTIES.LEAVECHAT) {
		throw new Error('Ti.UI.Windows.SystemIcon.LEAVECHAT is read only property');
	}
	this.LEAVECHAT = 0;
	if (__SLAG_PROPERTIES.LIBRARY) {
		throw new Error('Ti.UI.Windows.SystemIcon.LIBRARY is read only property');
	}
	this.LIBRARY = 0;
	if (__SLAG_PROPERTIES.LIKE) {
		throw new Error('Ti.UI.Windows.SystemIcon.LIKE is read only property');
	}
	this.LIKE = 0;
	if (__SLAG_PROPERTIES.LIKEDISLIKE) {
		throw new Error('Ti.UI.Windows.SystemIcon.LIKEDISLIKE is read only property');
	}
	this.LIKEDISLIKE = 0;
	if (__SLAG_PROPERTIES.LINK) {
		throw new Error('Ti.UI.Windows.SystemIcon.LINK is read only property');
	}
	this.LINK = 0;
	if (__SLAG_PROPERTIES.LIST) {
		throw new Error('Ti.UI.Windows.SystemIcon.LIST is read only property');
	}
	this.LIST = 0;
	if (__SLAG_PROPERTIES.MAIL) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAIL is read only property');
	}
	this.MAIL = 0;
	if (__SLAG_PROPERTIES.MAILFILLED) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAILFILLED is read only property');
	}
	this.MAILFILLED = 0;
	if (__SLAG_PROPERTIES.MAILFORWARD) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAILFORWARD is read only property');
	}
	this.MAILFORWARD = 0;
	if (__SLAG_PROPERTIES.MAILREPLY) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAILREPLY is read only property');
	}
	this.MAILREPLY = 0;
	if (__SLAG_PROPERTIES.MAILREPLYALL) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAILREPLYALL is read only property');
	}
	this.MAILREPLYALL = 0;
	if (__SLAG_PROPERTIES.MANAGE) {
		throw new Error('Ti.UI.Windows.SystemIcon.MANAGE is read only property');
	}
	this.MANAGE = 0;
	if (__SLAG_PROPERTIES.MAP) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAP is read only property');
	}
	this.MAP = 0;
	if (__SLAG_PROPERTIES.MAPDRIVE) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAPDRIVE is read only property');
	}
	this.MAPDRIVE = 0;
	if (__SLAG_PROPERTIES.MAPPIN) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAPPIN is read only property');
	}
	this.MAPPIN = 0;
	if (__SLAG_PROPERTIES.MEMO) {
		throw new Error('Ti.UI.Windows.SystemIcon.MEMO is read only property');
	}
	this.MEMO = 0;
	if (__SLAG_PROPERTIES.MESSAGE) {
		throw new Error('Ti.UI.Windows.SystemIcon.MESSAGE is read only property');
	}
	this.MESSAGE = 0;
	if (__SLAG_PROPERTIES.MICROPHONE) {
		throw new Error('Ti.UI.Windows.SystemIcon.MICROPHONE is read only property');
	}
	this.MICROPHONE = 0;
	if (__SLAG_PROPERTIES.MORE) {
		throw new Error('Ti.UI.Windows.SystemIcon.MORE is read only property');
	}
	this.MORE = 0;
	if (__SLAG_PROPERTIES.MOVETOFOLDER) {
		throw new Error('Ti.UI.Windows.SystemIcon.MOVETOFOLDER is read only property');
	}
	this.MOVETOFOLDER = 0;
	if (__SLAG_PROPERTIES.MUSICINFO) {
		throw new Error('Ti.UI.Windows.SystemIcon.MUSICINFO is read only property');
	}
	this.MUSICINFO = 0;
	if (__SLAG_PROPERTIES.MUTE) {
		throw new Error('Ti.UI.Windows.SystemIcon.MUTE is read only property');
	}
	this.MUTE = 0;
	if (__SLAG_PROPERTIES.NEWFOLDER) {
		throw new Error('Ti.UI.Windows.SystemIcon.NEWFOLDER is read only property');
	}
	this.NEWFOLDER = 0;
	if (__SLAG_PROPERTIES.NEWWINDOW) {
		throw new Error('Ti.UI.Windows.SystemIcon.NEWWINDOW is read only property');
	}
	this.NEWWINDOW = 0;
	if (__SLAG_PROPERTIES.NEXT) {
		throw new Error('Ti.UI.Windows.SystemIcon.NEXT is read only property');
	}
	this.NEXT = 0;
	if (__SLAG_PROPERTIES.ONEBAR) {
		throw new Error('Ti.UI.Windows.SystemIcon.ONEBAR is read only property');
	}
	this.ONEBAR = 0;
	if (__SLAG_PROPERTIES.OPENFILE) {
		throw new Error('Ti.UI.Windows.SystemIcon.OPENFILE is read only property');
	}
	this.OPENFILE = 0;
	if (__SLAG_PROPERTIES.OPENLOCAL) {
		throw new Error('Ti.UI.Windows.SystemIcon.OPENLOCAL is read only property');
	}
	this.OPENLOCAL = 0;
	if (__SLAG_PROPERTIES.OPENPANE) {
		throw new Error('Ti.UI.Windows.SystemIcon.OPENPANE is read only property');
	}
	this.OPENPANE = 0;
	if (__SLAG_PROPERTIES.OPENWITH) {
		throw new Error('Ti.UI.Windows.SystemIcon.OPENWITH is read only property');
	}
	this.OPENWITH = 0;
	if (__SLAG_PROPERTIES.ORIENTATION) {
		throw new Error('Ti.UI.Windows.SystemIcon.ORIENTATION is read only property');
	}
	this.ORIENTATION = 0;
	if (__SLAG_PROPERTIES.OTHERUSER) {
		throw new Error('Ti.UI.Windows.SystemIcon.OTHERUSER is read only property');
	}
	this.OTHERUSER = 0;
	if (__SLAG_PROPERTIES.OUTLINESTAR) {
		throw new Error('Ti.UI.Windows.SystemIcon.OUTLINESTAR is read only property');
	}
	this.OUTLINESTAR = 0;
	if (__SLAG_PROPERTIES.PAGE) {
		throw new Error('Ti.UI.Windows.SystemIcon.PAGE is read only property');
	}
	this.PAGE = 0;
	if (__SLAG_PROPERTIES.PAGE2) {
		throw new Error('Ti.UI.Windows.SystemIcon.PAGE2 is read only property');
	}
	this.PAGE2 = 0;
	if (__SLAG_PROPERTIES.PASTE) {
		throw new Error('Ti.UI.Windows.SystemIcon.PASTE is read only property');
	}
	this.PASTE = 0;
	if (__SLAG_PROPERTIES.PAUSE) {
		throw new Error('Ti.UI.Windows.SystemIcon.PAUSE is read only property');
	}
	this.PAUSE = 0;
	if (__SLAG_PROPERTIES.PEOPLE) {
		throw new Error('Ti.UI.Windows.SystemIcon.PEOPLE is read only property');
	}
	this.PEOPLE = 0;
	if (__SLAG_PROPERTIES.PERMISSIONS) {
		throw new Error('Ti.UI.Windows.SystemIcon.PERMISSIONS is read only property');
	}
	this.PERMISSIONS = 0;
	if (__SLAG_PROPERTIES.PHONE) {
		throw new Error('Ti.UI.Windows.SystemIcon.PHONE is read only property');
	}
	this.PHONE = 0;
	if (__SLAG_PROPERTIES.PHONEBOOK) {
		throw new Error('Ti.UI.Windows.SystemIcon.PHONEBOOK is read only property');
	}
	this.PHONEBOOK = 0;
	if (__SLAG_PROPERTIES.PICTURES) {
		throw new Error('Ti.UI.Windows.SystemIcon.PICTURES is read only property');
	}
	this.PICTURES = 0;
	if (__SLAG_PROPERTIES.PIN) {
		throw new Error('Ti.UI.Windows.SystemIcon.PIN is read only property');
	}
	this.PIN = 0;
	if (__SLAG_PROPERTIES.PLACEHOLDER) {
		throw new Error('Ti.UI.Windows.SystemIcon.PLACEHOLDER is read only property');
	}
	this.PLACEHOLDER = 0;
	if (__SLAG_PROPERTIES.PLAY) {
		throw new Error('Ti.UI.Windows.SystemIcon.PLAY is read only property');
	}
	this.PLAY = 0;
	if (__SLAG_PROPERTIES.POSTUPDATE) {
		throw new Error('Ti.UI.Windows.SystemIcon.POSTUPDATE is read only property');
	}
	this.POSTUPDATE = 0;
	if (__SLAG_PROPERTIES.PREVIEW) {
		throw new Error('Ti.UI.Windows.SystemIcon.PREVIEW is read only property');
	}
	this.PREVIEW = 0;
	if (__SLAG_PROPERTIES.PREVIEWLINK) {
		throw new Error('Ti.UI.Windows.SystemIcon.PREVIEWLINK is read only property');
	}
	this.PREVIEWLINK = 0;
	if (__SLAG_PROPERTIES.PREVIOUS) {
		throw new Error('Ti.UI.Windows.SystemIcon.PREVIOUS is read only property');
	}
	this.PREVIOUS = 0;
	if (__SLAG_PROPERTIES.PRIORITY) {
		throw new Error('Ti.UI.Windows.SystemIcon.PRIORITY is read only property');
	}
	this.PRIORITY = 0;
	if (__SLAG_PROPERTIES.PROTECTEDDOCUMENT) {
		throw new Error('Ti.UI.Windows.SystemIcon.PROTECTEDDOCUMENT is read only property');
	}
	this.PROTECTEDDOCUMENT = 0;
	if (__SLAG_PROPERTIES.READ) {
		throw new Error('Ti.UI.Windows.SystemIcon.READ is read only property');
	}
	this.READ = 0;
	if (__SLAG_PROPERTIES.REDO) {
		throw new Error('Ti.UI.Windows.SystemIcon.REDO is read only property');
	}
	this.REDO = 0;
	if (__SLAG_PROPERTIES.REFRESH) {
		throw new Error('Ti.UI.Windows.SystemIcon.REFRESH is read only property');
	}
	this.REFRESH = 0;
	if (__SLAG_PROPERTIES.REMOTE) {
		throw new Error('Ti.UI.Windows.SystemIcon.REMOTE is read only property');
	}
	this.REMOTE = 0;
	if (__SLAG_PROPERTIES.REMOVE) {
		throw new Error('Ti.UI.Windows.SystemIcon.REMOVE is read only property');
	}
	this.REMOVE = 0;
	if (__SLAG_PROPERTIES.RENAME) {
		throw new Error('Ti.UI.Windows.SystemIcon.RENAME is read only property');
	}
	this.RENAME = 0;
	if (__SLAG_PROPERTIES.REPAIR) {
		throw new Error('Ti.UI.Windows.SystemIcon.REPAIR is read only property');
	}
	this.REPAIR = 0;
	if (__SLAG_PROPERTIES.REPEATALL) {
		throw new Error('Ti.UI.Windows.SystemIcon.REPEATALL is read only property');
	}
	this.REPEATALL = 0;
	if (__SLAG_PROPERTIES.REPEATONE) {
		throw new Error('Ti.UI.Windows.SystemIcon.REPEATONE is read only property');
	}
	this.REPEATONE = 0;
	if (__SLAG_PROPERTIES.REPORTHACKED) {
		throw new Error('Ti.UI.Windows.SystemIcon.REPORTHACKED is read only property');
	}
	this.REPORTHACKED = 0;
	if (__SLAG_PROPERTIES.RESHARE) {
		throw new Error('Ti.UI.Windows.SystemIcon.RESHARE is read only property');
	}
	this.RESHARE = 0;
	if (__SLAG_PROPERTIES.ROTATE) {
		throw new Error('Ti.UI.Windows.SystemIcon.ROTATE is read only property');
	}
	this.ROTATE = 0;
	if (__SLAG_PROPERTIES.ROTATECAMERA) {
		throw new Error('Ti.UI.Windows.SystemIcon.ROTATECAMERA is read only property');
	}
	this.ROTATECAMERA = 0;
	if (__SLAG_PROPERTIES.SAVE) {
		throw new Error('Ti.UI.Windows.SystemIcon.SAVE is read only property');
	}
	this.SAVE = 0;
	if (__SLAG_PROPERTIES.SAVELOCAL) {
		throw new Error('Ti.UI.Windows.SystemIcon.SAVELOCAL is read only property');
	}
	this.SAVELOCAL = 0;
	if (__SLAG_PROPERTIES.SCAN) {
		throw new Error('Ti.UI.Windows.SystemIcon.SCAN is read only property');
	}
	this.SCAN = 0;
	if (__SLAG_PROPERTIES.SELECTALL) {
		throw new Error('Ti.UI.Windows.SystemIcon.SELECTALL is read only property');
	}
	this.SELECTALL = 0;
	if (__SLAG_PROPERTIES.SEND) {
		throw new Error('Ti.UI.Windows.SystemIcon.SEND is read only property');
	}
	this.SEND = 0;
	if (__SLAG_PROPERTIES.SETLOCKSCREEN) {
		throw new Error('Ti.UI.Windows.SystemIcon.SETLOCKSCREEN is read only property');
	}
	this.SETLOCKSCREEN = 0;
	if (__SLAG_PROPERTIES.SETTILE) {
		throw new Error('Ti.UI.Windows.SystemIcon.SETTILE is read only property');
	}
	this.SETTILE = 0;
	if (__SLAG_PROPERTIES.SETTING) {
		throw new Error('Ti.UI.Windows.SystemIcon.SETTING is read only property');
	}
	this.SETTING = 0;
	if (__SLAG_PROPERTIES.SHOP) {
		throw new Error('Ti.UI.Windows.SystemIcon.SHOP is read only property');
	}
	this.SHOP = 0;
	if (__SLAG_PROPERTIES.SHOWBCC) {
		throw new Error('Ti.UI.Windows.SystemIcon.SHOWBCC is read only property');
	}
	this.SHOWBCC = 0;
	if (__SLAG_PROPERTIES.SHOWRESULTS) {
		throw new Error('Ti.UI.Windows.SystemIcon.SHOWRESULTS is read only property');
	}
	this.SHOWRESULTS = 0;
	if (__SLAG_PROPERTIES.SHUFFLE) {
		throw new Error('Ti.UI.Windows.SystemIcon.SHUFFLE is read only property');
	}
	this.SHUFFLE = 0;
	if (__SLAG_PROPERTIES.SLIDESHOW) {
		throw new Error('Ti.UI.Windows.SystemIcon.SLIDESHOW is read only property');
	}
	this.SLIDESHOW = 0;
	if (__SLAG_PROPERTIES.SOLIDSTAR) {
		throw new Error('Ti.UI.Windows.SystemIcon.SOLIDSTAR is read only property');
	}
	this.SOLIDSTAR = 0;
	if (__SLAG_PROPERTIES.SORT) {
		throw new Error('Ti.UI.Windows.SystemIcon.SORT is read only property');
	}
	this.SORT = 0;
	if (__SLAG_PROPERTIES.STOP) {
		throw new Error('Ti.UI.Windows.SystemIcon.STOP is read only property');
	}
	this.STOP = 0;
	if (__SLAG_PROPERTIES.STOPSLIDESHOW) {
		throw new Error('Ti.UI.Windows.SystemIcon.STOPSLIDESHOW is read only property');
	}
	this.STOPSLIDESHOW = 0;
	if (__SLAG_PROPERTIES.STREET) {
		throw new Error('Ti.UI.Windows.SystemIcon.STREET is read only property');
	}
	this.STREET = 0;
	if (__SLAG_PROPERTIES.SWITCH) {
		throw new Error('Ti.UI.Windows.SystemIcon.SWITCH is read only property');
	}
	this.SWITCH = 0;
	if (__SLAG_PROPERTIES.SWITCHAPPS) {
		throw new Error('Ti.UI.Windows.SystemIcon.SWITCHAPPS is read only property');
	}
	this.SWITCHAPPS = 0;
	if (__SLAG_PROPERTIES.SYNC) {
		throw new Error('Ti.UI.Windows.SystemIcon.SYNC is read only property');
	}
	this.SYNC = 0;
	if (__SLAG_PROPERTIES.SYNCFOLDER) {
		throw new Error('Ti.UI.Windows.SystemIcon.SYNCFOLDER is read only property');
	}
	this.SYNCFOLDER = 0;
	if (__SLAG_PROPERTIES.TAG) {
		throw new Error('Ti.UI.Windows.SystemIcon.TAG is read only property');
	}
	this.TAG = 0;
	if (__SLAG_PROPERTIES.TARGET) {
		throw new Error('Ti.UI.Windows.SystemIcon.TARGET is read only property');
	}
	this.TARGET = 0;
	if (__SLAG_PROPERTIES.THREEBARS) {
		throw new Error('Ti.UI.Windows.SystemIcon.THREEBARS is read only property');
	}
	this.THREEBARS = 0;
	if (__SLAG_PROPERTIES.TOUCHPOINTER) {
		throw new Error('Ti.UI.Windows.SystemIcon.TOUCHPOINTER is read only property');
	}
	this.TOUCHPOINTER = 0;
	if (__SLAG_PROPERTIES.TRIM) {
		throw new Error('Ti.UI.Windows.SystemIcon.TRIM is read only property');
	}
	this.TRIM = 0;
	if (__SLAG_PROPERTIES.TWOBARS) {
		throw new Error('Ti.UI.Windows.SystemIcon.TWOBARS is read only property');
	}
	this.TWOBARS = 0;
	if (__SLAG_PROPERTIES.TWOPAGE) {
		throw new Error('Ti.UI.Windows.SystemIcon.TWOPAGE is read only property');
	}
	this.TWOPAGE = 0;
	if (__SLAG_PROPERTIES.UNDERLINE) {
		throw new Error('Ti.UI.Windows.SystemIcon.UNDERLINE is read only property');
	}
	this.UNDERLINE = 0;
	if (__SLAG_PROPERTIES.UNDO) {
		throw new Error('Ti.UI.Windows.SystemIcon.UNDO is read only property');
	}
	this.UNDO = 0;
	if (__SLAG_PROPERTIES.UNFAVORITE) {
		throw new Error('Ti.UI.Windows.SystemIcon.UNFAVORITE is read only property');
	}
	this.UNFAVORITE = 0;
	if (__SLAG_PROPERTIES.UNPIN) {
		throw new Error('Ti.UI.Windows.SystemIcon.UNPIN is read only property');
	}
	this.UNPIN = 0;
	if (__SLAG_PROPERTIES.UNSYNCFOLDER) {
		throw new Error('Ti.UI.Windows.SystemIcon.UNSYNCFOLDER is read only property');
	}
	this.UNSYNCFOLDER = 0;
	if (__SLAG_PROPERTIES.UP) {
		throw new Error('Ti.UI.Windows.SystemIcon.UP is read only property');
	}
	this.UP = 0;
	if (__SLAG_PROPERTIES.UPLOAD) {
		throw new Error('Ti.UI.Windows.SystemIcon.UPLOAD is read only property');
	}
	this.UPLOAD = 0;
	if (__SLAG_PROPERTIES.VIDEO) {
		throw new Error('Ti.UI.Windows.SystemIcon.VIDEO is read only property');
	}
	this.VIDEO = 0;
	if (__SLAG_PROPERTIES.VIDEOCHAT) {
		throw new Error('Ti.UI.Windows.SystemIcon.VIDEOCHAT is read only property');
	}
	this.VIDEOCHAT = 0;
	if (__SLAG_PROPERTIES.VIEW) {
		throw new Error('Ti.UI.Windows.SystemIcon.VIEW is read only property');
	}
	this.VIEW = 0;
	if (__SLAG_PROPERTIES.VIEWALL) {
		throw new Error('Ti.UI.Windows.SystemIcon.VIEWALL is read only property');
	}
	this.VIEWALL = 0;
	if (__SLAG_PROPERTIES.VOLUME) {
		throw new Error('Ti.UI.Windows.SystemIcon.VOLUME is read only property');
	}
	this.VOLUME = 0;
	if (__SLAG_PROPERTIES.WEBCAM) {
		throw new Error('Ti.UI.Windows.SystemIcon.WEBCAM is read only property');
	}
	this.WEBCAM = 0;
	if (__SLAG_PROPERTIES.WORLD) {
		throw new Error('Ti.UI.Windows.SystemIcon.WORLD is read only property');
	}
	this.WORLD = 0;
	if (__SLAG_PROPERTIES.ZEROBARS) {
		throw new Error('Ti.UI.Windows.SystemIcon.ZEROBARS is read only property');
	}
	this.ZEROBARS = 0;
	if (__SLAG_PROPERTIES.ZOOM) {
		throw new Error('Ti.UI.Windows.SystemIcon.ZOOM is read only property');
	}
	this.ZOOM = 0;
	if (__SLAG_PROPERTIES.ZOOMIN) {
		throw new Error('Ti.UI.Windows.SystemIcon.ZOOMIN is read only property');
	}
	this.ZOOMIN = 0;
	if (__SLAG_PROPERTIES.ZOOMOUT) {
		throw new Error('Ti.UI.Windows.SystemIcon.ZOOMOUT is read only property');
	}
	this.ZOOMOUT = 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
SystemIcon.prototype.addEventListener = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
SystemIcon.prototype.removeEventListener = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
SystemIcon.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
SystemIcon.prototype.fireEvent = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
module.exports = function (properties) {
	return new SystemIcon(properties);
};