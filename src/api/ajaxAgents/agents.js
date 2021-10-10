export default class Agents {
	constructor(client) {
		this.client = client;
		this.resourceUrl = '/agents';
	}

	list(filter) {
		return this.client.get(this.resourceUrl, filter);
	}

	retrieve(id, filter) {
		return this.client.get(`${this.resourceUrl}/${id}`, filter);
	}

	create(data) {
		return this.client.post(this.resourceUrl, data);
	}

	update(id, data) {
		return this.client.put(`${this.resourceUrl}/${id}`, data);
	}

	updateIds(data) {
		return this.client.put(`${this.resourceUrl}/ids`, data);
	}

	delete(id) {
		return this.client.delete(`${this.resourceUrl}/${id}`);
	}

	skuExists(agentId, sku) {
		return this.client.get(`${this.resourceUrl}/${agentId}/sku`, { sku });
	}

	slugExists(agentId, slug) {
		return this.client.get(`${this.resourceUrl}/${agentId}/slug`, { slug });
	}
}
