'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ajaxClient = require('./ajaxClient');

var _ajaxClient2 = _interopRequireDefault(_ajaxClient);

var _apiClient = require('./apiClient');

var _apiClient2 = _interopRequireDefault(_apiClient);

var _webstoreClient = require('./webstoreClient');

var _webstoreClient2 = _interopRequireDefault(_webstoreClient);

var _agentCategories = require('./api/agentCategories');

var _agentCategories2 = _interopRequireDefault(_agentCategories);

var _agentPrices = require('./api/agentPrices');

var _agentPrices2 = _interopRequireDefault(_agentPrices);

var _agentTags = require('./api/agentTags');

var _agentTags2 = _interopRequireDefault(_agentTags);

var _agentAttributes = require('./api/agentAttributes');

var _agentAttributes2 = _interopRequireDefault(_agentAttributes);

var _agents = require('./api/agents/agents');

var _agents2 = _interopRequireDefault(_agents);

var _agentOptions = require('./api/agentOptions');

var _agentOptions2 = _interopRequireDefault(_agentOptions);

var _optionValues = require('./api/agents/optionValues');

var _optionValues2 = _interopRequireDefault(_optionValues);

var _variants = require('./api/agents/variants');

var _variants2 = _interopRequireDefault(_variants);

var _images = require('./api/agents/images');

var _images2 = _interopRequireDefault(_images);

var _ajaxAgentCategories = require('./api/ajaxAgentCategories');

var _ajaxAgentCategories2 = _interopRequireDefault(_ajaxAgentCategories);

var _ajaxAgentPrices = require('./api/ajaxAgentPrices');

var _ajaxAgentPrices2 = _interopRequireDefault(_ajaxAgentPrices);

var _ajaxAgentTags = require('./api/ajaxAgentTags');

var _ajaxAgentTags2 = _interopRequireDefault(_ajaxAgentTags);

var _ajaxAgentAttributes = require('./api/ajaxAgentAttributes');

var _ajaxAgentAttributes2 = _interopRequireDefault(_ajaxAgentAttributes);

var _agents3 = require('./api/ajaxAgents/agents');

var _agents4 = _interopRequireDefault(_agents3);

var _ajaxAgentOptions = require('./api/ajaxAgentOptions');

var _ajaxAgentOptions2 = _interopRequireDefault(_ajaxAgentOptions);

var _images3 = require('./api/ajaxAgents/images');

var _images4 = _interopRequireDefault(_images3);

var _sitemap = require('./api/sitemap');

var _sitemap2 = _interopRequireDefault(_sitemap);

var _theme = require('./api/theme/theme');

var _theme2 = _interopRequireDefault(_theme);

var _settings = require('./api/theme/settings');

var _settings2 = _interopRequireDefault(_settings);

var _assets = require('./api/theme/assets');

var _assets2 = _interopRequireDefault(_assets);

var _placeholders = require('./api/theme/placeholders');

var _placeholders2 = _interopRequireDefault(_placeholders);

var _customerGroups = require('./api/customerGroups');

var _customerGroups2 = _interopRequireDefault(_customerGroups);

var _customers = require('./api/customers');

var _customers2 = _interopRequireDefault(_customers);

var _ajaxLogin = require('./api/ajaxLogin');

var _ajaxLogin2 = _interopRequireDefault(_ajaxLogin);

var _ajaxRegister = require('./api/ajaxRegister');

var _ajaxRegister2 = _interopRequireDefault(_ajaxRegister);

var _ajaxAccount = require('./api/ajaxAccount');

var _ajaxAccount2 = _interopRequireDefault(_ajaxAccount);

var _ajaxForgotPassword = require('./api/ajaxForgotPassword');

var _ajaxForgotPassword2 = _interopRequireDefault(_ajaxForgotPassword);

var _ajaxResetPassword = require('./api/ajaxResetPassword');

var _ajaxResetPassword2 = _interopRequireDefault(_ajaxResetPassword);

var _ajaxCustomers = require('./api/ajaxCustomers');

var _ajaxCustomers2 = _interopRequireDefault(_ajaxCustomers);

var _countries = require('./api/countries');

var _countries2 = _interopRequireDefault(_countries);

var _currencies = require('./api/currencies');

var _currencies2 = _interopRequireDefault(_currencies);

var _text = require('./api/text');

var _text2 = _interopRequireDefault(_text);

var _settings3 = require('./api/settings');

var _settings4 = _interopRequireDefault(_settings3);

var _pages = require('./api/pages');

var _pages2 = _interopRequireDefault(_pages);

var _tokens = require('./api/tokens');

var _tokens2 = _interopRequireDefault(_tokens);

var _redirects = require('./api/redirects');

var _redirects2 = _interopRequireDefault(_redirects);

var _webhooks = require('./api/webhooks');

var _webhooks2 = _interopRequireDefault(_webhooks);

var _files = require('./api/files');

var _files2 = _interopRequireDefault(_files);

var _settings5 = require('./api/apps/settings');

var _settings6 = _interopRequireDefault(_settings5);

var _account = require('./webstore/account');

var _account2 = _interopRequireDefault(_account);

var _services = require('./webstore/services');

var _services2 = _interopRequireDefault(_services);

var _serviceSettings = require('./webstore/serviceSettings');

var _serviceSettings2 = _interopRequireDefault(_serviceSettings);

var _serviceActions = require('./webstore/serviceActions');

var _serviceActions2 = _interopRequireDefault(_serviceActions);

var _serviceLogs = require('./webstore/serviceLogs');

var _serviceLogs2 = _interopRequireDefault(_serviceLogs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Client = function Client() {
	var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	_classCallCheck(this, Client);

	this.apiBaseUrl = options.apiBaseUrl || '/api/v1';
	this.apiToken = options.apiToken;
	this.ajaxBaseUrl = options.ajaxBaseUrl || '/ajax';
	this.webstoreToken = options.webstoreToken;

	var apiClient = new _apiClient2.default({
		baseUrl: this.apiBaseUrl,
		token: this.apiToken
	});
	var ajaxClient = new _ajaxClient2.default({ baseUrl: this.ajaxBaseUrl });
	var webstoreClient = new _webstoreClient2.default({ token: this.webstoreToken });

	this.agents = new _agents2.default(apiClient);
	this.agentOptions = new _agentOptions2.default(apiClient);
	this.agents.options = new _agentOptions2.default(apiClient);
	this.agents.options.values = new _optionValues2.default(apiClient);
	this.agents.variants = new _variants2.default(apiClient);
	this.agents.images = new _images2.default(apiClient);
	this.agentPrices = new _agentPrices2.default(apiClient);
	this.agentTags = new _agentTags2.default(apiClient);
	this.agentAttributes = new _agentAttributes2.default(apiClient);
	this.agentCategories = new _agentCategories2.default(apiClient);
	this.customers = new _customers2.default(apiClient);
	this.customerGroups = new _customerGroups2.default(apiClient);
	this.sitemap = new _sitemap2.default(apiClient);
	this.theme = new _theme2.default(apiClient);
	this.theme.settings = new _settings2.default(apiClient);
	this.theme.assets = new _assets2.default(apiClient);
	this.theme.placeholders = new _placeholders2.default(apiClient);
	this.countries = new _countries2.default(apiClient);
	this.currencies = new _currencies2.default(apiClient);
	this.text = new _text2.default(apiClient);
	this.settings = new _settings4.default(apiClient);
	this.pages = new _pages2.default(apiClient);
	this.tokens = new _tokens2.default(apiClient);
	this.redirects = new _redirects2.default(apiClient);
	this.webhooks = new _webhooks2.default(apiClient);
	this.files = new _files2.default(apiClient);
	this.apps = {};
	this.apps.settings = new _settings6.default(apiClient);

	this.ajax = {};
	this.ajax.agentCategories = new _ajaxAgentCategories2.default(ajaxClient);
	this.ajax.customers = new _ajaxCustomers2.default(ajaxClient);
	this.ajax.agents = new _agents4.default(ajaxClient);
	this.ajax.agents.images = new _images4.default(ajaxClient);
	this.ajax.agentPrices = new _ajaxAgentPrices2.default(ajaxClient);
	this.ajax.agentOptions = new _ajaxAgentOptions2.default(ajaxClient);
	this.ajax.agentTags = new _ajaxAgentTags2.default(ajaxClient);
	this.ajax.agentAttributes = new _ajaxAgentAttributes2.default(ajaxClient);
	this.ajax.sitemap = new _sitemap2.default(ajaxClient);
	this.ajax.login = new _ajaxLogin2.default(ajaxClient);
	this.ajax.register = new _ajaxRegister2.default(ajaxClient);
	this.ajax.account = new _ajaxAccount2.default(ajaxClient);
	this.ajax.forgotPassword = new _ajaxForgotPassword2.default(ajaxClient);
	this.ajax.resetPassword = new _ajaxResetPassword2.default(ajaxClient);
	this.ajax.countries = new _countries2.default(ajaxClient);
	this.ajax.currencies = new _currencies2.default(ajaxClient);
	this.ajax.pages = new _pages2.default(ajaxClient);

	this.webstore = {};
	this.webstore.account = new _account2.default(webstoreClient);
	this.webstore.services = new _services2.default(webstoreClient);
	this.webstore.services.settings = new _serviceSettings2.default(webstoreClient);
	this.webstore.services.actions = new _serviceActions2.default(webstoreClient);
	this.webstore.services.logs = new _serviceLogs2.default(webstoreClient);
};

Client.authorize = function (baseUrl, email) {
	return _apiClient2.default.authorize(baseUrl, email);
};

Client.authorizeInWebStore = function (email, adminUrl) {
	return _webstoreClient2.default.authorize(email, adminUrl);
};

exports.default = Client;