import React from 'react'
import * as Style from './Filters.style'
type Props = {}

const Filters = (props: Props) => {
    return (
        <Style.Base align={'center'} justify={'center'} inline={false}>
            <Style.Item>생존인물만</Style.Item>
            <Style.Item>여자</Style.Item>
            <Style.Item>tvSeries 없음</Style.Item>
            <Style.Item>초기화</Style.Item>
        </Style.Base >
    )
}

export default Filters