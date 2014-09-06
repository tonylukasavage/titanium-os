// all ti calls will cache when appropriate

var _tmpdir;
exports.tmpdir = function() {
	return _tmpdir || (_tmpdir = Ti.Filesystem.tempDirectory());
};

exports.endianness = function() {
	return 'LE';
};

var _hostname;
exports.hostname = function() {
	return typeof _hostname !== 'undefined' ?
		_hostname : (_hostname = Ti.Platform.address || '');
};