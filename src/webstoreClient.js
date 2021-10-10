import fetch from 'cross-fetch';
import RestClient from './restClient';

export default class WebStoreClient extends RestClient {
	constructor(options) {
		super({ baseUrl: 'https://api.dlagents.io/v1', token: options.token });
	}

	static authorize = (email, adminUrl) => {
		const config = {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, admin_url: adminUrl })
		};

		return fetch('https://api.dlagents.io/v1/account/authorize', config).then(
			RestClient.returnStatusAndJson
		);
	};
}
