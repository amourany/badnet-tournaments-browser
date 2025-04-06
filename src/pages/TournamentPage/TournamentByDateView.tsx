import dayjs from 'dayjs';
import {useTranslation} from 'react-i18next';
import styles from './TournamentPage.module.css';
import {Tournament} from '@effects/badnet/tournament.types';
import {useDateFormat} from '@hooks/useFormatDate.ts';
import {TournamentGroup} from '@components/TournamentGroup/TournamentGroup.tsx';

export type TournamentViewProps = {
	tournaments: Tournament[]
};

const groupTournaments = (tournaments: Tournament[]) => {
	const groupedTournaments = tournaments.reduce((acc, event) => {
		const groupingKey: string = event.firstDay.toString();

		if (!acc[groupingKey]) {
			acc[groupingKey] = [];
		}

		acc[groupingKey].push(event);
		return acc;
	}, {} as Record<string, Tournament[]>);

	return Object.entries(groupedTournaments)
		.sort((a, b) => a[0].localeCompare(b[0]));
};

export const TournamentByDateView = ({ tournaments }: TournamentViewProps) => {

	const { t } = useTranslation('', { keyPrefix: 'TOURNAMENT_VIEW' });
	const { formatDate } = useDateFormat();

	const groupedTournaments = groupTournaments(tournaments);

	const renderTournamentGroup = (tournamentGroup: [string,Tournament[]]) => {
		const [
			groupingKey,
			tournaments,
		] = tournamentGroup;
		const date = t('SINGLE_DAY', { val: formatDate(dayjs.unix(Number(groupingKey)).toDate()) });
		return <TournamentGroup
			groupTitle={date}
			key={groupingKey}
			tournaments={tournaments}
		/>;
	};

	const renderEmptyState = () => <div>{t('EMPTY_STATE')}</div>;

	return <>
		<h1 className={styles.pageTitle}>{t('TITLE')}</h1>
		{Object.keys(groupedTournaments).length === 0 ? renderEmptyState() : groupedTournaments.map(renderTournamentGroup)}
	</>;
};
