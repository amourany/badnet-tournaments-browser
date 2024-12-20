import {Switch} from "@mantine/core";
import {useFilters} from "../../../providers/TournamentFiltersProvider.tsx";
import {useState} from "react";

export const HideOpenedTournamentsFilter = () => {

    const {filters, setFilters} = useFilters()
    const [checked, setChecked] = useState(filters.hideOpenedTournaments)

    const onChange = (value: boolean) => {
        setChecked(value)
        setFilters({...filters, hideOpenedTournaments: value})
    }

    return <Switch
        onChange={(event) => onChange(event.currentTarget.checked)}
        checked={checked}
        label="Masquer les tournois déjà ouverts"/>
}
