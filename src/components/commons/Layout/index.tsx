import React from 'react'
import { IChildrenProps } from '../../../types/chilldrenProps'
import Header from '../Header'
import * as Style from './Layout.style'

interface ILayoutProps extends IChildrenProps {
    headerItem: React.ReactElement
}

const Layout = ({ children, headerItem }: ILayoutProps) => {
    return (
        <Style.Base>
            <Header>
                {headerItem}
            </Header>
            <Style.Content>
                {children}
            </Style.Content>
        </Style.Base>
    )
}

export default Layout