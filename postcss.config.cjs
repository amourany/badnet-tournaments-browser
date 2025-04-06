const { em } = require('@mantine/core');

module.exports = {
	plugins: {
		'postcss-preset-mantine': {},
		'postcss-simple-vars': {
			variables: {
				'mantine-breakpoint-lg': em(1200),
				'mantine-breakpoint-md': em(900),
				'mantine-breakpoint-sm': em(600),
				'mantine-breakpoint-xl': em(1800),
				'mantine-breakpoint-xs': em(360),
			},
		},
	},
};
