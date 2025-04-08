import {render} from '@testing-library/react';
import {Header} from './Header';

jest.mock('@components/LanguageSwitcher/LanguageSwitcher', () => ({
	LanguageSwitcher: () => <div>LanguageSwitcher</div>,
}));

describe('Header', () => {
	it('should render with navbar opened', () => {
		const { container } = render(
			<Header
				navbarOpened={true}
				toggleNavbar={jest.fn()}
			/>,
		);
		expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="header"
        >
          <div
            data-testid="mock-action-icon"
          >
            <div
              data-testid="mocked-icon-IconX"
            />
          </div>
          <div
            class="title"
          >
            <div
              class="logo"
            />
            <label>
              TITLE
            </label>
          </div>
          <div
            class="icons"
          >
            <div
              data-testid="mock-action-icon"
            >
              <div
                data-testid="mocked-icon-IconBrandGithub"
              />
            </div>
            <div>
              LanguageSwitcher
            </div>
          </div>
        </div>
      </div>
    `);
	});

	it('should render with navbar closed', () => {
		const { container } = render(
			<Header
				navbarOpened={false}
				toggleNavbar={jest.fn()}
			/>,
		);
		expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="header"
        >
          <div
            data-testid="mock-action-icon"
          >
            <div
              data-testid="mocked-icon-IconAdjustments"
            />
          </div>
          <div
            class="title"
          >
            <div
              class="logo"
            />
            <label>
              TITLE
            </label>
          </div>
          <div
            class="icons"
          >
            <div
              data-testid="mock-action-icon"
            >
              <div
                data-testid="mocked-icon-IconBrandGithub"
              />
            </div>
            <div>
              LanguageSwitcher
            </div>
          </div>
        </div>
      </div>
    `);
	});
});
