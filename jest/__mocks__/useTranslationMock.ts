jest.mock('@hooks/useTranslation', () => ({
	useTranslation: jest.fn().mockImplementation(() => ({
		t: jest.fn().mockImplementation((key) => key),
	})),
}));
