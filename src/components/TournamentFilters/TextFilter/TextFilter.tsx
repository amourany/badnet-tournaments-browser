import {CloseButton, TextInput} from '@mantine/core';
import {useEffect, useState} from 'react';
import {useDebouncedValue} from '@mantine/hooks';
import {useTranslation} from 'react-i18next';
import {FiltersProps} from '@components/TournamentFilters/TournamentFilters.tsx';

export const TextFilter = ({ filters, onFiltersChange }: FiltersProps) => {

	const { t } = useTranslation('', { keyPrefix: 'FILTERS' });
	const [
		value,
		setValue,
	] = useState(filters.search);
	const [
		debounced,
	] = useDebouncedValue(value, 500);

	useEffect(() => {
		if(filters.search !== debounced) {
			onFiltersChange({ ...filters,
				search: debounced });
		}
	}, [
		debounced,
	]);

	useEffect(() => {
		setValue(filters.search);
	}, [
		filters.search,
	]);

	return <div>
		<TextInput
			label={t('SEARCH')}
			onChange={(event) => setValue(event.currentTarget.value)}
			rightSection={
				<CloseButton
					aria-label="Clear input"
					onClick={() => setValue('')}
					style={{ display: value ? undefined : 'none' }}
				/>
			}
			value={value}
		/>
	</div>;
};
