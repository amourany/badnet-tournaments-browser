import {MultiSelect} from "@mantine/core";
import {FiltersProps} from "../TournamentFilters.tsx";
import {AGE_CATEGORIES} from "../../../effects/age-categories.types.ts";
import {useTranslation} from "react-i18next";

export const AgeCategoryFilter = ({filters, onFiltersChange}: FiltersProps) => {

    const {t} = useTranslation('', {keyPrefix: 'FILTERS'})

    const onChange = (value: string[]) => {
        onFiltersChange({...filters, ageCategories: value})
    }

    const options = AGE_CATEGORIES.map(category => ({value: category.id, label: category.label}))

    return <MultiSelect
        label={t('AGE_CATEGORY')}
        value={filters.ageCategories}
        onChange={onChange}
        data={options}
    />
}
