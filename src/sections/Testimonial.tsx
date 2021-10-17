import styled from 'styled-components'
import { InnerLayout, OuterLayout } from '../styles/Layout'
import SliderCarousel from '../components/slider/SliderCarousel';


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
                    <Content>
                        <SliderCarousel />
                    </Content>
                </OuterLayout>
            </InnerLayout>
        </TestimonialStyled>
    );
}

export default Testimonial

const TestimonialStyled = styled.section`
    z-index: -1;
`

const Heading = styled.div`
    text-align: center;
    margin-bottom: 4rem;
`


const Content = styled.div``;
