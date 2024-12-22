import {Switch} from "@mantine/core";
import {FiltersProps} from "../TournamentFilters.tsx";
import {useTranslation} from "react-i18next";

export const HideOpenedTournamentsFilter = ({filters, onFiltersChange}: FiltersProps) => {
    const {t} = useTranslation('', {keyPrefix: 'FILTERS'})

    const onChange = (value: boolean) => {
        onFiltersChange({...filters, hideOpenedTournaments: value})
    }

    return <Switch
        onChange={(event) => onChange(event.currentTarget.checked)}
        checked={filters.hideOpenedTournaments}
        label={t('HIDE_OPENED_TOURNAMENTS')}/>
}
