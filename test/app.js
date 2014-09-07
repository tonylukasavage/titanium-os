var os = require('ti-os'),
	should = require('should');
require('ti-mocha');

describe('ti-os', function() {

	it('exports modules', function() {
		should.exist(os);
	});

	it('exposes os functions', function() {
		os.tmpdir.should.be.a.Function;
		os.endianness.should.be.a.Function;
		os.hostname.should.be.a.Function;
		os.type.should.be.a.Function;
		os.platform.should.be.a.Function;
		os.arch.should.be.a.Function;
		os.release.should.be.a.Function;
		os.uptime.should.be.a.Function;
		os.loadavg.should.be.a.Function;
		os.totalmem.should.be.a.Function;
		os.freemem.should.be.a.Function;
		os.cpus.should.be.a.Function;
		os.networkInterfaces.should.be.a.Function;
		os.EOL.should.be.a.String;
	});

	// some assertions are tested twice to test caching
	it('invokes os.tmpdir', function() {
		os.tmpdir().should.equal(Ti.Filesystem.tempDirectory);
		os.tmpdir().should.equal(Ti.Filesystem.tempDirectory);
	});

	it('invokes os.endianness', function() {
		os.endianness().should.equal('LE');
	});

	it('invokes os.hostname', function() {
		os.hostname().should.equal(Ti.Platform.address);
		os.hostname().should.equal(Ti.Platform.address);
	});

	it('invokes os.type', function() {
		os.type().should.equal(Ti.Platform.osname);
		os.type().should.equal(Ti.Platform.osname);
	});

	it('invokes os.platform', function() {
		os.platform().should.equal(Ti.Platform.name);
		os.platform().should.equal(Ti.Platform.name);
	});

	it('invokes os.arch', function() {
		os.arch().should.equal(Ti.Platform.architecture);
		os.arch().should.equal(Ti.Platform.architecture);
	});

	it('invokes os.release', function() {
		os.release().should.equal(Ti.Platform.version);
		os.release().should.equal(Ti.Platform.version);
	});

	it('invokes os.uptime', function() {
		os.uptime().should.equal(0);
	});

	it('invokes os.loadavg', function() {
		os.loadavg().should.be.an.Array;
	});

	it('invokes os.totalmem', function() {
		os.totalmem().should.be.a.Number;
	});

	it('invokes os.freemem', function() {
		os.freemem().should.be.a.Number;
	});

	it('invokes os.cpus', function() {
		os.cpus().should.be.an.Object;
	});

	it('invokes os.networkInterfaces', function() {
		os.networkInterfaces().should.be.an.Object;
	});

	it('has os.EOL', function() {
		os.EOL.should.equal('\n');
	});

});

mocha.run(function() {
	Ti.API.info('[TESTS COMPLETE]');
});