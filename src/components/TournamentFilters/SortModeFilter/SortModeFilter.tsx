import {useMediaQuery, useToggle} from "@mantine/hooks";
import {useEffect} from "react";
import {SegmentedControl, Text, useMantineTheme} from "@mantine/core";
import {REGISTRATION_DATE, SortMode, TOURNAMENT_DATE} from "../../../providers/TournamentFiltersProvider.tsx";
import {FiltersProps} from "../TournamentFilters.tsx";

export const SortModeFilter = ({filters, onFiltersChange}: FiltersProps) => {
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
    const [toggleValue, toggle] = useToggle([REGISTRATION_DATE, TOURNAMENT_DATE])

    useEffect(() => {
        if(filters.sortMode !== toggleValue) {
            onFiltersChange({...filters, sortMode: toggleValue as SortMode})
        }
    }, [toggleValue])

    return <div>
        <Text>Afficher les tournois par :</Text>
        <SegmentedControl
            data={[
                {label: 'Date de tournoi', value: TOURNAMENT_DATE},
                {label: `Date d'ouverture des inscriptions`, value: REGISTRATION_DATE},
            ]}
            onChange={() => toggle()}
            value={toggleValue}
            transitionDuration={500}
            orientation={isMobile ? 'vertical' : 'horizontal'}
            fullWidth
        /></div>
}
