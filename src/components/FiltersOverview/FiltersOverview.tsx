import {useFilters} from "../../providers/TournamentFiltersProvider.tsx";
import {Pill} from "@mantine/core";
import styles from "./FiltersOverview.module.css";

export const FiltersOverview = () => {
    const {filters, setFilters} = useFilters()
    const isRegionFilterActive = filters.region.length > 0
    const isSearchFilterActive = filters.search.length > 0

    const removeRegionFilter = () => {
        setFilters({...filters, region: ''})
    }

    const removeSearchFilter = () => {
        setFilters({...filters, search: ''})
    }

    return <>
        {(isRegionFilterActive || isSearchFilterActive) ? <div>
            <label className={styles.title}>Filtres actifs :</label>
            <div>
                {isRegionFilterActive ? <Pill withRemoveButton onRemove={removeRegionFilter}>Région : {filters.region}</Pill> : null}
                {isSearchFilterActive ? <Pill withRemoveButton onRemove={removeSearchFilter}>Recherche : {filters.search}</Pill> : null}
            </div>
        </div> : null}</>
}
