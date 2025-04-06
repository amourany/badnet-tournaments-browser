import {Switch} from '@mantine/core';
import {useTranslation} from 'react-i18next';
import {FiltersProps} from '@components/TournamentFilters/TournamentFilters.tsx';

export const HideClosedTournamentsFilter = ({ filters, onFiltersChange }: FiltersProps) => {

	const { t } = useTranslation('', { keyPrefix: 'FILTERS' });

	const onChange = (value: boolean) => {
		onFiltersChange({ ...filters,
			hideClosedTournaments: value });
	};

	return <Switch
		checked={filters.hideClosedTournaments}
		label={t('HIDE_CLOSED_TOURNAMENTS')}
		onChange={(event) => onChange(event.currentTarget.checked)}
	/>;
};
