import React from 'react'
import { IChildrenProps } from '../../../types/chilldrenProps'
import * as Style from './Header.style'


const Header = ({ children }: IChildrenProps) => {
    return (
        <Style.Base >
            <Style.Container align={'center'} justify={'center'} inline={false}>무신사 과제</Style.Container>
            {children}
        </Style.Base>
    )
}

export default Header

