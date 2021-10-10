"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AgentOptions = function () {
	function AgentOptions(client) {
		_classCallCheck(this, AgentOptions);

		this.client = client;
	}

	_createClass(AgentOptions, [{
		key: "list",
		value: function list(agentId) {
			return this.client.get("/agents/" + agentId + "/options");
		}
	}, {
		key: "retrieve",
		value: function retrieve(agentId, optionId) {
			return this.client.get("/agents/" + agentId + "/options/" + optionId);
		}
	}, {
		key: "create",
		value: function create(agentId, data) {
			return this.client.post("/agents/" + agentId + "/options", data);
		}
	}, {
		key: "update",
		value: function update(agentId, optionId, data) {
			return this.client.put("/agents/" + agentId + "/options/" + optionId, data);
		}
	}, {
		key: "delete",
		value: function _delete(agentId, optionId) {
			return this.client.delete("/agents/" + agentId + "/options/" + optionId);
		}
	}]);

	return AgentOptions;
}();

exports.default = AgentOptions;