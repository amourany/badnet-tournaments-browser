import {SortModeFilter} from "./SortModeFilter/SortModeFilter.tsx";
import {TextFilter} from "./TextFilter/TextFilter.tsx";
import {RegionFilter} from "./RegionFilter/RegionFilter.tsx";
import {HideOpenedTournamentsFilter} from "./HideOpenedTournamentsFilter/HideOpenedTournamentsFilter.tsx";
import {HideClosedTournamentsFilter} from "./HideClosedTournamentsFilter/HideClosedTournamentsFilter.tsx";
import {ScrollArea, Stack, UnstyledButton} from "@mantine/core";
import styles from "./TournamentFilters.module.css";
import {Filters, useFilters} from "../../providers/TournamentFiltersProvider.tsx";

export type FiltersProps = {
    filters: Filters,
    onFiltersChange: (filters: Filters) => void
}

export const TournamentFilters = () => {

    const {filters, setFilters, isDefaultFilters, resetFilters} = useFilters();

    return <ScrollArea type="scroll">
        <Stack className={styles.filters}>
            <div className={styles.header}>
                {!isDefaultFilters ?
                    <UnstyledButton component="a" onClick={resetFilters}>Réinitialiser les
                        filtres</UnstyledButton> : null}
            </div>
            <TextFilter/>
            <RegionFilter filters={filters} onFiltersChange={setFilters}/>
            <SortModeFilter/>
            <HideOpenedTournamentsFilter/>
            <HideClosedTournamentsFilter/>
        </Stack>
    </ScrollArea>
}
