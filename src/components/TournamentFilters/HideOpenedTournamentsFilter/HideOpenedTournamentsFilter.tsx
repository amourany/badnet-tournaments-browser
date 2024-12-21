import {Switch} from "@mantine/core";
import {FiltersProps} from "../TournamentFilters.tsx";

export const HideOpenedTournamentsFilter = ({filters, onFiltersChange}: FiltersProps) => {

    const onChange = (value: boolean) => {
        onFiltersChange({...filters, hideOpenedTournaments: value})
    }

    return <Switch
        onChange={(event) => onChange(event.currentTarget.checked)}
        checked={filters.hideOpenedTournaments}
        label="Masquer les tournois déjà ouverts"/>
}
