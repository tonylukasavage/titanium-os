module.exports=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])(1);