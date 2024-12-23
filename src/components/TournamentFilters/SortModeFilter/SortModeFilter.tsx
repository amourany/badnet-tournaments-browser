import {useMediaQuery, useToggle} from "@mantine/hooks";
import {useEffect} from "react";
import {SegmentedControl, Text, useMantineTheme} from "@mantine/core";
import {REGISTRATION_DATE, SortMode, TOURNAMENT_DATE} from "../../../providers/TournamentFiltersProvider.tsx";
import {FiltersProps} from "../TournamentFilters.tsx";
import {useTranslation} from "react-i18next";

export const SortModeFilter = ({filters, onFiltersChange}: FiltersProps) => {
    const {t} = useTranslation('', {keyPrefix: 'FILTERS.SORT_MODE'})
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);
    const [toggleValue, toggle] = useToggle([REGISTRATION_DATE, TOURNAMENT_DATE])

    useEffect(() => {
        if(filters.sortMode !== toggleValue) {
            onFiltersChange({...filters, sortMode: toggleValue as SortMode})
        }
    }, [toggleValue])

    return <div>
        <Text>{t('LABEL')}</Text>
        <SegmentedControl
            data={[
                {label: t('TOURNAMENT_DATE'), value: TOURNAMENT_DATE},
                {label: t('REGISTRATION_DATE'), value: REGISTRATION_DATE},
            ]}
            onChange={() => toggle()}
            value={toggleValue}
            transitionDuration={500}
            orientation={isMobile ? 'vertical' : 'horizontal'}
            fullWidth
        /></div>
}
