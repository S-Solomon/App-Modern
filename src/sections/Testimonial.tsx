import styled from 'styled-components'
import TestimonialData from '../data/TestimonialData'
import star from '../assets/testimonial/star.svg'
import mutedstar from '../assets/testimonial/mutedstar.svg'
import { InnerLayout, OuterLayout } from '../styles/Layout'

const Testimonial = () => {
    return (
        <TestimonialStyled>
            <InnerLayout>
                <OuterLayout>
                    <Heading>
                        <p className="subtitle">Testimonial</p>
                        <h2 className="primary-title">
                            Meet Client Satisfaction
                        </h2>
                    </Heading>
                </OuterLayout>
            </InnerLayout>
        </TestimonialStyled>
    );
}

export default Testimonial

const TestimonialStyled = styled.section``

const Heading = styled.div`
    text-align: center;
`


const Content = styled.div``
