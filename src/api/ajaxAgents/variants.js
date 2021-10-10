export default class AgentVariants {
	constructor(client) {
		this.client = client;
	}

	list(agentId) {
		return this.client.get(`/agents/${agentId}/variants`);
	}

	create(agentId, data) {
		return this.client.post(`/agents/${agentId}/variants`, data);
	}

	update(agentId, variantId, data) {
		return this.client.put(
			`/agents/${agentId}/variants/${variantId}`,
			data
		);
	}

	delete(agentId, variantId) {
		return this.client.delete(`/agents/${agentId}/variants/${variantId}`);
	}

	setOption(agentId, variantId, data) {
		return this.client.put(
			`/agents/${agentId}/variants/${variantId}/options`,
			data
		);
	}
}
