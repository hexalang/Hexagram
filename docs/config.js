;
(function() {
	const prefix = 'peyty_'
	const telegram = telegramSpawn(prefix, 2)

	const config = {
		app: {
			id: 24939,
			hash: 'cf2f9913563b63810ca02d77d5d44f92',
			version: telegram.VERSION
		},
		server: {
			test: [
				//{ id: 1, host: '149.154.175.10', port: 80 },
				//{ id: 2, host: '149.154.167.40', port: 80 },
				//{ id: 3, host: '149.154.175.117', port: 80 }
				{
					id: 2,
					host: '149.154.167.40',
					port: '443'
				}
			],
			production: [
				//{
				//    id: 2,
				//    host: '149.154.167.50',
				//    port: '443'
				//}
				{ id: 1, host: '149.154.175.50', port: 80 },
				{ id: 2, host: '149.154.167.51', port: 80 },
				{ id: 3, host: '149.154.175.100', port: 80 },
				{ id: 4, host: '149.154.167.91', port: 80 },
				{ id: 5, host: '91.108.56.140', port: 80 }
			]
		}
	};

	telegram.setConfig(config)

	window.telegram = telegram
	window.prefix = prefix
})();
