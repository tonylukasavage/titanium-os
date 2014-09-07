// all ti calls will cache when appropriate

var _tmpdir;
exports.tmpdir = function() {
	return _tmpdir || (_tmpdir = Ti.Filesystem.tempDirectory);
};

exports.endianness = function() {
	return 'LE';
};

var _hostname;
exports.hostname = function() {
	return typeof _hostname !== 'undefined' ?
		_hostname : (_hostname = Ti.Platform.address || '');
};

var _type;
exports.type = function() {
	return _type || (_type = Ti.Platform.osname);
};

var _platform;
exports.platform = function() {
	return _platform || (_platform = Ti.Platform.name);
};

var _arch;
exports.arch = function() {
	return _arch || (_arch = Ti.Platform.architecture);
};

var _release;
exports.release = function() {
	return _release || (_release = Ti.Platform.version);
};

exports.uptime = function () { return 0; };

exports.loadavg = function () { return []; };

exports.freemem = function () {
	var avail = Ti.Platform.availableMemory;
	if (avail) {
		return exports.platform === 'iPhone OS' ? Math.floor(avail/1024) : avail;
	} else {
		return Number.MAX_VALUE;
	}
};

exports.totalmem = function () {
	return Number.MAX_VALUE;
};

exports.cpus = function () { return []; };

exports.networkInterfaces = exports.getNetworkInterfaces = function () { return {}; };

exports.EOL = '\n';
