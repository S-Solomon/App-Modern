import React from 'react'
import Modal from '../Modal'
import { render, fireEvent, cleanup,  Matcher, MatcherOptions } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

let getByTestId: { (arg0: string): any; (text: Matcher, options?: MatcherOptions | undefined, waitForElementOptions?: unknown): HTMLElement; };

beforeEach(() => {
    const component = render(<Modal closeModal />)
    getByTestId = component.getByTestId;
})

test('modal has a close button', () => {
    const closeButton = getByTestId('modal-close-button');

    fireEvent.click(closeButton)
    expect(closeButton).not.toBeInTheDocument()
})


afterEach(() => {
    cleanup()
})