import {useState} from "react";
import {Select} from "@mantine/core";
import {useFilters} from "../../../providers/TournamentFiltersProvider.tsx";

const regions = ['AURA', 'BOFC', 'BRET', 'CVDL', 'GEST', 'HFRA', 'LIFB', 'NORM', 'NAQU', 'OCCI', 'PDLL', 'PACA', 'GUA', 'GUY', 'MAR', 'NCAL', 'REU']

export const RegionFilter = () => {
    const {filters, setFilters} = useFilters()
    const [value, setValue] = useState<string | null>(filters.region);

    const onChange = (value: string | null) => {
        setValue(value)
        setFilters({...filters, region: value ?? ''})
    }

    return <Select
        label="Filtrer par ligue"
        value={value}
        onChange={onChange}
        data={regions}
        clearable
        allowDeselect
    />
}
