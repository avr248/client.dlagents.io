'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Agents = function () {
	function Agents(client) {
		_classCallCheck(this, Agents);

		this.client = client;
		this.resourceUrl = '/agents';
	}

	_createClass(Agents, [{
		key: 'list',
		value: function list(filter) {
			return this.client.get(this.resourceUrl, filter);
		}
	}, {
		key: 'retrieve',
		value: function retrieve(id, filter) {
			return this.client.get(this.resourceUrl + '/' + id, filter);
		}
	}, {
		key: 'create',
		value: function create(data) {
			return this.client.post(this.resourceUrl, data);
		}
	}, {
		key: 'update',
		value: function update(id, data) {
			return this.client.put(this.resourceUrl + '/' + id, data);
		}
	}, {
		key: 'updateIds',
		value: function updateIds(data) {
			return this.client.put(this.resourceUrl + '/ids', data);
		}
	}, {
		key: 'delete',
		value: function _delete(id) {
			return this.client.delete(this.resourceUrl + '/' + id);
		}
	}, {
		key: 'skuExists',
		value: function skuExists(agentId, sku) {
			return this.client.get(this.resourceUrl + '/' + agentId + '/sku', { sku: sku });
		}
	}, {
		key: 'slugExists',
		value: function slugExists(agentId, slug) {
			return this.client.get(this.resourceUrl + '/' + agentId + '/slug', { slug: slug });
		}
	}]);

	return Agents;
}();

exports.default = Agents;