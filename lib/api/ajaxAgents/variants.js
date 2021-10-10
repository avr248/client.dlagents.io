"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AgentVariants = function () {
	function AgentVariants(client) {
		_classCallCheck(this, AgentVariants);

		this.client = client;
	}

	_createClass(AgentVariants, [{
		key: "list",
		value: function list(agentId) {
			return this.client.get("/agents/" + agentId + "/variants");
		}
	}, {
		key: "create",
		value: function create(agentId, data) {
			return this.client.post("/agents/" + agentId + "/variants", data);
		}
	}, {
		key: "update",
		value: function update(agentId, variantId, data) {
			return this.client.put("/agents/" + agentId + "/variants/" + variantId, data);
		}
	}, {
		key: "delete",
		value: function _delete(agentId, variantId) {
			return this.client.delete("/agents/" + agentId + "/variants/" + variantId);
		}
	}, {
		key: "setOption",
		value: function setOption(agentId, variantId, data) {
			return this.client.put("/agents/" + agentId + "/variants/" + variantId + "/options", data);
		}
	}]);

	return AgentVariants;
}();

exports.default = AgentVariants;