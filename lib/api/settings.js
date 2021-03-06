'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Settings = function () {
	function Settings(client) {
		_classCallCheck(this, Settings);

		this.client = client;
		this.resourceUrl = '/settings';
	}

	_createClass(Settings, [{
		key: 'retrieve',
		value: function retrieve() {
			return this.client.get(this.resourceUrl);
		}
	}, {
		key: 'update',
		value: function update(data) {
			return this.client.put(this.resourceUrl, data);
		}
	}, {
		key: 'retrieveEmailSettings',
		value: function retrieveEmailSettings() {
			return this.client.get(this.resourceUrl + '/email');
		}
	}, {
		key: 'updateEmailSettings',
		value: function updateEmailSettings(data) {
			return this.client.put(this.resourceUrl + '/email', data);
		}
	}, {
		key: 'retrieveImportSettings',
		value: function retrieveImportSettings() {
			return this.client.get(this.resourceUrl + '/import');
		}
	}, {
		key: 'updateImportSettings',
		value: function updateImportSettings(data) {
			return this.client.put(this.resourceUrl + '/import', data);
		}
	}, {
		key: 'retrieveEmailTemplate',
		value: function retrieveEmailTemplate(name) {
			return this.client.get(this.resourceUrl + '/email/templates/' + name);
		}
	}, {
		key: 'updateEmailTemplate',
		value: function updateEmailTemplate(name, data) {
			return this.client.put(this.resourceUrl + '/email/templates/' + name, data);
		}
	}, {
		key: 'uploadLogo',
		value: function uploadLogo(formData) {
			return this.client.postFormData(this.resourceUrl + '/logo', formData);
		}
	}, {
		key: 'deleteLogo',
		value: function deleteLogo() {
			return this.client.delete(this.resourceUrl + '/logo');
		}
	}]);

	return Settings;
}();

exports.default = Settings;