import {useState} from "react";
import {Select} from "@mantine/core";
import {useFilters} from "../../../providers/TournamentFiltersProvider.tsx";
import {REGIONS} from "../../../effects/regions.actions.ts";

export const RegionFilter = () => {
    const {filters, setFilters} = useFilters()
    const [value, setValue] = useState<string | null>(filters.region);

    const onChange = (value: string | null) => {
        setValue(value)
        setFilters({...filters, region: value ?? ''})
    }

    const options = REGIONS.map(region => ({value: region.value, label: `${region.label} - ${region.value}`}))
        .sort((a, b) => a.label.localeCompare(b.label))

    return <Select
        label="Filtrer par ligue"
        value={value}
        onChange={onChange}
        data={options}
        clearable
        allowDeselect
    />
}
