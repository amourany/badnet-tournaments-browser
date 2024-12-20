import {useState} from "react";
import {Select} from "@mantine/core";
import {REGIONS} from "../../../effects/regions.actions.ts";
import {FiltersProps} from "../TournamentFilters.tsx";

export const RegionFilter = ({filters, onFiltersChange}: FiltersProps) => {
    const [value, setValue] = useState<string | null>(filters.region);

    const onChange = (value: string | null) => {
        setValue(value)
        onFiltersChange({...filters, region: value ?? ''})
    }

    // useEffect(() => {
    //     setValue(filters.region)
    // }, [filters])

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
