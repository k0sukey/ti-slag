var crypto = require('crypto');
function SystemIcon(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
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
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACCEPT = undefined;
	} else {
		this.ACCEPT = 0;
	}
	if (__SLAG_PROPERTIES.ACCOUNT) {
		throw new Error('Ti.UI.Windows.SystemIcon.ACCOUNT is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACCOUNT = undefined;
	} else {
		this.ACCOUNT = 0;
	}
	if (__SLAG_PROPERTIES.ADD) {
		throw new Error('Ti.UI.Windows.SystemIcon.ADD is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ADD = undefined;
	} else {
		this.ADD = 0;
	}
	if (__SLAG_PROPERTIES.ADDFRIEND) {
		throw new Error('Ti.UI.Windows.SystemIcon.ADDFRIEND is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ADDFRIEND = undefined;
	} else {
		this.ADDFRIEND = 0;
	}
	if (__SLAG_PROPERTIES.ADMIN) {
		throw new Error('Ti.UI.Windows.SystemIcon.ADMIN is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ADMIN = undefined;
	} else {
		this.ADMIN = 0;
	}
	if (__SLAG_PROPERTIES.ALIGNCENTER) {
		throw new Error('Ti.UI.Windows.SystemIcon.ALIGNCENTER is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ALIGNCENTER = undefined;
	} else {
		this.ALIGNCENTER = 0;
	}
	if (__SLAG_PROPERTIES.ALIGNLEFT) {
		throw new Error('Ti.UI.Windows.SystemIcon.ALIGNLEFT is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ALIGNLEFT = undefined;
	} else {
		this.ALIGNLEFT = 0;
	}
	if (__SLAG_PROPERTIES.ALIGNRIGHT) {
		throw new Error('Ti.UI.Windows.SystemIcon.ALIGNRIGHT is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ALIGNRIGHT = undefined;
	} else {
		this.ALIGNRIGHT = 0;
	}
	if (__SLAG_PROPERTIES.ALLAPPS) {
		throw new Error('Ti.UI.Windows.SystemIcon.ALLAPPS is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ALLAPPS = undefined;
	} else {
		this.ALLAPPS = 0;
	}
	if (__SLAG_PROPERTIES.ATTACH) {
		throw new Error('Ti.UI.Windows.SystemIcon.ATTACH is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTACH = undefined;
	} else {
		this.ATTACH = 0;
	}
	if (__SLAG_PROPERTIES.ATTACHCAMERA) {
		throw new Error('Ti.UI.Windows.SystemIcon.ATTACHCAMERA is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTACHCAMERA = undefined;
	} else {
		this.ATTACHCAMERA = 0;
	}
	if (__SLAG_PROPERTIES.AUDIO) {
		throw new Error('Ti.UI.Windows.SystemIcon.AUDIO is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO = undefined;
	} else {
		this.AUDIO = 0;
	}
	if (__SLAG_PROPERTIES.BACK) {
		throw new Error('Ti.UI.Windows.SystemIcon.BACK is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BACK = undefined;
	} else {
		this.BACK = 0;
	}
	if (__SLAG_PROPERTIES.BACKTOWINDOW) {
		throw new Error('Ti.UI.Windows.SystemIcon.BACKTOWINDOW is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BACKTOWINDOW = undefined;
	} else {
		this.BACKTOWINDOW = 0;
	}
	if (__SLAG_PROPERTIES.BLOCKCONTACT) {
		throw new Error('Ti.UI.Windows.SystemIcon.BLOCKCONTACT is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLOCKCONTACT = undefined;
	} else {
		this.BLOCKCONTACT = 0;
	}
	if (__SLAG_PROPERTIES.BOLD) {
		throw new Error('Ti.UI.Windows.SystemIcon.BOLD is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BOLD = undefined;
	} else {
		this.BOLD = 0;
	}
	if (__SLAG_PROPERTIES.BOOKMARKS) {
		throw new Error('Ti.UI.Windows.SystemIcon.BOOKMARKS is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BOOKMARKS = undefined;
	} else {
		this.BOOKMARKS = 0;
	}
	if (__SLAG_PROPERTIES.BROWSEPHOTOS) {
		throw new Error('Ti.UI.Windows.SystemIcon.BROWSEPHOTOS is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BROWSEPHOTOS = undefined;
	} else {
		this.BROWSEPHOTOS = 0;
	}
	if (__SLAG_PROPERTIES.BULLETS) {
		throw new Error('Ti.UI.Windows.SystemIcon.BULLETS is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BULLETS = undefined;
	} else {
		this.BULLETS = 0;
	}
	if (__SLAG_PROPERTIES.CALCULATOR) {
		throw new Error('Ti.UI.Windows.SystemIcon.CALCULATOR is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CALCULATOR = undefined;
	} else {
		this.CALCULATOR = 0;
	}
	if (__SLAG_PROPERTIES.CALENDAR) {
		throw new Error('Ti.UI.Windows.SystemIcon.CALENDAR is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CALENDAR = undefined;
	} else {
		this.CALENDAR = 0;
	}
	if (__SLAG_PROPERTIES.CALENDARDAY) {
		throw new Error('Ti.UI.Windows.SystemIcon.CALENDARDAY is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CALENDARDAY = undefined;
	} else {
		this.CALENDARDAY = 0;
	}
	if (__SLAG_PROPERTIES.CALENDARREPLY) {
		throw new Error('Ti.UI.Windows.SystemIcon.CALENDARREPLY is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CALENDARREPLY = undefined;
	} else {
		this.CALENDARREPLY = 0;
	}
	if (__SLAG_PROPERTIES.CALENDARWEEK) {
		throw new Error('Ti.UI.Windows.SystemIcon.CALENDARWEEK is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CALENDARWEEK = undefined;
	} else {
		this.CALENDARWEEK = 0;
	}
	if (__SLAG_PROPERTIES.CAMERA) {
		throw new Error('Ti.UI.Windows.SystemIcon.CAMERA is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CAMERA = undefined;
	} else {
		this.CAMERA = 0;
	}
	if (__SLAG_PROPERTIES.CANCEL) {
		throw new Error('Ti.UI.Windows.SystemIcon.CANCEL is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CANCEL = undefined;
	} else {
		this.CANCEL = 0;
	}
	if (__SLAG_PROPERTIES.CAPTION) {
		throw new Error('Ti.UI.Windows.SystemIcon.CAPTION is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CAPTION = undefined;
	} else {
		this.CAPTION = 0;
	}
	if (__SLAG_PROPERTIES.CELLPHONE) {
		throw new Error('Ti.UI.Windows.SystemIcon.CELLPHONE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CELLPHONE = undefined;
	} else {
		this.CELLPHONE = 0;
	}
	if (__SLAG_PROPERTIES.CHARACTER) {
		throw new Error('Ti.UI.Windows.SystemIcon.CHARACTER is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CHARACTER = undefined;
	} else {
		this.CHARACTER = 0;
	}
	if (__SLAG_PROPERTIES.CLEAR) {
		throw new Error('Ti.UI.Windows.SystemIcon.CLEAR is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CLEAR = undefined;
	} else {
		this.CLEAR = 0;
	}
	if (__SLAG_PROPERTIES.CLEARSELECTION) {
		throw new Error('Ti.UI.Windows.SystemIcon.CLEARSELECTION is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CLEARSELECTION = undefined;
	} else {
		this.CLEARSELECTION = 0;
	}
	if (__SLAG_PROPERTIES.CLOCK) {
		throw new Error('Ti.UI.Windows.SystemIcon.CLOCK is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CLOCK = undefined;
	} else {
		this.CLOCK = 0;
	}
	if (__SLAG_PROPERTIES.CLOSEDCAPTION) {
		throw new Error('Ti.UI.Windows.SystemIcon.CLOSEDCAPTION is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CLOSEDCAPTION = undefined;
	} else {
		this.CLOSEDCAPTION = 0;
	}
	if (__SLAG_PROPERTIES.CLOSEPANE) {
		throw new Error('Ti.UI.Windows.SystemIcon.CLOSEPANE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CLOSEPANE = undefined;
	} else {
		this.CLOSEPANE = 0;
	}
	if (__SLAG_PROPERTIES.COMMENT) {
		throw new Error('Ti.UI.Windows.SystemIcon.COMMENT is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.COMMENT = undefined;
	} else {
		this.COMMENT = 0;
	}
	if (__SLAG_PROPERTIES.CONTACT) {
		throw new Error('Ti.UI.Windows.SystemIcon.CONTACT is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CONTACT = undefined;
	} else {
		this.CONTACT = 0;
	}
	if (__SLAG_PROPERTIES.CONTACT2) {
		throw new Error('Ti.UI.Windows.SystemIcon.CONTACT2 is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CONTACT2 = undefined;
	} else {
		this.CONTACT2 = 0;
	}
	if (__SLAG_PROPERTIES.CONTACTINFO) {
		throw new Error('Ti.UI.Windows.SystemIcon.CONTACTINFO is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CONTACTINFO = undefined;
	} else {
		this.CONTACTINFO = 0;
	}
	if (__SLAG_PROPERTIES.CONTACTPRESENCE) {
		throw new Error('Ti.UI.Windows.SystemIcon.CONTACTPRESENCE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CONTACTPRESENCE = undefined;
	} else {
		this.CONTACTPRESENCE = 0;
	}
	if (__SLAG_PROPERTIES.COPY) {
		throw new Error('Ti.UI.Windows.SystemIcon.COPY is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.COPY = undefined;
	} else {
		this.COPY = 0;
	}
	if (__SLAG_PROPERTIES.CROP) {
		throw new Error('Ti.UI.Windows.SystemIcon.CROP is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CROP = undefined;
	} else {
		this.CROP = 0;
	}
	if (__SLAG_PROPERTIES.CUT) {
		throw new Error('Ti.UI.Windows.SystemIcon.CUT is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CUT = undefined;
	} else {
		this.CUT = 0;
	}
	if (__SLAG_PROPERTIES.DELETE) {
		throw new Error('Ti.UI.Windows.SystemIcon.DELETE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DELETE = undefined;
	} else {
		this.DELETE = 0;
	}
	if (__SLAG_PROPERTIES.DIRECTIONS) {
		throw new Error('Ti.UI.Windows.SystemIcon.DIRECTIONS is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DIRECTIONS = undefined;
	} else {
		this.DIRECTIONS = 0;
	}
	if (__SLAG_PROPERTIES.DISABLEUPDATES) {
		throw new Error('Ti.UI.Windows.SystemIcon.DISABLEUPDATES is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DISABLEUPDATES = undefined;
	} else {
		this.DISABLEUPDATES = 0;
	}
	if (__SLAG_PROPERTIES.DISCONNECTDRIVE) {
		throw new Error('Ti.UI.Windows.SystemIcon.DISCONNECTDRIVE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DISCONNECTDRIVE = undefined;
	} else {
		this.DISCONNECTDRIVE = 0;
	}
	if (__SLAG_PROPERTIES.DISLIKE) {
		throw new Error('Ti.UI.Windows.SystemIcon.DISLIKE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DISLIKE = undefined;
	} else {
		this.DISLIKE = 0;
	}
	if (__SLAG_PROPERTIES.DOCKBOTTOM) {
		throw new Error('Ti.UI.Windows.SystemIcon.DOCKBOTTOM is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DOCKBOTTOM = undefined;
	} else {
		this.DOCKBOTTOM = 0;
	}
	if (__SLAG_PROPERTIES.DOCKLEFT) {
		throw new Error('Ti.UI.Windows.SystemIcon.DOCKLEFT is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DOCKLEFT = undefined;
	} else {
		this.DOCKLEFT = 0;
	}
	if (__SLAG_PROPERTIES.DOCKRIGHT) {
		throw new Error('Ti.UI.Windows.SystemIcon.DOCKRIGHT is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DOCKRIGHT = undefined;
	} else {
		this.DOCKRIGHT = 0;
	}
	if (__SLAG_PROPERTIES.DOCUMENT) {
		throw new Error('Ti.UI.Windows.SystemIcon.DOCUMENT is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DOCUMENT = undefined;
	} else {
		this.DOCUMENT = 0;
	}
	if (__SLAG_PROPERTIES.DOWNLOAD) {
		throw new Error('Ti.UI.Windows.SystemIcon.DOWNLOAD is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DOWNLOAD = undefined;
	} else {
		this.DOWNLOAD = 0;
	}
	if (__SLAG_PROPERTIES.EDIT) {
		throw new Error('Ti.UI.Windows.SystemIcon.EDIT is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EDIT = undefined;
	} else {
		this.EDIT = 0;
	}
	if (__SLAG_PROPERTIES.EMOJI) {
		throw new Error('Ti.UI.Windows.SystemIcon.EMOJI is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EMOJI = undefined;
	} else {
		this.EMOJI = 0;
	}
	if (__SLAG_PROPERTIES.EMOJI2) {
		throw new Error('Ti.UI.Windows.SystemIcon.EMOJI2 is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EMOJI2 = undefined;
	} else {
		this.EMOJI2 = 0;
	}
	if (__SLAG_PROPERTIES.FAVORITE) {
		throw new Error('Ti.UI.Windows.SystemIcon.FAVORITE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FAVORITE = undefined;
	} else {
		this.FAVORITE = 0;
	}
	if (__SLAG_PROPERTIES.FILTER) {
		throw new Error('Ti.UI.Windows.SystemIcon.FILTER is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FILTER = undefined;
	} else {
		this.FILTER = 0;
	}
	if (__SLAG_PROPERTIES.FIND) {
		throw new Error('Ti.UI.Windows.SystemIcon.FIND is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FIND = undefined;
	} else {
		this.FIND = 0;
	}
	if (__SLAG_PROPERTIES.FLAG) {
		throw new Error('Ti.UI.Windows.SystemIcon.FLAG is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG = undefined;
	} else {
		this.FLAG = 0;
	}
	if (__SLAG_PROPERTIES.FOLDER) {
		throw new Error('Ti.UI.Windows.SystemIcon.FOLDER is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FOLDER = undefined;
	} else {
		this.FOLDER = 0;
	}
	if (__SLAG_PROPERTIES.FONT) {
		throw new Error('Ti.UI.Windows.SystemIcon.FONT is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FONT = undefined;
	} else {
		this.FONT = 0;
	}
	if (__SLAG_PROPERTIES.FONTCOLOR) {
		throw new Error('Ti.UI.Windows.SystemIcon.FONTCOLOR is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FONTCOLOR = undefined;
	} else {
		this.FONTCOLOR = 0;
	}
	if (__SLAG_PROPERTIES.FONTDECREASE) {
		throw new Error('Ti.UI.Windows.SystemIcon.FONTDECREASE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FONTDECREASE = undefined;
	} else {
		this.FONTDECREASE = 0;
	}
	if (__SLAG_PROPERTIES.FONTINCREASE) {
		throw new Error('Ti.UI.Windows.SystemIcon.FONTINCREASE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FONTINCREASE = undefined;
	} else {
		this.FONTINCREASE = 0;
	}
	if (__SLAG_PROPERTIES.FONTSIZE) {
		throw new Error('Ti.UI.Windows.SystemIcon.FONTSIZE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FONTSIZE = undefined;
	} else {
		this.FONTSIZE = 0;
	}
	if (__SLAG_PROPERTIES.FORWARD) {
		throw new Error('Ti.UI.Windows.SystemIcon.FORWARD is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FORWARD = undefined;
	} else {
		this.FORWARD = 0;
	}
	if (__SLAG_PROPERTIES.FOURBARS) {
		throw new Error('Ti.UI.Windows.SystemIcon.FOURBARS is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FOURBARS = undefined;
	} else {
		this.FOURBARS = 0;
	}
	if (__SLAG_PROPERTIES.FULLSCREEN) {
		throw new Error('Ti.UI.Windows.SystemIcon.FULLSCREEN is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FULLSCREEN = undefined;
	} else {
		this.FULLSCREEN = 0;
	}
	if (__SLAG_PROPERTIES.GLOBE) {
		throw new Error('Ti.UI.Windows.SystemIcon.GLOBE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GLOBE = undefined;
	} else {
		this.GLOBE = 0;
	}
	if (__SLAG_PROPERTIES.GO) {
		throw new Error('Ti.UI.Windows.SystemIcon.GO is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GO = undefined;
	} else {
		this.GO = 0;
	}
	if (__SLAG_PROPERTIES.GOTOSTART) {
		throw new Error('Ti.UI.Windows.SystemIcon.GOTOSTART is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GOTOSTART = undefined;
	} else {
		this.GOTOSTART = 0;
	}
	if (__SLAG_PROPERTIES.GOTOTODAY) {
		throw new Error('Ti.UI.Windows.SystemIcon.GOTOTODAY is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GOTOTODAY = undefined;
	} else {
		this.GOTOTODAY = 0;
	}
	if (__SLAG_PROPERTIES.HANGUP) {
		throw new Error('Ti.UI.Windows.SystemIcon.HANGUP is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.HANGUP = undefined;
	} else {
		this.HANGUP = 0;
	}
	if (__SLAG_PROPERTIES.HELP) {
		throw new Error('Ti.UI.Windows.SystemIcon.HELP is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.HELP = undefined;
	} else {
		this.HELP = 0;
	}
	if (__SLAG_PROPERTIES.HIDEBCC) {
		throw new Error('Ti.UI.Windows.SystemIcon.HIDEBCC is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.HIDEBCC = undefined;
	} else {
		this.HIDEBCC = 0;
	}
	if (__SLAG_PROPERTIES.HIGHLIGHT) {
		throw new Error('Ti.UI.Windows.SystemIcon.HIGHLIGHT is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.HIGHLIGHT = undefined;
	} else {
		this.HIGHLIGHT = 0;
	}
	if (__SLAG_PROPERTIES.HOME) {
		throw new Error('Ti.UI.Windows.SystemIcon.HOME is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.HOME = undefined;
	} else {
		this.HOME = 0;
	}
	if (__SLAG_PROPERTIES.IMPORT) {
		throw new Error('Ti.UI.Windows.SystemIcon.IMPORT is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.IMPORT = undefined;
	} else {
		this.IMPORT = 0;
	}
	if (__SLAG_PROPERTIES.IMPORTALL) {
		throw new Error('Ti.UI.Windows.SystemIcon.IMPORTALL is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.IMPORTALL = undefined;
	} else {
		this.IMPORTALL = 0;
	}
	if (__SLAG_PROPERTIES.IMPORTANT) {
		throw new Error('Ti.UI.Windows.SystemIcon.IMPORTANT is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.IMPORTANT = undefined;
	} else {
		this.IMPORTANT = 0;
	}
	if (__SLAG_PROPERTIES.ITALIC) {
		throw new Error('Ti.UI.Windows.SystemIcon.ITALIC is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ITALIC = undefined;
	} else {
		this.ITALIC = 0;
	}
	if (__SLAG_PROPERTIES.KEYBOARD) {
		throw new Error('Ti.UI.Windows.SystemIcon.KEYBOARD is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.KEYBOARD = undefined;
	} else {
		this.KEYBOARD = 0;
	}
	if (__SLAG_PROPERTIES.LEAVECHAT) {
		throw new Error('Ti.UI.Windows.SystemIcon.LEAVECHAT is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.LEAVECHAT = undefined;
	} else {
		this.LEAVECHAT = 0;
	}
	if (__SLAG_PROPERTIES.LIBRARY) {
		throw new Error('Ti.UI.Windows.SystemIcon.LIBRARY is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.LIBRARY = undefined;
	} else {
		this.LIBRARY = 0;
	}
	if (__SLAG_PROPERTIES.LIKE) {
		throw new Error('Ti.UI.Windows.SystemIcon.LIKE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.LIKE = undefined;
	} else {
		this.LIKE = 0;
	}
	if (__SLAG_PROPERTIES.LIKEDISLIKE) {
		throw new Error('Ti.UI.Windows.SystemIcon.LIKEDISLIKE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.LIKEDISLIKE = undefined;
	} else {
		this.LIKEDISLIKE = 0;
	}
	if (__SLAG_PROPERTIES.LINK) {
		throw new Error('Ti.UI.Windows.SystemIcon.LINK is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.LINK = undefined;
	} else {
		this.LINK = 0;
	}
	if (__SLAG_PROPERTIES.LIST) {
		throw new Error('Ti.UI.Windows.SystemIcon.LIST is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.LIST = undefined;
	} else {
		this.LIST = 0;
	}
	if (__SLAG_PROPERTIES.MAIL) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAIL is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MAIL = undefined;
	} else {
		this.MAIL = 0;
	}
	if (__SLAG_PROPERTIES.MAILFILLED) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAILFILLED is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MAILFILLED = undefined;
	} else {
		this.MAILFILLED = 0;
	}
	if (__SLAG_PROPERTIES.MAILFORWARD) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAILFORWARD is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MAILFORWARD = undefined;
	} else {
		this.MAILFORWARD = 0;
	}
	if (__SLAG_PROPERTIES.MAILREPLY) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAILREPLY is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MAILREPLY = undefined;
	} else {
		this.MAILREPLY = 0;
	}
	if (__SLAG_PROPERTIES.MAILREPLYALL) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAILREPLYALL is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MAILREPLYALL = undefined;
	} else {
		this.MAILREPLYALL = 0;
	}
	if (__SLAG_PROPERTIES.MANAGE) {
		throw new Error('Ti.UI.Windows.SystemIcon.MANAGE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MANAGE = undefined;
	} else {
		this.MANAGE = 0;
	}
	if (__SLAG_PROPERTIES.MAP) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAP is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MAP = undefined;
	} else {
		this.MAP = 0;
	}
	if (__SLAG_PROPERTIES.MAPDRIVE) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAPDRIVE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MAPDRIVE = undefined;
	} else {
		this.MAPDRIVE = 0;
	}
	if (__SLAG_PROPERTIES.MAPPIN) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAPPIN is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MAPPIN = undefined;
	} else {
		this.MAPPIN = 0;
	}
	if (__SLAG_PROPERTIES.MEMO) {
		throw new Error('Ti.UI.Windows.SystemIcon.MEMO is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MEMO = undefined;
	} else {
		this.MEMO = 0;
	}
	if (__SLAG_PROPERTIES.MESSAGE) {
		throw new Error('Ti.UI.Windows.SystemIcon.MESSAGE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MESSAGE = undefined;
	} else {
		this.MESSAGE = 0;
	}
	if (__SLAG_PROPERTIES.MICROPHONE) {
		throw new Error('Ti.UI.Windows.SystemIcon.MICROPHONE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MICROPHONE = undefined;
	} else {
		this.MICROPHONE = 0;
	}
	if (__SLAG_PROPERTIES.MORE) {
		throw new Error('Ti.UI.Windows.SystemIcon.MORE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MORE = undefined;
	} else {
		this.MORE = 0;
	}
	if (__SLAG_PROPERTIES.MOVETOFOLDER) {
		throw new Error('Ti.UI.Windows.SystemIcon.MOVETOFOLDER is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MOVETOFOLDER = undefined;
	} else {
		this.MOVETOFOLDER = 0;
	}
	if (__SLAG_PROPERTIES.MUSICINFO) {
		throw new Error('Ti.UI.Windows.SystemIcon.MUSICINFO is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSICINFO = undefined;
	} else {
		this.MUSICINFO = 0;
	}
	if (__SLAG_PROPERTIES.MUTE) {
		throw new Error('Ti.UI.Windows.SystemIcon.MUTE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUTE = undefined;
	} else {
		this.MUTE = 0;
	}
	if (__SLAG_PROPERTIES.NEWFOLDER) {
		throw new Error('Ti.UI.Windows.SystemIcon.NEWFOLDER is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.NEWFOLDER = undefined;
	} else {
		this.NEWFOLDER = 0;
	}
	if (__SLAG_PROPERTIES.NEWWINDOW) {
		throw new Error('Ti.UI.Windows.SystemIcon.NEWWINDOW is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.NEWWINDOW = undefined;
	} else {
		this.NEWWINDOW = 0;
	}
	if (__SLAG_PROPERTIES.NEXT) {
		throw new Error('Ti.UI.Windows.SystemIcon.NEXT is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.NEXT = undefined;
	} else {
		this.NEXT = 0;
	}
	if (__SLAG_PROPERTIES.ONEBAR) {
		throw new Error('Ti.UI.Windows.SystemIcon.ONEBAR is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ONEBAR = undefined;
	} else {
		this.ONEBAR = 0;
	}
	if (__SLAG_PROPERTIES.OPENFILE) {
		throw new Error('Ti.UI.Windows.SystemIcon.OPENFILE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.OPENFILE = undefined;
	} else {
		this.OPENFILE = 0;
	}
	if (__SLAG_PROPERTIES.OPENLOCAL) {
		throw new Error('Ti.UI.Windows.SystemIcon.OPENLOCAL is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.OPENLOCAL = undefined;
	} else {
		this.OPENLOCAL = 0;
	}
	if (__SLAG_PROPERTIES.OPENPANE) {
		throw new Error('Ti.UI.Windows.SystemIcon.OPENPANE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.OPENPANE = undefined;
	} else {
		this.OPENPANE = 0;
	}
	if (__SLAG_PROPERTIES.OPENWITH) {
		throw new Error('Ti.UI.Windows.SystemIcon.OPENWITH is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.OPENWITH = undefined;
	} else {
		this.OPENWITH = 0;
	}
	if (__SLAG_PROPERTIES.ORIENTATION) {
		throw new Error('Ti.UI.Windows.SystemIcon.ORIENTATION is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ORIENTATION = undefined;
	} else {
		this.ORIENTATION = 0;
	}
	if (__SLAG_PROPERTIES.OTHERUSER) {
		throw new Error('Ti.UI.Windows.SystemIcon.OTHERUSER is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.OTHERUSER = undefined;
	} else {
		this.OTHERUSER = 0;
	}
	if (__SLAG_PROPERTIES.OUTLINESTAR) {
		throw new Error('Ti.UI.Windows.SystemIcon.OUTLINESTAR is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.OUTLINESTAR = undefined;
	} else {
		this.OUTLINESTAR = 0;
	}
	if (__SLAG_PROPERTIES.PAGE) {
		throw new Error('Ti.UI.Windows.SystemIcon.PAGE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PAGE = undefined;
	} else {
		this.PAGE = 0;
	}
	if (__SLAG_PROPERTIES.PAGE2) {
		throw new Error('Ti.UI.Windows.SystemIcon.PAGE2 is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PAGE2 = undefined;
	} else {
		this.PAGE2 = 0;
	}
	if (__SLAG_PROPERTIES.PASTE) {
		throw new Error('Ti.UI.Windows.SystemIcon.PASTE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PASTE = undefined;
	} else {
		this.PASTE = 0;
	}
	if (__SLAG_PROPERTIES.PAUSE) {
		throw new Error('Ti.UI.Windows.SystemIcon.PAUSE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PAUSE = undefined;
	} else {
		this.PAUSE = 0;
	}
	if (__SLAG_PROPERTIES.PEOPLE) {
		throw new Error('Ti.UI.Windows.SystemIcon.PEOPLE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PEOPLE = undefined;
	} else {
		this.PEOPLE = 0;
	}
	if (__SLAG_PROPERTIES.PERMISSIONS) {
		throw new Error('Ti.UI.Windows.SystemIcon.PERMISSIONS is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PERMISSIONS = undefined;
	} else {
		this.PERMISSIONS = 0;
	}
	if (__SLAG_PROPERTIES.PHONE) {
		throw new Error('Ti.UI.Windows.SystemIcon.PHONE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PHONE = undefined;
	} else {
		this.PHONE = 0;
	}
	if (__SLAG_PROPERTIES.PHONEBOOK) {
		throw new Error('Ti.UI.Windows.SystemIcon.PHONEBOOK is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PHONEBOOK = undefined;
	} else {
		this.PHONEBOOK = 0;
	}
	if (__SLAG_PROPERTIES.PICTURES) {
		throw new Error('Ti.UI.Windows.SystemIcon.PICTURES is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PICTURES = undefined;
	} else {
		this.PICTURES = 0;
	}
	if (__SLAG_PROPERTIES.PIN) {
		throw new Error('Ti.UI.Windows.SystemIcon.PIN is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PIN = undefined;
	} else {
		this.PIN = 0;
	}
	if (__SLAG_PROPERTIES.PLACEHOLDER) {
		throw new Error('Ti.UI.Windows.SystemIcon.PLACEHOLDER is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PLACEHOLDER = undefined;
	} else {
		this.PLACEHOLDER = 0;
	}
	if (__SLAG_PROPERTIES.PLAY) {
		throw new Error('Ti.UI.Windows.SystemIcon.PLAY is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PLAY = undefined;
	} else {
		this.PLAY = 0;
	}
	if (__SLAG_PROPERTIES.POSTUPDATE) {
		throw new Error('Ti.UI.Windows.SystemIcon.POSTUPDATE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.POSTUPDATE = undefined;
	} else {
		this.POSTUPDATE = 0;
	}
	if (__SLAG_PROPERTIES.PREVIEW) {
		throw new Error('Ti.UI.Windows.SystemIcon.PREVIEW is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PREVIEW = undefined;
	} else {
		this.PREVIEW = 0;
	}
	if (__SLAG_PROPERTIES.PREVIEWLINK) {
		throw new Error('Ti.UI.Windows.SystemIcon.PREVIEWLINK is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PREVIEWLINK = undefined;
	} else {
		this.PREVIEWLINK = 0;
	}
	if (__SLAG_PROPERTIES.PREVIOUS) {
		throw new Error('Ti.UI.Windows.SystemIcon.PREVIOUS is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PREVIOUS = undefined;
	} else {
		this.PREVIOUS = 0;
	}
	if (__SLAG_PROPERTIES.PRIORITY) {
		throw new Error('Ti.UI.Windows.SystemIcon.PRIORITY is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PRIORITY = undefined;
	} else {
		this.PRIORITY = 0;
	}
	if (__SLAG_PROPERTIES.PROTECTEDDOCUMENT) {
		throw new Error('Ti.UI.Windows.SystemIcon.PROTECTEDDOCUMENT is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PROTECTEDDOCUMENT = undefined;
	} else {
		this.PROTECTEDDOCUMENT = 0;
	}
	if (__SLAG_PROPERTIES.READ) {
		throw new Error('Ti.UI.Windows.SystemIcon.READ is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.READ = undefined;
	} else {
		this.READ = 0;
	}
	if (__SLAG_PROPERTIES.REDO) {
		throw new Error('Ti.UI.Windows.SystemIcon.REDO is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.REDO = undefined;
	} else {
		this.REDO = 0;
	}
	if (__SLAG_PROPERTIES.REFRESH) {
		throw new Error('Ti.UI.Windows.SystemIcon.REFRESH is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.REFRESH = undefined;
	} else {
		this.REFRESH = 0;
	}
	if (__SLAG_PROPERTIES.REMOTE) {
		throw new Error('Ti.UI.Windows.SystemIcon.REMOTE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.REMOTE = undefined;
	} else {
		this.REMOTE = 0;
	}
	if (__SLAG_PROPERTIES.REMOVE) {
		throw new Error('Ti.UI.Windows.SystemIcon.REMOVE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.REMOVE = undefined;
	} else {
		this.REMOVE = 0;
	}
	if (__SLAG_PROPERTIES.RENAME) {
		throw new Error('Ti.UI.Windows.SystemIcon.RENAME is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.RENAME = undefined;
	} else {
		this.RENAME = 0;
	}
	if (__SLAG_PROPERTIES.REPAIR) {
		throw new Error('Ti.UI.Windows.SystemIcon.REPAIR is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.REPAIR = undefined;
	} else {
		this.REPAIR = 0;
	}
	if (__SLAG_PROPERTIES.REPEATALL) {
		throw new Error('Ti.UI.Windows.SystemIcon.REPEATALL is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.REPEATALL = undefined;
	} else {
		this.REPEATALL = 0;
	}
	if (__SLAG_PROPERTIES.REPEATONE) {
		throw new Error('Ti.UI.Windows.SystemIcon.REPEATONE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.REPEATONE = undefined;
	} else {
		this.REPEATONE = 0;
	}
	if (__SLAG_PROPERTIES.REPORTHACKED) {
		throw new Error('Ti.UI.Windows.SystemIcon.REPORTHACKED is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.REPORTHACKED = undefined;
	} else {
		this.REPORTHACKED = 0;
	}
	if (__SLAG_PROPERTIES.RESHARE) {
		throw new Error('Ti.UI.Windows.SystemIcon.RESHARE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.RESHARE = undefined;
	} else {
		this.RESHARE = 0;
	}
	if (__SLAG_PROPERTIES.ROTATE) {
		throw new Error('Ti.UI.Windows.SystemIcon.ROTATE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ROTATE = undefined;
	} else {
		this.ROTATE = 0;
	}
	if (__SLAG_PROPERTIES.ROTATECAMERA) {
		throw new Error('Ti.UI.Windows.SystemIcon.ROTATECAMERA is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ROTATECAMERA = undefined;
	} else {
		this.ROTATECAMERA = 0;
	}
	if (__SLAG_PROPERTIES.SAVE) {
		throw new Error('Ti.UI.Windows.SystemIcon.SAVE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SAVE = undefined;
	} else {
		this.SAVE = 0;
	}
	if (__SLAG_PROPERTIES.SAVELOCAL) {
		throw new Error('Ti.UI.Windows.SystemIcon.SAVELOCAL is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SAVELOCAL = undefined;
	} else {
		this.SAVELOCAL = 0;
	}
	if (__SLAG_PROPERTIES.SCAN) {
		throw new Error('Ti.UI.Windows.SystemIcon.SCAN is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SCAN = undefined;
	} else {
		this.SCAN = 0;
	}
	if (__SLAG_PROPERTIES.SELECTALL) {
		throw new Error('Ti.UI.Windows.SystemIcon.SELECTALL is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SELECTALL = undefined;
	} else {
		this.SELECTALL = 0;
	}
	if (__SLAG_PROPERTIES.SEND) {
		throw new Error('Ti.UI.Windows.SystemIcon.SEND is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SEND = undefined;
	} else {
		this.SEND = 0;
	}
	if (__SLAG_PROPERTIES.SETLOCKSCREEN) {
		throw new Error('Ti.UI.Windows.SystemIcon.SETLOCKSCREEN is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SETLOCKSCREEN = undefined;
	} else {
		this.SETLOCKSCREEN = 0;
	}
	if (__SLAG_PROPERTIES.SETTILE) {
		throw new Error('Ti.UI.Windows.SystemIcon.SETTILE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SETTILE = undefined;
	} else {
		this.SETTILE = 0;
	}
	if (__SLAG_PROPERTIES.SETTING) {
		throw new Error('Ti.UI.Windows.SystemIcon.SETTING is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SETTING = undefined;
	} else {
		this.SETTING = 0;
	}
	if (__SLAG_PROPERTIES.SHOP) {
		throw new Error('Ti.UI.Windows.SystemIcon.SHOP is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHOP = undefined;
	} else {
		this.SHOP = 0;
	}
	if (__SLAG_PROPERTIES.SHOWBCC) {
		throw new Error('Ti.UI.Windows.SystemIcon.SHOWBCC is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHOWBCC = undefined;
	} else {
		this.SHOWBCC = 0;
	}
	if (__SLAG_PROPERTIES.SHOWRESULTS) {
		throw new Error('Ti.UI.Windows.SystemIcon.SHOWRESULTS is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHOWRESULTS = undefined;
	} else {
		this.SHOWRESULTS = 0;
	}
	if (__SLAG_PROPERTIES.SHUFFLE) {
		throw new Error('Ti.UI.Windows.SystemIcon.SHUFFLE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHUFFLE = undefined;
	} else {
		this.SHUFFLE = 0;
	}
	if (__SLAG_PROPERTIES.SLIDESHOW) {
		throw new Error('Ti.UI.Windows.SystemIcon.SLIDESHOW is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SLIDESHOW = undefined;
	} else {
		this.SLIDESHOW = 0;
	}
	if (__SLAG_PROPERTIES.SOLIDSTAR) {
		throw new Error('Ti.UI.Windows.SystemIcon.SOLIDSTAR is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SOLIDSTAR = undefined;
	} else {
		this.SOLIDSTAR = 0;
	}
	if (__SLAG_PROPERTIES.SORT) {
		throw new Error('Ti.UI.Windows.SystemIcon.SORT is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SORT = undefined;
	} else {
		this.SORT = 0;
	}
	if (__SLAG_PROPERTIES.STOP) {
		throw new Error('Ti.UI.Windows.SystemIcon.STOP is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STOP = undefined;
	} else {
		this.STOP = 0;
	}
	if (__SLAG_PROPERTIES.STOPSLIDESHOW) {
		throw new Error('Ti.UI.Windows.SystemIcon.STOPSLIDESHOW is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STOPSLIDESHOW = undefined;
	} else {
		this.STOPSLIDESHOW = 0;
	}
	if (__SLAG_PROPERTIES.STREET) {
		throw new Error('Ti.UI.Windows.SystemIcon.STREET is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STREET = undefined;
	} else {
		this.STREET = 0;
	}
	if (__SLAG_PROPERTIES.SWITCH) {
		throw new Error('Ti.UI.Windows.SystemIcon.SWITCH is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SWITCH = undefined;
	} else {
		this.SWITCH = 0;
	}
	if (__SLAG_PROPERTIES.SWITCHAPPS) {
		throw new Error('Ti.UI.Windows.SystemIcon.SWITCHAPPS is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SWITCHAPPS = undefined;
	} else {
		this.SWITCHAPPS = 0;
	}
	if (__SLAG_PROPERTIES.SYNC) {
		throw new Error('Ti.UI.Windows.SystemIcon.SYNC is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SYNC = undefined;
	} else {
		this.SYNC = 0;
	}
	if (__SLAG_PROPERTIES.SYNCFOLDER) {
		throw new Error('Ti.UI.Windows.SystemIcon.SYNCFOLDER is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SYNCFOLDER = undefined;
	} else {
		this.SYNCFOLDER = 0;
	}
	if (__SLAG_PROPERTIES.TAG) {
		throw new Error('Ti.UI.Windows.SystemIcon.TAG is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TAG = undefined;
	} else {
		this.TAG = 0;
	}
	if (__SLAG_PROPERTIES.TARGET) {
		throw new Error('Ti.UI.Windows.SystemIcon.TARGET is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TARGET = undefined;
	} else {
		this.TARGET = 0;
	}
	if (__SLAG_PROPERTIES.THREEBARS) {
		throw new Error('Ti.UI.Windows.SystemIcon.THREEBARS is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.THREEBARS = undefined;
	} else {
		this.THREEBARS = 0;
	}
	if (__SLAG_PROPERTIES.TOUCHPOINTER) {
		throw new Error('Ti.UI.Windows.SystemIcon.TOUCHPOINTER is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TOUCHPOINTER = undefined;
	} else {
		this.TOUCHPOINTER = 0;
	}
	if (__SLAG_PROPERTIES.TRIM) {
		throw new Error('Ti.UI.Windows.SystemIcon.TRIM is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TRIM = undefined;
	} else {
		this.TRIM = 0;
	}
	if (__SLAG_PROPERTIES.TWOBARS) {
		throw new Error('Ti.UI.Windows.SystemIcon.TWOBARS is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TWOBARS = undefined;
	} else {
		this.TWOBARS = 0;
	}
	if (__SLAG_PROPERTIES.TWOPAGE) {
		throw new Error('Ti.UI.Windows.SystemIcon.TWOPAGE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TWOPAGE = undefined;
	} else {
		this.TWOPAGE = 0;
	}
	if (__SLAG_PROPERTIES.UNDERLINE) {
		throw new Error('Ti.UI.Windows.SystemIcon.UNDERLINE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UNDERLINE = undefined;
	} else {
		this.UNDERLINE = 0;
	}
	if (__SLAG_PROPERTIES.UNDO) {
		throw new Error('Ti.UI.Windows.SystemIcon.UNDO is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UNDO = undefined;
	} else {
		this.UNDO = 0;
	}
	if (__SLAG_PROPERTIES.UNFAVORITE) {
		throw new Error('Ti.UI.Windows.SystemIcon.UNFAVORITE is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UNFAVORITE = undefined;
	} else {
		this.UNFAVORITE = 0;
	}
	if (__SLAG_PROPERTIES.UNPIN) {
		throw new Error('Ti.UI.Windows.SystemIcon.UNPIN is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UNPIN = undefined;
	} else {
		this.UNPIN = 0;
	}
	if (__SLAG_PROPERTIES.UNSYNCFOLDER) {
		throw new Error('Ti.UI.Windows.SystemIcon.UNSYNCFOLDER is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UNSYNCFOLDER = undefined;
	} else {
		this.UNSYNCFOLDER = 0;
	}
	if (__SLAG_PROPERTIES.UP) {
		throw new Error('Ti.UI.Windows.SystemIcon.UP is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UP = undefined;
	} else {
		this.UP = 0;
	}
	if (__SLAG_PROPERTIES.UPLOAD) {
		throw new Error('Ti.UI.Windows.SystemIcon.UPLOAD is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UPLOAD = undefined;
	} else {
		this.UPLOAD = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO) {
		throw new Error('Ti.UI.Windows.SystemIcon.VIDEO is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO = undefined;
	} else {
		this.VIDEO = 0;
	}
	if (__SLAG_PROPERTIES.VIDEOCHAT) {
		throw new Error('Ti.UI.Windows.SystemIcon.VIDEOCHAT is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEOCHAT = undefined;
	} else {
		this.VIDEOCHAT = 0;
	}
	if (__SLAG_PROPERTIES.VIEW) {
		throw new Error('Ti.UI.Windows.SystemIcon.VIEW is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIEW = undefined;
	} else {
		this.VIEW = 0;
	}
	if (__SLAG_PROPERTIES.VIEWALL) {
		throw new Error('Ti.UI.Windows.SystemIcon.VIEWALL is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIEWALL = undefined;
	} else {
		this.VIEWALL = 0;
	}
	if (__SLAG_PROPERTIES.VOLUME) {
		throw new Error('Ti.UI.Windows.SystemIcon.VOLUME is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VOLUME = undefined;
	} else {
		this.VOLUME = 0;
	}
	if (__SLAG_PROPERTIES.WEBCAM) {
		throw new Error('Ti.UI.Windows.SystemIcon.WEBCAM is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.WEBCAM = undefined;
	} else {
		this.WEBCAM = 0;
	}
	if (__SLAG_PROPERTIES.WORLD) {
		throw new Error('Ti.UI.Windows.SystemIcon.WORLD is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.WORLD = undefined;
	} else {
		this.WORLD = 0;
	}
	if (__SLAG_PROPERTIES.ZEROBARS) {
		throw new Error('Ti.UI.Windows.SystemIcon.ZEROBARS is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ZEROBARS = undefined;
	} else {
		this.ZEROBARS = 0;
	}
	if (__SLAG_PROPERTIES.ZOOM) {
		throw new Error('Ti.UI.Windows.SystemIcon.ZOOM is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ZOOM = undefined;
	} else {
		this.ZOOM = 0;
	}
	if (__SLAG_PROPERTIES.ZOOMIN) {
		throw new Error('Ti.UI.Windows.SystemIcon.ZOOMIN is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ZOOMIN = undefined;
	} else {
		this.ZOOMIN = 0;
	}
	if (__SLAG_PROPERTIES.ZOOMOUT) {
		throw new Error('Ti.UI.Windows.SystemIcon.ZOOMOUT is read only property');
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ZOOMOUT = undefined;
	} else {
		this.ZOOMOUT = 0;
	}
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