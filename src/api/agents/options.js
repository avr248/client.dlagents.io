export default class AgentOptions {
	constructor(client) {
		this.client = client;
	}

	list(agentId) {
		return this.client.get(`/agents/${agentId}/options`);
	}

	retrieve(agentId, optionId) {
		return this.client.get(`/agents/${agentId}/options/${optionId}`);
	}

	create(agentId, data) {
		return this.client.post(`/agents/${agentId}/options`, data);
	}

	update(agentId, optionId, data) {
		return this.client.put(`/agents/${agentId}/options/${optionId}`, data);
	}

	delete(agentId, optionId) {
		return this.client.delete(`/agents/${agentId}/options/${optionId}`);
	}
}
