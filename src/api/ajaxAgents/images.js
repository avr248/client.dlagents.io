export default class AgentImages {
	constructor(client) {
		this.client = client;
	}

	list(agentId) {
		return this.client.get(`/agents/${agentId}/images`);
	}

	update(agentId, imageId, data) {
		return this.client.put(`/agents/${agentId}/images/${imageId}`, data);
	}

	upload(agentId, formData) {
		return this.client.postFormData(`/agents/${agentId}/images`, formData);
	}

	delete(agentId, imageId) {
		return this.client.delete(`/agents/${agentId}/images/${imageId}`);
	}
}
