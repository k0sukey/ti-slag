var _ = require('lodash'),
	chalk = require('chalk'),
	fs = require('fs'),
	meow = require('meow'),
	path = require('path'),
	tiappxml = require('tiapp.xml'),
	vm = require('vm');

var cli = meow({
	pkg: '../package.json',
	help: [
		'Usage',
		'  --project-dir <directory>',
		'  --sdk <version>',
		'  --platform <ios,android>'
	].join('\n')
});

!_.has(cli.flags, 'projectDir') && (cli.flags.projectDir = '.');

var tiappXml = path.resolve(path.join(cli.flags.projectDir, 'tiapp.xml'));

if (!fs.existsSync(tiappXml)) {
	console.error(chalk.red('[ERROR]') + ' Invalid project directory "' + chalk.cyan(cli.flags.projectDir) + '" because tiapp.xml not found');
	process.exit(1);
}

var tiapp = tiappxml.load(tiappXml);

if (!_.has(cli.flags, 'sdk')) {
	cli.flags.sdk = tiapp.sdkVersion;
}

var sdk = path.join(__dirname, 'titanium', cli.flags.sdk);

if (!fs.existsSync(sdk)) {
	console.error(chalk.red('[ERROR]') + ' Invalid SDK version ' + chalk.cyan(cli.flags.sdk));
	process.exit(1);
}

if (!_.has(cli.flags, 'platform') ||
	(cli.flags.platform !== 'ios' &&
	cli.flags.platform !== 'android')) {
	console.error(chalk.red('[ERROR]') + ' Invalid platform specified ' + chalk.cyan(cli.flags.platfrom));
	process.exit(1);
} else if (cli.flags.platform === 'ios') {
	cli.flags.platform = 'iphone';
}

var isAlloy = false;

_.each(tiapp.getPlugins(), function(plugin){
	if (plugin.id === 'ti.alloy') {
		isAlloy = true;
	}
});

var titanium = require('./titanium/' + cli.flags.sdk),
	Titanium = titanium(sdk, {
		version: cli.flags.sdk.replace(/\.GA$/, ''),
		platform: cli.flags.platform
	});

function createContext() {
	var context = vm.createContext({
		Titanium: Titanium,
		Ti: Titanium,
		L: function(params){
			return params;
		},
		String: _.extend(String, {
			format: function(params){ return params; },
			formatCurrency: function(params){ return params; },
			formatDate: function(params){ return params; },
			formatDecimal: function(params){ return params; },
			formatTime: function(params){ return params; }
		}),
		JSON: JSON,
		console: console,
		alert: function(params){
			console.log(chalk.green('[ALERT]') + ' ' + params);
		},
		exports: {},
		module: module,
		require: function(original){
			var source = path.resolve(path.join(cli.flags.projectDir, 'Resources', original + '.js')),
				newcontext;
			if (isAlloy) {
				source = path.resolve(path.join(cli.flags.projectDir, 'Resources', cli.flags.platform, original + '.js'));
			}

			if (fs.existsSync(source)) {
				newcontext = createContext();
				vm.runInContext(fs.readFileSync(source, 'utf8'), newcontext);

				return _.isEmpty(newcontext.exports) ? newcontext.module.exports : newcontext.exports;
			} else {
				console.warn(chalk.yellow('[WARN]') + ' Unknown module detect ' + chalk.cyan(original));
				return undefined;
			}
		}
	});

	return context;
}

var appjs = path.resolve(path.join(cli.flags.projectDir, 'Resources', 'app.js'));
if (isAlloy) {
	appjs = path.resolve(path.join(cli.flags.projectDir, 'Resources', cli.flags.platform, 'app.js'));
}

vm.runInContext(fs.readFileSync(appjs, 'utf8'), createContext());