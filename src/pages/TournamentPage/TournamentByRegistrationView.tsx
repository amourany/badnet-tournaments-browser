import dayjs from 'dayjs';
import {Accordion} from '@mantine/core';
import styles from './TournamentPage.module.css';
import {useTranslation} from 'react-i18next';
import {Tournament} from '@effects/badnet/tournament.types.ts';
import {useDateFormat} from '@hooks/useFormatDate.ts';
import {useFilters} from '@providers/TournamentFiltersProvider.tsx';
import {TournamentGroup} from '@components/TournamentGroup/TournamentGroup.tsx';
import {TournamentViewProps} from '@pages/TournamentPage/TournamentByDateView.tsx';

const TOURNAMENTS_OPENED = 'OPENED';
const TOURNAMENTS_CLOSED = 'CLOSED';

const groupTournaments = (tournaments: Tournament[]) => {
	const groupedTournaments = tournaments.reduce((acc, event) => {
		const isRegistrationOpen = dayjs.unix(event.openline).isBefore(dayjs());
		const isRegistrationClose = dayjs.unix(event.truedeadline).isBefore(dayjs());
		const groupingKey: string = isRegistrationClose ? TOURNAMENTS_CLOSED : isRegistrationOpen ? TOURNAMENTS_OPENED : event.openline.toString();

		if (!acc[groupingKey]) {
			acc[groupingKey] = [];
		}

		acc[groupingKey].push(event);
		return acc;
	}, {} as Record<string, Tournament[]>);

	return Object.entries(groupedTournaments)
		.sort((a, b) => a[0].localeCompare(b[0]));
};

export const TournamentByRegistrationView = ({ tournaments }: TournamentViewProps) => {

	const { t } = useTranslation('', { keyPrefix: 'REGISTRATION_VIEW' });
	const { formatDateTime } = useDateFormat();
	const { filters } = useFilters();
	const { hideOpenedTournaments, hideClosedTournaments } = filters;

	const groupedTournaments = groupTournaments(tournaments);
	const openedTournaments = groupedTournaments.filter(tournament => tournament[0] === TOURNAMENTS_OPENED);
	const closedTournaments = groupedTournaments.filter(tournament => tournament[0] === TOURNAMENTS_CLOSED);
	const otherTournaments = groupedTournaments.filter(tournament => tournament[0] !== TOURNAMENTS_OPENED && tournament[0] !== TOURNAMENTS_CLOSED);

	const renderTournamentGroup = (tournamentGroup: [string,Tournament[]]) => {
		const [
			groupingKey,
			tournaments,
		] = tournamentGroup;
		const date = t('DATE', { val: formatDateTime(dayjs.unix(Number(groupingKey)).toDate()) });
		return <TournamentGroup
			groupTitle={date}
			key={groupingKey}
			tournaments={tournaments}
		/>;
	};

	const renderTournamentGroupSortedByDate = (tournamentGroup: [string,Tournament[]]) => {
		const tournaments = tournamentGroup[1].sort((a, b) => a.firstDay - b.firstDay);
		return <TournamentGroup
			displayTitle={false}
			groupTitle={tournamentGroup[0]}
			key={tournamentGroup[0]}
			tournaments={tournaments}
		/>;
	};

	return <>
		<h1 className={styles.pageTitle}>{t('TITLE')}</h1>
		{otherTournaments.map(renderTournamentGroup)}
		<Accordion
			className={styles.accordion}
			transitionDuration={500}
			variant="separated"
		>
			{hideOpenedTournaments ? undefined : <Accordion.Item value={t('OPENED_ACCORDION')}>
				<Accordion.Control><h3>{t('OPENED_ACCORDION')}</h3></Accordion.Control>
				<Accordion.Panel className={styles.accordionPanel}>
					{openedTournaments.map(renderTournamentGroupSortedByDate)}
				</Accordion.Panel>
			</Accordion.Item>}
			{hideClosedTournaments ? undefined : <Accordion.Item value={t('CLOSED_ACCORDION')}>
				<Accordion.Control><h3>{t('CLOSED_ACCORDION')}</h3></Accordion.Control>
				<Accordion.Panel className={styles.accordionPanel}>
					{closedTournaments.map(renderTournamentGroupSortedByDate)}
				</Accordion.Panel>
			</Accordion.Item>}
		</Accordion>
	</>;

};
