import {Switch} from '@mantine/core';
import {useTranslation} from 'react-i18next';
import {FiltersProps} from '@components/TournamentFilters/TournamentFilters.tsx';

export const HideOpenedTournamentsFilter = ({ filters, onFiltersChange }: FiltersProps) => {
	const { t } = useTranslation('', { keyPrefix: 'FILTERS' });

	const onChange = (value: boolean) => {
		onFiltersChange({ ...filters,
			hideOpenedTournaments: value });
	};

	return <Switch
		checked={filters.hideOpenedTournaments}
		label={t('HIDE_OPENED_TOURNAMENTS')}
		onChange={(event) => onChange(event.currentTarget.checked)}
	/>;
};
