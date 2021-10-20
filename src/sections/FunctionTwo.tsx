import styled from 'styled-components'
import BgImage from '../assets/function2/BgImage.png'
import PricingCard from '../components/pricingcard/PricingCard';
import { InnerLayout, OuterLayout } from '../styles/Layout'

const FunctionTwo = () => {
    return (
        <FunctionTwoStyled id="pricing">
            <InnerLayout>
                <OuterLayout>
                    <Wrapper>
                        <Heading>
                            <p className="subtitle">WHATS THE FUNCTION</p>
                            <h2 className="primary-title">
                                Let's see how it works
                            </h2>
                        </Heading>
                        <Content>
                            <PricingCard 
                                planName='Free Plan' 
                                planFor='For Small teams or office'
                                whiteButton
                                mutedElements
                            />
                            <PricingCard
                                planName='Premium'
                                planFor='For startup enterprise'
                                blueButton
                                whiteBackground
                                premium
                            />
                        </Content>
                    </Wrapper>
                </OuterLayout>
            </InnerLayout>
        </FunctionTwoStyled>
    );
}

export default FunctionTwo


const FunctionTwoStyled = styled.section`
    position: relative;
    background-color: var(--primary-color);
    background-image: url(${BgImage});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    /* height: 100vh; */
    z-index: -1;
    &::before {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        background: linear-gradient(
            -45deg,
            rgba(42, 72, 125, 0.3) 25%,
            transparent 25%,
            transparent 50%,
            rgba(42, 72, 125, 0.3) 50%,
            rgba(42, 72, 125, 0.3) 75%,
            transparent 75%,
            transparent
        );
        width: 100%;
        background-size: 350px 350px;
        height: 100%;
        opacity: 0.3;
        z-index: -1;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Heading = styled.div`
    text-align: center;
    margin-bottom: 3rem;
    @media screen and (min-width: 640px) {
        margin-bottom: 3.7rem;
    }
    @media screen and (min-width: 1024px) {
        margin-bottom: 4rem;
    }
    @media screen and (min-width: 1220px) {
        margin-bottom: 4.7rem;
    }
    p {
        color: white;
        opacity: 0.3;
    }
    h2 {
        color: white;
    }
`;




const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2,1fr);
        gap: 0 1.5rem;
    }
`;