jest.mock('@tabler/icons-react', () => new Proxy(
	{},
	{
		get: (_, prop) => jest.fn(() => <div data-testid={`mocked-icon-${String(prop)}`} />),
	},
));
