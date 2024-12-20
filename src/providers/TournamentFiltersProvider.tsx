import {createContext, PropsWithChildren, useContext, useState} from "react";

export const TOURNAMENT_DATE = 'tournament'
export const REGISTRATION_DATE = 'registration'

export type SortMode = typeof TOURNAMENT_DATE | typeof REGISTRATION_DATE

export type Filters = {
    sortMode: SortMode,
    search: string,
    region: string,
    hideOpenedTournaments: boolean,
    hideClosedTournaments: boolean,
}

export type FiltersContext = {
    filters: Filters,
    setFilters: (filters: Filters) => void,
    isDefaultFilters: boolean,
    resetFilters: () => void
}

export const initialFilters: Filters = {
    sortMode: REGISTRATION_DATE,
    search: '',
    region: 'LIFB',
    hideOpenedTournaments: false,
    hideClosedTournaments: true
}

export const filtersContext = createContext<FiltersContext>({
    filters: initialFilters,
    setFilters: () => {},
    isDefaultFilters: true,
    resetFilters: () => {}
});

export const useFilters = () => useContext<FiltersContext>(filtersContext);

export const TournamentFiltersProvider = ({children}: PropsWithChildren) => {

    const [filters, setFilters] = useState<Filters>(initialFilters);
    const [isDefaultFilters, setIsDefaultFilters] = useState<boolean>(true);
    const resetFilters = () => {
        setFilters(initialFilters);
        setIsDefaultFilters(true);
    }
    const onFiltersChange = (filters: Filters) => {
        setFilters(filters);
        setIsDefaultFilters(false);
    }

    return <filtersContext.Provider value={{filters, setFilters: onFiltersChange, isDefaultFilters, resetFilters}}>{children}</filtersContext.Provider>;
};
