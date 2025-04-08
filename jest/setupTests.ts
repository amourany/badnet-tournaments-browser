// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
import '@testing-library/jest-dom';

import {TextDecoder, TextEncoder,} from 'util';
// Import all mocks
import './__mocks__/svgReactMock';
import './__mocks__/mantineMock';
import './__mocks__/useTranslationMock';
import './__mocks__/tablerIconsMock';
import './__mocks__/dayjsMock';

Object.assign(global, {
	TextDecoder,
	TextEncoder,
});

