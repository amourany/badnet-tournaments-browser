import type {Config,} from 'jest';

const config: Config = {
	collectCoverage: false,
	extensionsToTreatAsEsm: [
		'.ts',
		'.tsx',
	],
	moduleFileExtensions: [
		'ts',
		'tsx',
		'js',
		'jsx',
		'json',
		'node',
	],
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/jest/__mocks__/fileMock.ts',
		'\\.(svg)\\?react$': '<rootDir>/jest/__mocks__/svgReactMock.tsx',
		'^@/(.*)$': '<rootDir>/src/$1',
		'^@api/(.*)$': '<rootDir>/src/api/$1',
		'^@assets/(.*)$': '<rootDir>/src/assets/$1',
		'^@components/(.*)$': '<rootDir>/src/components/$1',
		'^@config/(.*)$': '<rootDir>/src/config/$1',
		'^@effects/(.*)$': '<rootDir>/src/effects/$1',
		'^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
		'^@jestConfig/(.*)$': '<rootDir>/jest/$1',
		'^@pages/(.*)$': '<rootDir>/src/pages/$1',
		'^@providers/(.*)$': '<rootDir>/src/providers/$1',
		'^@routes/(.*)$': '<rootDir>/src/routes/$1',
		'^@store/(.*)$': '<rootDir>/src/store/$1',
		'^@styles/(.*)$': '<rootDir>/src/styles/$1',
		'^@templates/(.*)$': '<rootDir>/src/templates/$1',
		'^@translations/(.*)$': '<rootDir>/src/translations/$1',
		'^@types/(.*)$': '<rootDir>/src/types/$1',
		'^@utils/(.*)$': '<rootDir>/src/utils/$1',
	},
	preset: 'ts-jest',
	prettierPath: require.resolve('prettier-2'),
	roots: [
		'<rootDir>/src',
	],
	setupFilesAfterEnv: [
		'<rootDir>/jest/setupTests.ts',
	],
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: [
		'/node_modules/',
		'/dist/',
	],
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
	transform: {
		'^.+\\.(ts|tsx)$': [
			'ts-jest',
			{
				tsconfig: './tsconfig.jest.json',
				useESM: true,
			},
		],
	},
	verbose: true,
};


export default config;
