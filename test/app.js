var os = require('ti-os'),
	should = require('should');
require('ti-mocha');

describe('ti-os', function() {

	it('exports modules', function() {
		should.exist(os);
	});

	it('exposes os functions');

	it('invokes function');

});

mocha.run(function() {
	Ti.API.info('[TESTS COMPLETE]');
});