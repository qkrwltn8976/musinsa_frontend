import React, { useCallback } from 'react'
import { useFilterStore } from '../../store/filterStore'
import * as Filter from './Filters.style'
type Props = {}

const Filters = (props: Props) => {
    const { filters, toggleFilter } = useFilterStore()
    const handleToggleFilter = useCallback((index: number) => () => {
        toggleFilter(index)
    }, [])
    return (
        <Filter.Base align={'center'} justify={'center'} inline={false}>
            {filters.map((filter, index) => (
                <Filter.Item
                    className={`${filter.isActive ? 'active' : ''}`}
                    key={`filter-item-${index}`}
                    onClick={handleToggleFilter(index)}
                >{filter.name}</Filter.Item>
            ))}
        </Filter.Base >
    )
}

export default Filters