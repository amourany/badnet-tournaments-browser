import {Switch} from "@mantine/core";
import {FiltersProps} from "../TournamentFilters.tsx";
import {useTranslation} from "react-i18next";

export const HideClosedTournamentsFilter = ({filters, onFiltersChange}: FiltersProps) => {

    const {t} = useTranslation('', {keyPrefix: 'FILTERS'})

    const onChange = (value: boolean) => {
        onFiltersChange({...filters, hideClosedTournaments: value})
    }

    return <Switch
        onChange={(event) => onChange(event.currentTarget.checked)}
        checked={filters.hideClosedTournaments}
        label={t('HIDE_CLOSED_TOURNAMENTS')}/>
}
