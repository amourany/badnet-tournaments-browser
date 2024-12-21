import {Select} from "@mantine/core";
import {REGIONS} from "../../../effects/regions.actions.ts";
import {FiltersProps} from "../TournamentFilters.tsx";


export const RegionFilter = ({filters, onFiltersChange}: FiltersProps) => {

    const onChange = (value: string | null) => {
        onFiltersChange({...filters, region: value ?? ''})
    }

    const options = [{value: "", label: ""}, ...REGIONS.map(region => ({value: region.value, label: `${region.label} - ${region.value}`}))
        .sort((a, b) => a.label.localeCompare(b.label))]

    return <Select
        label="Filtrer par ligue"
        value={filters.region}
        onChange={onChange}
        data={options}
        clearable
        allowDeselect
    />
}
