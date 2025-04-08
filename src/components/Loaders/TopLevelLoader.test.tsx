import {TopLevelLoader} from '@components/Loaders/TopLevelLoader';
import {render} from '@testing-library/react';

describe('TopLevelLoader', () => {
	it('should render', () => {
		const { container } = render(<TopLevelLoader />);
		expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          Loader
        </div>
      </div>
    `);
	});
});
