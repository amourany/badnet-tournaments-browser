import {PropsWithChildren} from 'react';

jest.mock('@mantine/core', () => ({
	...jest.requireActual('@mantine/core'),
	ActionIcon: jest.fn(({ children }:PropsWithChildren) => <div data-testid="mock-action-icon">{children}</div>),
	Card: Object.assign(jest.fn(({ children }:PropsWithChildren) => <div data-testid="mock-card">{children}</div>), {
		Section: jest.fn(({ children }:PropsWithChildren) => <div data-testid="mock-card-section">{children}</div>),
	}),
	Pill: ({ children }: PropsWithChildren) => <div data-testid="mock-pill">{children}</div>,
	Progress: () => <div>Loader</div>,
}));
