import Navbar from '../Navbar'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'



test('navbar renders with correct text', () => {
    render(<Navbar />);

    const homeButton = screen.getByText(/home/i)
    const featuresButton = screen.getByText(/Features/i)
    const testimonialButton = screen.getByText(/Testimonial/i)
    const pricingButton = screen.getByText(/Pricing/i)
    // const getStartedButton = screen.getByText(/Get Started/i)

    expect(homeButton).toBeInTheDocument();
    expect(featuresButton).toBeInTheDocument();
    expect(testimonialButton).toBeInTheDocument();
    expect(pricingButton).toBeInTheDocument();
    // expect(getStartedButton).toBeInTheDocument();

})

test('button text content says Get started', () => {
    const { getByTestId } = render(<Navbar />)
    const buttonElement = getByTestId('buttonTest')

    expect(buttonElement.textContent).toBe('Get Started')
})