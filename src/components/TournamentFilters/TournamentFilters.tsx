import {ScrollArea, Stack, UnstyledButton} from '@mantine/core';
import {RegionFilter} from '@components/TournamentFilters/RegionFilter/RegionFilter.tsx';
import {Filters, useFilters} from '@providers/TournamentFiltersProvider';
import {useTranslation} from 'react-i18next';
import styles from './TournamentFilters.module.css';
import {HideOpenedTournamentsFilter} from '@components/TournamentFilters/HideOpenedTournamentsFilter/HideOpenedTournamentsFilter.tsx';
import {HideClosedTournamentsFilter} from '@components/TournamentFilters/HideClosedTournamentsFilter/HideClosedTournamentsFilter.tsx';
import {SortModeFilter} from '@components/TournamentFilters/SortModeFilter/SortModeFilter.tsx';
import {TextFilter} from '@components/TournamentFilters/TextFilter/TextFilter.tsx';
import {AgeCategoryFilter} from '@components/TournamentFilters/AgeCategoryFilter/AgeCategoryFilter.tsx';

export type FiltersProps = {
	filters: Filters,
	onFiltersChange: (filters: Filters) => void
};

export const TournamentFilters = () => {

	const { t } = useTranslation('', { keyPrefix: 'FILTERS' });
	const { filters, setFilters, isDefaultFilters, resetFilters } = useFilters();

	return <ScrollArea type="scroll">
		<Stack className={styles.filters}>
			<div className={styles.header}>
				{!isDefaultFilters ?
					<UnstyledButton
						component="a"
						onClick={resetFilters}
					>
						{t('CLEAR')}
					</UnstyledButton> : null}
			</div>
			<TextFilter
				filters={filters}
				onFiltersChange={setFilters}
			/>
			<RegionFilter
				filters={filters}
				onFiltersChange={setFilters}
			/>
			<AgeCategoryFilter
				filters={filters}
				onFiltersChange={setFilters}
			/>
			<SortModeFilter
				filters={filters}
				onFiltersChange={setFilters}
			/>
			<HideOpenedTournamentsFilter
				filters={filters}
				onFiltersChange={setFilters}
			/>
			<HideClosedTournamentsFilter
				filters={filters}
				onFiltersChange={setFilters}
			/>
		</Stack>
	</ScrollArea>;
};
