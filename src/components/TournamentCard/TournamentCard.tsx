import {Card} from '@mantine/core';
import styles from './TournamentCard.module.css';
import dayjs from 'dayjs';
import {IconCalendarMonth, IconCheckbox, IconMapPin, IconSquareX, IconStopwatch} from '@tabler/icons-react';
import {Tournament} from '@effects/badnet/tournament.types';
import {useDateFormat} from '@hooks/useFormatDate.ts';
import {useTranslation} from '@hooks/useTranslation';

export type TournamentCardProps = {
	tournament: Tournament
};

export const TournamentCard = ({ tournament }: TournamentCardProps) => {

	const { formatDate, formatDateTimeWithDay } = useDateFormat();
	const { t } = useTranslation({ keyPrefix: 'TOURNAMENT_CARD' });

	const firstDay = dayjs.unix(tournament.firstDay);
	const lastDay = dayjs.unix(tournament.lastDay);
	const lastDayLabel = formatDate(lastDay.toDate());
	const firstDayLabel = formatDate(firstDay.toDate());
	const rangeLabel = firstDayLabel.replace(`${firstDay.get('date')}`, `${firstDay.get('date')}-${lastDay.get('date')}`);
	const dateLabel = firstDay.isSame(lastDay, 'day') ? t('DATE.SINGLE_DAY', { val: lastDayLabel }) : t('DATE.MULTIPLE_DAYS', { val: rangeLabel });

	const registrationOpeningDate = dayjs.unix(tournament.openline);
	const registrationClosingDate = dayjs.unix(tournament.truedeadline);
	const registrationDateLabel = `${formatDateTimeWithDay(registrationOpeningDate.toDate())}`;

	const areRegistrationsOpen = registrationOpeningDate.isBefore(dayjs());
	const areRegistrationsClosed = registrationClosingDate.isBefore(dayjs());

	return <Card
		classNames={{
			root: styles.container,
			section: styles.section,
		}}
		radius="md"
		shadow="md"
		withBorder
	>
		<Card.Section inheritPadding>
			<h2
				className={styles.cardTitle}
				title={tournament.name}
			>
				{tournament.name}
			</h2>
			<div className={styles.singleLine}>
				<label className={styles.ageCategories}>{tournament.ageCategories.join(', ')}</label>
				<label className={styles.disciplines}>{tournament.disciplines.join(' ')}</label>
			</div>
			<div className={styles.line}>
				<label>
					<IconMapPin size={18}/>
					{tournament.location}
				</label>
				<label>
					<IconCalendarMonth size={18}/>
					{dateLabel}
				</label>
			</div>
			<div className={styles.registrationLine}>
				{areRegistrationsClosed ? <div>
					<IconSquareX size={18}/>
					<label>{t('REGISTRATIONS.CLOSED')}</label>
				</div>
					: areRegistrationsOpen ? <div>
						<IconCheckbox size={18}/>
						<label>{t('REGISTRATIONS.OPENED')}</label>
					</div>
						: <div>
							<IconStopwatch
								className={styles.registrationIcon}
								size={18}
							/>
							<label>
								{t('REGISTRATIONS.NOT_OPENED')}
								<b>{registrationDateLabel}</b>
							</label>
						</div>}
			</div>
		</Card.Section>
	</Card>;
};
