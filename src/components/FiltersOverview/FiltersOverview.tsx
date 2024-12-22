import {useFilters} from "../../providers/TournamentFiltersProvider.tsx";
import {Pill} from "@mantine/core";
import styles from "./FiltersOverview.module.css";
import {useTranslation} from "react-i18next";

export const FiltersOverview = () => {
    const {t} = useTranslation('', {keyPrefix: 'FILTERS.OVERVIEW'})
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
            <label className={styles.title}>{t('ACTIVE_FILTERS')}</label>
            <div>
                {isRegionFilterActive ?
                    <Pill withRemoveButton onRemove={removeRegionFilter}>{t('REGION_PILL')} {filters.region}</Pill> : null}
                {isSearchFilterActive ?
                    <Pill withRemoveButton onRemove={removeSearchFilter}>{t('SEARCH_PILL')} {filters.search}</Pill> : null}
            </div>
        </div> : null}</>
}
