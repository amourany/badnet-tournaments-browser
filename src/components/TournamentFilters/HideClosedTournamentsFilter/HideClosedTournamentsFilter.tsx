import {Switch} from "@mantine/core";
import {useState} from "react";
import {useFilters} from "../../../providers/TournamentFiltersProvider.tsx";

export const HideClosedTournamentsFilter = () => {

    const {filters, setFilters} = useFilters()
    const [checked, setChecked] = useState(filters.hideClosedTournaments)

    const onChange = (value: boolean) => {
        setChecked(value)
        setFilters({...filters, hideClosedTournaments: value})
    }

    return <Switch
        onChange={(event) => onChange(event.currentTarget.checked)}
        checked={checked}
        label="Masquer les tournois déjà fermés"/>
}
