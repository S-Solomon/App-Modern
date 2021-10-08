import styled from 'styled-components'
import { InnerLayout, OuterLayout } from '../styles/Layout'
import bgPattern from '../assets/function/pattern.svg'
import FunctionOneData from '../data/FunctionOneData'
import arrowup from '../assets/function/arrowup.svg'
import arrrowdown from '../assets/function/arrowdown.svg'

const FunctionOne = () => {
    return (
        <FunctionOneStyled>
            <InnerLayout>
                <OuterLayout>
                    <Wrapper>
                        <Heading>
                            <p className="subtitle">WHATS THE FUNCTION</p>
                            <h2 className="primary-title">Let's see how it works</h2>
                        </Heading>
                        <Content>
                            {
                                FunctionOneData.map((item) => (
                                    <div className="item" key={item.id}>
                                        <div className="number">{item.number}</div>
                                        <div className="text-container">
                                            <h2 className="secondary-title">{item.title}</h2>
                                            <div className="para">{item.text}</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Content>
                    </Wrapper>
                </OuterLayout>
            </InnerLayout>
        </FunctionOneStyled>
    );
}

export default FunctionOne


const FunctionOneStyled = styled.section`
    width: 100%;
    background-image: url(${bgPattern});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    background-color: var(--primary-color);
    overflow: hidden;
    position: relative;
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
        z-index: 0;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

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
`
const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.2rem 0;
    @media screen and (min-width: 640px) {
        gap: 2.8rem 3.1rem;
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 1024px) {
        gap: 3.1rem 1.5rem;
        grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (min-width: 1220px) {
        gap: 3.1rem 4rem;
    }
    @media screen and (min-width: 1620px) {
        gap: 3.1rem 5rem;
    }
    .item {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        margin: 0 auto;
        &::before {
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            background-repeat: no-repeat;
            background-position: center center;
            width: 215px;
            height: 60px;
            opacity: 0.3;
        }
        @media screen and (min-width: 1220px) {
            :nth-of-type(2n-1)::before {
                background-image: url(${arrowup});
            }
            :nth-of-type(2n)::before {
                background-image: url(${arrrowdown});
                /* top: -1rem; */
            }
            &::before {
                left: 4.6rem;
            }
        }
        @media screen and (min-width: 1620px) {
            &::before {
                left: 6.2rem;
            }
        }
        @media screen and (min-width: 480px) {
            width: 80%;
        }
        @media screen and (min-width: 640px) {
            text-align: left;
            align-items: flex-start;
            justify-content: left;
            width: 100%;
        }
        .number {
            background: white;
            color: var(--primary-color);
            width: 3rem;
            height: 3rem;
            border-radius: 0.9rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1.6rem;
            @media screen and (min-width: 640px) {
                width: 3.75rem;
                height: 3.75rem;
                border-radius: 1.5rem;
                margin-left: 0;
                margin-right: 0;
                font-size: 1.7rem;
            }
            @media screen and (min-width: 1220px) {
                width: 4.4rem;
                height: 4.4rem;
                border-radius: 1.9rem;
                margin-bottom: 1.9rem;
                font-size: 1.9rem;
            }
        }
        .text-container {
            color: white;
            .secondary-title {
                color: white;
                font-weight: 500;
            }
            .para {
                color: white;
                opacity: 0.3;
            }
        }
    }
`;