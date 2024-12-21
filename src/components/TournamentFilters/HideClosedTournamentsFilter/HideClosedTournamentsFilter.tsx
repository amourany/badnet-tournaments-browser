import {Switch} from "@mantine/core";
import {FiltersProps} from "../TournamentFilters.tsx";

export const HideClosedTournamentsFilter = ({filters, onFiltersChange}: FiltersProps) => {

    const onChange = (value: boolean) => {
        onFiltersChange({...filters, hideClosedTournaments: value})
    }

    return <Switch
        onChange={(event) => onChange(event.currentTarget.checked)}
        checked={filters.hideClosedTournaments}
        label="Masquer les tournois déjà fermés"/>
}
