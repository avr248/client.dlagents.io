"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AgentImages = function () {
	function AgentImages(client) {
		_classCallCheck(this, AgentImages);

		this.client = client;
	}

	_createClass(AgentImages, [{
		key: "list",
		value: function list(agentId) {
			return this.client.get("/agents/" + agentId + "/images");
		}
	}, {
		key: "update",
		value: function update(agentId, imageId, data) {
			return this.client.put("/agents/" + agentId + "/images/" + imageId, data);
		}
	}, {
		key: "upload",
		value: function upload(agentId, formData) {
			return this.client.postFormData("/agents/" + agentId + "/images", formData);
		}
	}, {
		key: "delete",
		value: function _delete(agentId, imageId) {
			return this.client.delete("/agents/" + agentId + "/images/" + imageId);
		}
	}]);

	return AgentImages;
}();

exports.default = AgentImages;