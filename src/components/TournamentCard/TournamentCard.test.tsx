import {render} from '@testing-library/react';
import {TournamentCard} from '@components/TournamentCard/TournamentCard';
import {Tournament} from '@effects/badnet/tournament.types';
import {today} from '@jestConfig/__mocks__/dayjsMock';
import dayjs from 'dayjs';

const aTournament: Tournament = {
	ageCategories: [
		'Sénior',
		'Vétéran',
	],
	canRegister: true,
	deadline: 1690889600,
	disciplines: [
		'DH',
		'DD',
		'MX',
	],
	firstDay: 1690889600,
	id: '1234',
	isRegistrationClose: true,
	isRegistrationOpen: true,
	lastDay: 1690889600,
	location: 'Tournament location',
	name: 'Tournament name',
	openline: 1690889600,
	status: 1,
	truedeadline: 1690889600,
	type: {
		id: 1,
		isteam: false,
		name: 'Tournament type',
	},
};

describe('TournamentCard', () => {
	describe('Not yet opened tournaments', () => {
		const tomorrow = dayjs(today).add(1, 'day').unix();
		const dayAfterTomorrow = dayjs(tomorrow).add(1, 'day').unix();

		it('should render for a single day tournament', () => {
			const tournamentFirstDay = dayjs(today).add(1, 'week').unix();

			const singleDayNotOpenedTournament: Tournament = {
				...aTournament,
				firstDay: tournamentFirstDay,
				lastDay: tournamentFirstDay,
				openline: tomorrow,
				truedeadline: dayAfterTomorrow,
			};

			const { container } = render(
				<TournamentCard tournament={singleDayNotOpenedTournament} />,
			);

			expect(container).toMatchInlineSnapshot(`
        <div>
          <div
            data-testid="mock-card"
          >
            <div
              data-testid="mock-card-section"
            >
              <h2
                class="cardTitle"
                title="Tournament name"
              >
                Tournament name
              </h2>
              <div
                class="singleLine"
              >
                <label
                  class="ageCategories"
                >
                  Sénior, Vétéran
                </label>
                <label
                  class="disciplines"
                >
                  DH DD MX
                </label>
              </div>
              <div
                class="line"
              >
                <label>
                  <div
                    data-testid="mocked-icon-IconMapPin"
                  />
                  Tournament location
                </label>
                <label>
                  <div
                    data-testid="mocked-icon-IconCalendarMonth"
                  />
                  DATE.SINGLE_DAY
                </label>
              </div>
              <div
                class="registrationLine"
              >
                <div>
                  <div
                    data-testid="mocked-icon-IconStopwatch"
                  />
                  <label>
                    REGISTRATIONS.NOT_OPENED
                    <b>
                      intlDate
                    </b>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      `);
		});

		it('should render for a multiple day tournament', () => {
			const tournamentFirstDay = dayjs(today).add(1, 'week').unix();
			const tournamentLastDay = dayjs(today)
				.add(1, 'week')
				.add(2, 'day')
				.unix();

			const multipleDaysNotOpenedTournament: Tournament = {
				...aTournament,
				firstDay: tournamentFirstDay,
				lastDay: tournamentLastDay,
				openline: tomorrow,
				truedeadline: dayAfterTomorrow,
			};

			const { container } = render(
				<TournamentCard tournament={multipleDaysNotOpenedTournament} />,
			);

			expect(container).toMatchInlineSnapshot(`
        <div>
          <div
            data-testid="mock-card"
          >
            <div
              data-testid="mock-card-section"
            >
              <h2
                class="cardTitle"
                title="Tournament name"
              >
                Tournament name
              </h2>
              <div
                class="singleLine"
              >
                <label
                  class="ageCategories"
                >
                  Sénior, Vétéran
                </label>
                <label
                  class="disciplines"
                >
                  DH DD MX
                </label>
              </div>
              <div
                class="line"
              >
                <label>
                  <div
                    data-testid="mocked-icon-IconMapPin"
                  />
                  Tournament location
                </label>
                <label>
                  <div
                    data-testid="mocked-icon-IconCalendarMonth"
                  />
                  DATE.MULTIPLE_DAYS
                </label>
              </div>
              <div
                class="registrationLine"
              >
                <div>
                  <div
                    data-testid="mocked-icon-IconStopwatch"
                  />
                  <label>
                    REGISTRATIONS.NOT_OPENED
                    <b>
                      intlDate
                    </b>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      `);
		});
	});

	describe('Opened tournaments', () => {
		const yesterday = dayjs(today).subtract(1, 'day').unix();
		const tomorrow = dayjs(today).add(1, 'day').unix();
		const dayAfterTomorrow = dayjs(tomorrow).add(1, 'day').unix();

		it('should render for a single day tournament', () => {
			const tournamentFirstDay = dayjs(today).add(1, 'week').unix();

			const singleDayOpenedTournament: Tournament = {
				...aTournament,
				firstDay: tournamentFirstDay,
				lastDay: tournamentFirstDay,
				openline: yesterday,
				truedeadline: dayAfterTomorrow,
			};

			const { container } = render(
				<TournamentCard tournament={singleDayOpenedTournament} />,
			);

			expect(container).toMatchInlineSnapshot(`
        <div>
          <div
            data-testid="mock-card"
          >
            <div
              data-testid="mock-card-section"
            >
              <h2
                class="cardTitle"
                title="Tournament name"
              >
                Tournament name
              </h2>
              <div
                class="singleLine"
              >
                <label
                  class="ageCategories"
                >
                  Sénior, Vétéran
                </label>
                <label
                  class="disciplines"
                >
                  DH DD MX
                </label>
              </div>
              <div
                class="line"
              >
                <label>
                  <div
                    data-testid="mocked-icon-IconMapPin"
                  />
                  Tournament location
                </label>
                <label>
                  <div
                    data-testid="mocked-icon-IconCalendarMonth"
                  />
                  DATE.SINGLE_DAY
                </label>
              </div>
              <div
                class="registrationLine"
              >
                <div>
                  <div
                    data-testid="mocked-icon-IconCheckbox"
                  />
                  <label>
                    REGISTRATIONS.OPENED
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      `);
		});

		it('should render for a multiple day tournament', () => {
			const tournamentFirstDay = dayjs(today).add(1, 'week').unix();
			const tournamentLastDay = dayjs(today)
				.add(1, 'week')
				.add(2, 'day')
				.unix();

			const multipleDaysOpenedTournament: Tournament = {
				...aTournament,
				firstDay: tournamentFirstDay,
				lastDay: tournamentLastDay,
				openline: yesterday,
				truedeadline: dayAfterTomorrow,
			};

			const { container } = render(
				<TournamentCard tournament={multipleDaysOpenedTournament} />,
			);

			expect(container).toMatchInlineSnapshot(`
        <div>
          <div
            data-testid="mock-card"
          >
            <div
              data-testid="mock-card-section"
            >
              <h2
                class="cardTitle"
                title="Tournament name"
              >
                Tournament name
              </h2>
              <div
                class="singleLine"
              >
                <label
                  class="ageCategories"
                >
                  Sénior, Vétéran
                </label>
                <label
                  class="disciplines"
                >
                  DH DD MX
                </label>
              </div>
              <div
                class="line"
              >
                <label>
                  <div
                    data-testid="mocked-icon-IconMapPin"
                  />
                  Tournament location
                </label>
                <label>
                  <div
                    data-testid="mocked-icon-IconCalendarMonth"
                  />
                  DATE.MULTIPLE_DAYS
                </label>
              </div>
              <div
                class="registrationLine"
              >
                <div>
                  <div
                    data-testid="mocked-icon-IconCheckbox"
                  />
                  <label>
                    REGISTRATIONS.OPENED
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      `);
		});
	});

	describe('Closed tournaments', () => {
		const yesterday = dayjs(today).subtract(1, 'day').unix();
		const dayBeforeYesterday = dayjs(yesterday).subtract(1, 'day').unix();

		it('should render for a single day tournament', () => {
			const tournamentFirstDay = dayjs(today).add(1, 'week').unix();

			const singleDayClosedTournament: Tournament = {
				...aTournament,
				firstDay: tournamentFirstDay,
				lastDay: tournamentFirstDay,
				openline: dayBeforeYesterday,
				truedeadline: yesterday,
			};

			const { container } = render(
				<TournamentCard tournament={singleDayClosedTournament} />,
			);

			expect(container).toMatchInlineSnapshot(`
        <div>
          <div
            data-testid="mock-card"
          >
            <div
              data-testid="mock-card-section"
            >
              <h2
                class="cardTitle"
                title="Tournament name"
              >
                Tournament name
              </h2>
              <div
                class="singleLine"
              >
                <label
                  class="ageCategories"
                >
                  Sénior, Vétéran
                </label>
                <label
                  class="disciplines"
                >
                  DH DD MX
                </label>
              </div>
              <div
                class="line"
              >
                <label>
                  <div
                    data-testid="mocked-icon-IconMapPin"
                  />
                  Tournament location
                </label>
                <label>
                  <div
                    data-testid="mocked-icon-IconCalendarMonth"
                  />
                  DATE.SINGLE_DAY
                </label>
              </div>
              <div
                class="registrationLine"
              >
                <div>
                  <div
                    data-testid="mocked-icon-IconSquareX"
                  />
                  <label>
                    REGISTRATIONS.CLOSED
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      `);
		});

		it('should render for a multiple day tournament', () => {
			const tournamentFirstDay = dayjs(today).add(1, 'week').unix();
			const tournamentLastDay = dayjs(today)
				.add(1, 'week')
				.add(2, 'day')
				.unix();

			const multipleDaysOpenedTournament: Tournament = {
				...aTournament,
				firstDay: tournamentFirstDay,
				lastDay: tournamentLastDay,
				openline: dayBeforeYesterday,
				truedeadline: yesterday,
			};

			const { container } = render(
				<TournamentCard tournament={multipleDaysOpenedTournament} />,
			);

			expect(container).toMatchInlineSnapshot(`
        <div>
          <div
            data-testid="mock-card"
          >
            <div
              data-testid="mock-card-section"
            >
              <h2
                class="cardTitle"
                title="Tournament name"
              >
                Tournament name
              </h2>
              <div
                class="singleLine"
              >
                <label
                  class="ageCategories"
                >
                  Sénior, Vétéran
                </label>
                <label
                  class="disciplines"
                >
                  DH DD MX
                </label>
              </div>
              <div
                class="line"
              >
                <label>
                  <div
                    data-testid="mocked-icon-IconMapPin"
                  />
                  Tournament location
                </label>
                <label>
                  <div
                    data-testid="mocked-icon-IconCalendarMonth"
                  />
                  DATE.MULTIPLE_DAYS
                </label>
              </div>
              <div
                class="registrationLine"
              >
                <div>
                  <div
                    data-testid="mocked-icon-IconSquareX"
                  />
                  <label>
                    REGISTRATIONS.CLOSED
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      `);
		});
	});
});
