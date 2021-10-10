export default class AgentOptionValues {
	constructor(client) {
		this.client = client;
	}

	list(agentId, optionId) {
		return this.client.get(`/agents/${agentId}/options/${optionId}/values`);
	}

	retrieve(agentId, optionId, valueId) {
		return this.client.get(
			`/agents/${agentId}/options/${optionId}/values/${valueId}`
		);
	}

	create(agentId, optionId, data) {
		return this.client.post(
			`/agents/${agentId}/options/${optionId}/values`,
			data
		);
	}

	update(agentId, optionId, valueId, data) {
		return this.client.put(
			`/agents/${agentId}/options/${optionId}/values/${valueId}`,
			data
		);
	}

	delete(agentId, optionId, valueId) {
		return this.client.delete(
			`/agents/${agentId}/options/${optionId}/values/${valueId}`
		);
	}
}
