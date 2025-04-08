import {Select} from '@mantine/core';
import {useTranslation} from 'react-i18next';
import {FiltersProps} from '@components/TournamentFilters/TournamentFilters';
import {REGIONS} from '@effects/regions.types';

export const RegionFilter = ({ filters, onFiltersChange }: FiltersProps) => {

	const { t } = useTranslation('', { keyPrefix: 'FILTERS' });

	const onChange = (value: string | null) => {
		onFiltersChange({ ...filters,
			region: value ?? '' });
	};

	const options = [
		{ label: '',
			value: '' },
		...REGIONS.map(region => ({ label: `${region.label} - ${region.value}`,
			value: region.value }))
			.sort((a, b) => a.label.localeCompare(b.label)),
	];

	return <Select
		allowDeselect
		clearable
		data={options}
		label={t('REGION')}
		onChange={onChange}
		value={filters.region}
	/>;
};
