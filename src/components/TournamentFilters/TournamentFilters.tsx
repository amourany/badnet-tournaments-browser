import {SortModeFilter} from "./SortModeFilter/SortModeFilter.tsx";
import {TextFilter} from "./TextFilter/TextFilter.tsx";
import {RegionFilter} from "./RegionFilter/RegionFilter.tsx";
import {HideOpenedTournamentsFilter} from "./HideOpenedTournamentsFilter/HideOpenedTournamentsFilter.tsx";
import {HideClosedTournamentsFilter} from "./HideClosedTournamentsFilter/HideClosedTournamentsFilter.tsx";
import {ActionIcon, Stack, UnstyledButton} from "@mantine/core";
import styles from "./TournamentFilters.module.css";
import {useFilters} from "../../providers/TournamentFiltersProvider.tsx";
import {IconX} from "@tabler/icons-react";

export type TournamentFiltersProps = {
    onToggleNavbar: () => void
}

export const TournamentFilters = ({onToggleNavbar}: TournamentFiltersProps) => {

    const {isDefaultFilters, resetFilters} = useFilters();

    return <Stack className={styles.filters}>
        <div className={styles.header}>
            {!isDefaultFilters ?
                <UnstyledButton component="a" onClick={resetFilters}>Réinitialiser les filtres</UnstyledButton> : null}
            <ActionIcon onClick={onToggleNavbar} hiddenFrom="lg" variant="transparent" color="black" size="xl">
                <IconX/>
            </ActionIcon>
        </div>
        <TextFilter/>
        <RegionFilter/>
        <SortModeFilter/>
        <HideOpenedTournamentsFilter/>
        <HideClosedTournamentsFilter/>
    </Stack>
}
