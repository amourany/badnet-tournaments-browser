import {useMediaQuery, useToggle} from "@mantine/hooks";
import {useEffect} from "react";
import {SegmentedControl, Text, useMantineTheme} from "@mantine/core";
import {
    REGISTRATION_DATE,
    SortMode,
    TOURNAMENT_DATE,
    useFilters
} from "../../../providers/TournamentFiltersProvider.tsx";

export const SortModeFilter = () => {
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
    const {filters, setFilters} = useFilters()
    const [toggleValue, toggle] = useToggle([REGISTRATION_DATE, TOURNAMENT_DATE])

    useEffect(() => {
        if(filters.sortMode !== toggleValue) {
            setFilters({...filters, sortMode: toggleValue as SortMode})
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
