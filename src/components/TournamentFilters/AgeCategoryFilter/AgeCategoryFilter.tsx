import {AGE_CATEGORIES} from '@effects/age-categories.types';
import {MultiSelect} from '@mantine/core';
import {useTranslation} from 'react-i18next';
import {FiltersProps} from '@components/TournamentFilters/TournamentFilters.tsx';

export const AgeCategoryFilter = ({ filters, onFiltersChange }: FiltersProps) => {

	const { t } = useTranslation('', { keyPrefix: 'FILTERS' });

	const onChange = (value: string[]) => {
		onFiltersChange({ ...filters,
			ageCategories: value });
	};

	const options = AGE_CATEGORIES.map(category => ({ label: category.label,
		value: category.id }));

	return <MultiSelect
		data={options}
		label={t('AGE_CATEGORY')}
		onChange={onChange}
		value={filters.ageCategories}
	/>;
};
