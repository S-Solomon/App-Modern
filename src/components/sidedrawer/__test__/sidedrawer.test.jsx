import React from 'react'
import SideDrawer from '../SideDrawer'
import { render, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"



test('testing hamburger close button can be seen by users', () => {
    const { getByTestId } = render(<SideDrawer />)
    const hamburgerClose = getByTestId('menuClose')

    fireEvent.click(hamburgerClose)
    expect(hamburgerClose).toBeVisible()

})