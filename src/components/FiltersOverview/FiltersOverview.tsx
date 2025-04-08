import {Pill} from '@mantine/core';
import styles from './FiltersOverview.module.css';
import {useFilters} from '@providers/TournamentFiltersProvider';
import {useTranslation} from '@hooks/useTranslation';

export const FiltersOverview = () => {
	const { t } = useTranslation({ keyPrefix: 'FILTERS.OVERVIEW' });
	const { filters, setFilters } = useFilters();
	const isRegionFilterActive = filters.region.length > 0;
	const isSearchFilterActive = filters.search.length > 0;
	const isAgeCategoryFilterActive = filters.ageCategories.length > 0;

	const isAnyFilterActive = isRegionFilterActive || isSearchFilterActive || isAgeCategoryFilterActive;

	const removeRegionFilter = () => {
		setFilters({ ...filters,
			region: '' });
	};

	const removeSearchFilter = () => {
		setFilters({ ...filters,
			search: '' });
	};

	const removeAgeCategoryFilter = (removedAgeCategory: string) => {
		const ageCategories = filters.ageCategories.filter(ageCategory => ageCategory !== removedAgeCategory);
		setFilters({ ...filters,
			ageCategories });
	};

	return <>
		{isAnyFilterActive ? <div>
			<label className={styles.title}>{t('ACTIVE_FILTERS')}</label>
			<div>
				{isRegionFilterActive ?
					<Pill
						onRemove={removeRegionFilter}
						withRemoveButton
					>
						{t('REGION_PILL')}
						{' '}
						{filters.region}
					</Pill> : null}
				{isAgeCategoryFilterActive ?
					filters.ageCategories.map(ageCategory => <Pill
						key={ageCategory}
						onRemove={() => removeAgeCategoryFilter(ageCategory)}
						withRemoveButton
					>
						{t('AGE_CATEGORY_PILL')}
						{' '}
						{ageCategory}
					</Pill>) : null}
				{isSearchFilterActive ?
					<Pill
						onRemove={removeSearchFilter}
						withRemoveButton
					>
						{t('SEARCH_PILL')}
						{' '}
						{filters.search}
					</Pill> : null}
			</div>
		</div> : null}
	</>;
};
