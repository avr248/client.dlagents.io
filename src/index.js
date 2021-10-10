import AjaxClient from './ajaxClient';
import ApiClient from './apiClient';
import WebStoreClient from './webstoreClient';
import AgentCategories from './api/agentCategories';
import AgentTags from './api/agentTags';
import AgentAttributes from './api/agentAttributes';
import Agents from './api/agents/agents';
import AgentOptions from './api/agentOptions';
import AgentOptionValues from './api/agents/optionValues';
import AgentVariants from './api/agents/variants';
import AgentImages from './api/agents/images';

import AjaxAgentCategories from './api/ajaxAgentCategories';
import AjaxAgentTags from './api/ajaxAgentTags';
import AjaxAgentAttributes from './api/ajaxAgentAttributes';
import AjaxAgents from './api/ajaxAgents/agents';
import AjaxAgentOptions from './api/ajaxAgentOptions';
import AjaxAgentImages from './api/ajaxAgents/images';

import Sitemap from './api/sitemap';
import Theme from './api/theme/theme';
import ThemeSettings from './api/theme/settings';
import ThemeAssets from './api/theme/assets';
import ThemePlaceholders from './api/theme/placeholders';
import CustomerGroups from './api/customerGroups';
import Customers from './api/customers';
import AjaxLogin from './api/ajaxLogin';
import AjaxRegister from './api/ajaxRegister';
import AjaxAccount from './api/ajaxAccount';
import AjaxForgotPassword from './api/ajaxForgotPassword';
import AjaxResetPassword from './api/ajaxResetPassword';
import AjaxCustomers from './api/ajaxCustomers';
import Countries from './api/countries';
import Currencies from './api/currencies';
import Text from './api/text';
import Settings from './api/settings';
import Pages from './api/pages';
import Tokens from './api/tokens';
import Redirects from './api/redirects';
import Webhooks from './api/webhooks';
import Files from './api/files';
import AppSettings from './api/apps/settings';
import WebStoreAccount from './webstore/account';
import WebStoreServices from './webstore/services';
import WebStoreServiceSettings from './webstore/serviceSettings';
import WebStoreServiceActions from './webstore/serviceActions';
import WebStoreServiceLogs from './webstore/serviceLogs';

export default class Client {
	constructor(options = {}) {
		this.apiBaseUrl = options.apiBaseUrl || '/api/v1';
		this.apiToken = options.apiToken;
		this.ajaxBaseUrl = options.ajaxBaseUrl || '/ajax';
		this.webstoreToken = options.webstoreToken;

		const apiClient = new ApiClient({
			baseUrl: this.apiBaseUrl,
			token: this.apiToken
		});
		const ajaxClient = new AjaxClient({ baseUrl: this.ajaxBaseUrl });
		const webstoreClient = new WebStoreClient({ token: this.webstoreToken });

		this.agents = new Agents(apiClient);
		this.agentOptions = new AgentOptions(apiClient);
		this.agents.options = new AgentOptions(apiClient);
		this.agents.options.values = new AgentOptionValues(apiClient);
		this.agents.variants = new AgentVariants(apiClient);
		this.agents.images = new AgentImages(apiClient);
		this.agentTags = new AgentTags(apiClient);
		this.agentAttributes = new AgentAttributes(apiClient);
		this.agentCategories = new AgentCategories(apiClient);
		this.customers = new Customers(apiClient);
		this.customerGroups = new CustomerGroups(apiClient);
		this.sitemap = new Sitemap(apiClient);
		this.theme = new Theme(apiClient);
		this.theme.settings = new ThemeSettings(apiClient);
		this.theme.assets = new ThemeAssets(apiClient);
		this.theme.placeholders = new ThemePlaceholders(apiClient);
		this.countries = new Countries(apiClient);
		this.currencies = new Currencies(apiClient);
		this.text = new Text(apiClient);
		this.settings = new Settings(apiClient);
		this.pages = new Pages(apiClient);
		this.tokens = new Tokens(apiClient);
		this.redirects = new Redirects(apiClient);
		this.webhooks = new Webhooks(apiClient);
		this.files = new Files(apiClient);
		this.apps = {};
		this.apps.settings = new AppSettings(apiClient);

		this.ajax = {};
		this.ajax.agentCategories = new AjaxAgentCategories(ajaxClient);
		this.ajax.customers = new AjaxCustomers(ajaxClient);
		this.ajax.agents = new AjaxAgents(ajaxClient);
		this.ajax.agents.images = new AjaxAgentImages(ajaxClient);
		this.ajax.agentOptions = new AjaxAgentOptions(ajaxClient);
		this.ajax.agentTags = new AjaxAgentTags(ajaxClient);
		this.ajax.agentAttributes = new AjaxAgentAttributes(ajaxClient);
		this.ajax.sitemap = new Sitemap(ajaxClient);
		this.ajax.login = new AjaxLogin(ajaxClient);
		this.ajax.register = new AjaxRegister(ajaxClient);
		this.ajax.account = new AjaxAccount(ajaxClient);
		this.ajax.forgotPassword = new AjaxForgotPassword(ajaxClient);
		this.ajax.resetPassword = new AjaxResetPassword(ajaxClient);
		this.ajax.countries = new Countries(ajaxClient);
		this.ajax.currencies = new Currencies(ajaxClient);
		this.ajax.pages = new Pages(ajaxClient);

		this.webstore = {};
		this.webstore.account = new WebStoreAccount(webstoreClient);
		this.webstore.services = new WebStoreServices(webstoreClient);
		this.webstore.services.settings = new WebStoreServiceSettings(
			webstoreClient
		);
		this.webstore.services.actions = new WebStoreServiceActions(webstoreClient);
		this.webstore.services.logs = new WebStoreServiceLogs(webstoreClient);
	}

	static authorize = (baseUrl, email) => ApiClient.authorize(baseUrl, email);

	static authorizeInWebStore = (email, adminUrl) =>
		WebStoreClient.authorize(email, adminUrl);
}
