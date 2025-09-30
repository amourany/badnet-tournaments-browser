import { useLocalStorage } from '@mantine/hooks';
import { PropsWithChildren, createContext, useContext, useMemo } from 'react';

export const TOURNAMENT_DATE = 'tournament';
export const REGISTRATION_DATE = 'registration';

export type SortMode = typeof TOURNAMENT_DATE | typeof REGISTRATION_DATE;

export type Filters = {
	sortMode: SortMode,
	search: string,
	region: string,
	ageCategories: string[],
	hideOpenedTournaments: boolean,
	hideClosedTournaments: boolean,
};

export type FiltersContext = {
	filters: Filters,
	setFilters: (filters: Filters) => void,
	isDefaultFilters: boolean,
	resetFilters: () => void
};

export const initialFilters: Filters = {
	ageCategories: [
		'Sénior',
	],
	hideClosedTournaments: true,
	hideOpenedTournaments: false,
	region: 'LIFB',
	search: '',
	sortMode: REGISTRATION_DATE,
};

export const filtersContext = createContext<FiltersContext>({
	filters: initialFilters,
	isDefaultFilters: true,
	resetFilters: () => {},
	setFilters: () => {},
});

export const useFilters = () => useContext<FiltersContext>(filtersContext);

export const TournamentFiltersProvider = ({ children }: PropsWithChildren) => {

	const [
		filters,
		setFilters,
	] = useLocalStorage<Filters>({
		defaultValue: initialFilters,
		key: "badnet-tournaments-browser/filters/v1"
	});
	const isDefaultFilters = useMemo(
		() => JSON.stringify(filters) === JSON.stringify(initialFilters),
		[ filters ],
	);
	const resetFilters = () => {
		setFilters(initialFilters);
	};
	const onFiltersChange = (filters: Filters) => {
		setFilters(filters);
	};

	return <filtersContext.Provider value={{ filters,
		isDefaultFilters,
		resetFilters,
		setFilters: onFiltersChange }}
	>
		{children}
	</filtersContext.Provider>;
};
