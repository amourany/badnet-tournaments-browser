import {CloseButton, TextInput} from "@mantine/core";
import {useEffect, useState} from "react";
import {useDebouncedValue} from "@mantine/hooks";
import {useFilters} from "../../../providers/TournamentFiltersProvider.tsx";

export const TextFilter = () => {

    const {filters, setFilters} = useFilters()
    const [value, setValue] = useState('');
    const [debounced] = useDebouncedValue(value, 500);

    useEffect(() => {
        if(filters.search !== debounced) {
            setFilters({...filters, search: debounced})
        }
    }, [debounced])

    return <div>
        <TextInput label="Filtrer par nom de tournoi"
                   value={value}
                   onChange={(event) => setValue(event.currentTarget.value)}
                   rightSection={
                       <CloseButton
                           aria-label="Clear input"
                           onClick={() => setValue('')}
                           style={{ display: value ? undefined : 'none' }}
                       />
                   }
        />
    </div>
}
