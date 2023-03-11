import React from 'react'
import { IChildrenProps } from '../../../types/chilldrenProps'
import Header from '../Header'

const Layout = ({ children }: IChildrenProps) => {
    return (
        <><Header />{children}</>
    )
}

export default Layout