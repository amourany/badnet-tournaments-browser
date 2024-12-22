import {SortModeFilter} from "./SortModeFilter/SortModeFilter.tsx";
import {TextFilter} from "./TextFilter/TextFilter.tsx";
import {RegionFilter} from "./RegionFilter/RegionFilter.tsx";
import {HideOpenedTournamentsFilter} from "./HideOpenedTournamentsFilter/HideOpenedTournamentsFilter.tsx";
import {HideClosedTournamentsFilter} from "./HideClosedTournamentsFilter/HideClosedTournamentsFilter.tsx";
import {ScrollArea, Stack, UnstyledButton} from "@mantine/core";
import styles from "./TournamentFilters.module.css";
import {Filters, useFilters} from "../../providers/TournamentFiltersProvider.tsx";
import {useTranslation} from "react-i18next";

export type FiltersProps = {
    filters: Filters,
    onFiltersChange: (filters: Filters) => void
}

export const TournamentFilters = () => {

    const {t} = useTranslation('', {keyPrefix: 'FILTERS'})
    const {filters, setFilters, isDefaultFilters, resetFilters} = useFilters();

    return <ScrollArea type="scroll">
        <Stack className={styles.filters}>
            <div className={styles.header}>
                {!isDefaultFilters ?
                    <UnstyledButton component="a" onClick={resetFilters}>{t('CLEAR')}</UnstyledButton> : null}
            </div>
            <TextFilter filters={filters} onFiltersChange={setFilters}/>
            <RegionFilter filters={filters} onFiltersChange={setFilters}/>
            <SortModeFilter filters={filters} onFiltersChange={setFilters}/>
            <HideOpenedTournamentsFilter filters={filters} onFiltersChange={setFilters}/>
            <HideClosedTournamentsFilter filters={filters} onFiltersChange={setFilters}/>
        </Stack>
    </ScrollArea>
}
