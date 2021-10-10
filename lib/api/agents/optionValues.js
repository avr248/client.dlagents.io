"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AgentOptionValues = function () {
	function AgentOptionValues(client) {
		_classCallCheck(this, AgentOptionValues);

		this.client = client;
	}

	_createClass(AgentOptionValues, [{
		key: "list",
		value: function list(agentId, optionId) {
			return this.client.get("/agents/" + agentId + "/options/" + optionId + "/values");
		}
	}, {
		key: "retrieve",
		value: function retrieve(agentId, optionId, valueId) {
			return this.client.get("/agents/" + agentId + "/options/" + optionId + "/values/" + valueId);
		}
	}, {
		key: "create",
		value: function create(agentId, optionId, data) {
			return this.client.post("/agents/" + agentId + "/options/" + optionId + "/values", data);
		}
	}, {
		key: "update",
		value: function update(agentId, optionId, valueId, data) {
			return this.client.put("/agents/" + agentId + "/options/" + optionId + "/values/" + valueId, data);
		}
	}, {
		key: "delete",
		value: function _delete(agentId, optionId, valueId) {
			return this.client.delete("/agents/" + agentId + "/options/" + optionId + "/values/" + valueId);
		}
	}]);

	return AgentOptionValues;
}();

exports.default = AgentOptionValues;