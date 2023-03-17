import React, { useCallback, useEffect } from 'react'
import { useCharacterStore } from '../../stores/characterStore'
import { useFilterStore } from '../../stores/filterStore'
import { Filter } from '../../types/filter'
import * as Style from './Filters.style'
type Props = {}

const Filters = (props: Props) => {
    const { filters, toggleFilter, resetFilters } = useFilterStore()
    const { characters, setFilteredCharacters, resetCharacters } = useCharacterStore()

    const handleToggleFilter = useCallback((filter: Filter, index: number) => () => {
        if (index === 3) {
            resetFilters()
            resetCharacters()
            return
        } else {
            toggleFilter(index)
        }
    }, [])

    useEffect(() => {
        let filteredData = [...characters]
        filters.forEach((item) => {
            if (item.isActive) {
                filteredData = filteredData.filter((character) => item.filterFn && item.filterFn(character))
            }
        })
        setFilteredCharacters(filteredData)
    }, [filters])
    return (
        <Style.Base align={'center'} justify={'center'} inline={false}>
            {filters.map((filter, index) => (
                <Style.Item
                    className={`${filter.isActive ? 'active' : ''}`}
                    key={`filter-item-${index}`}
                    onClick={handleToggleFilter(filter, index)}
                >
                    {filter.name}
                </Style.Item>
            ))}
        </Style.Base >
    )
}

export default Filters