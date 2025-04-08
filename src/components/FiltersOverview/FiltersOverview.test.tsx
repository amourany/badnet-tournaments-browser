import {useFilters} from '@providers/TournamentFiltersProvider';
import {FiltersOverview} from './FiltersOverview';
import {render} from '@testing-library/react';

jest.mock('@providers/TournamentFiltersProvider', () => ({
	useFilters: jest.fn(),
}));

describe('FiltersOverview', () => {
	it('should render without any filters', () => {
		const emptyFilters = {
			ageCategories: [],
			hideClosedTournaments: false,
			hideOpenedTournaments: false,
			region: [],
			search: '',
			sortMode: 0,
		};
		(useFilters as jest.Mock).mockImplementation(() => ({
			filters: emptyFilters,
			setFilters: jest.fn(),
		}));

		const { container } = render(<FiltersOverview />);

		expect(container).toMatchInlineSnapshot('<div />');
	});

	it('should render with age category filter', () => {
		const filters = {
			ageCategories: [
				'Sénior',
				'Vétéran',
			],
			hideClosedTournaments: false,
			hideOpenedTournaments: false,
			region: [],
			search: '',
			sortMode: 0,
		};
		(useFilters as jest.Mock).mockImplementation(() => ({
			filters: filters,
			setFilters: jest.fn(),
		}));

		const { container } = render(<FiltersOverview />);

		expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          <label
            class="title"
          >
            ACTIVE_FILTERS
          </label>
          <div>
            <div
              data-testid="mock-pill"
            >
              AGE_CATEGORY_PILL
               
              Sénior
            </div>
            <div
              data-testid="mock-pill"
            >
              AGE_CATEGORY_PILL
               
              Vétéran
            </div>
          </div>
        </div>
      </div>
    `);
	});

	it('should render with region filter', () => {
		const filters = {
			ageCategories: [],
			hideClosedTournaments: false,
			hideOpenedTournaments: false,
			region: [
				'NAQU',
				'LIFB',
			],
			search: '',
			sortMode: 0,
		};
		(useFilters as jest.Mock).mockImplementation(() => ({
			filters: filters,
			setFilters: jest.fn(),
		}));

		const { container } = render(<FiltersOverview />);

		expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          <label
            class="title"
          >
            ACTIVE_FILTERS
          </label>
          <div>
            <div
              data-testid="mock-pill"
            >
              REGION_PILL
               
              NAQU
              LIFB
            </div>
          </div>
        </div>
      </div>
    `);
	});

	it('should render with search filter', () => {
		const filters = {
			ageCategories: [],
			hideClosedTournaments: false,
			hideOpenedTournaments: false,
			region: [],
			search: 'tournament name',
			sortMode: 0,
		};
		(useFilters as jest.Mock).mockImplementation(() => ({
			filters: filters,
			setFilters: jest.fn(),
		}));

		const { container } = render(<FiltersOverview />);

		expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          <label
            class="title"
          >
            ACTIVE_FILTERS
          </label>
          <div>
            <div
              data-testid="mock-pill"
            >
              SEARCH_PILL
               
              tournament name
            </div>
          </div>
        </div>
      </div>
    `);
	});
});
