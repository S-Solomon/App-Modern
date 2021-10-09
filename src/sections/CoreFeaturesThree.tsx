import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layout';
import securepayment from '../assets/payment/securepayment.png'
import securepaymentBg from '../assets/payment/securepaymentBg.svg'


const CoreFeaturesThree = () => {
    return (
        <FeatureThreeStyled>
            <InnerLayout className="innerLayout">
                    <Wrapper>
                        <Text>
                            <div className="heading">
                                <p className="subtitle">PAYMENT SECURITY</p>
                                <h2 className="primary-title">
                                    Secure Payment Transaction System with #1
                                    Ranking
                                </h2>
                            </div>
                            <div className="content">
                                <p className="para">
                                    Get your tests delivered at let home collect
                                    sample from the victory of the managements
                                    that supplies best design system guidelines
                                    ever. Get your tests delivered at let home
                                    collect sample.
                                </p>
                                <div className="button">Learn More</div>
                            </div>
                        </Text>
                        <Image>
                            <img src={securepayment} alt="" />
                        </Image>
                    </Wrapper>
            </InnerLayout>
        </FeatureThreeStyled>
    );
}

export default CoreFeaturesThree

const FeatureThreeStyled = styled.section`
    padding: 0 1rem;
    @media (min-width: 768px) {
        padding: 0 2rem;
    }
    @media screen and (min-width: 900px) {
        padding: 0 8rem;
    }
    @media screen and (min-width: 1024px) {
        padding: 0 4rem;
    }
    @media screen and (min-width: 1300px) {
        padding: 0 8rem;
    }
    @media screen and(min-width: 1440px) {
        padding: 0 12rem;
    }
    @media screen and (min-width: 1900px) {
        padding: 0 18rem;
    }
    @media screen and(min-width: 2100px) {
        padding: 0 20rem;
    } 

    .innerLayout {
        background-image: url(${securepaymentBg});
    background-repeat: no-repeat; 
    background-position: top left;
    background-size: cover;
    width: 100%;
    height: 100%;
    z-index: -1; 
    }
`;

const Wrapper = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
    }
`;

const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
        margin-top: 2rem;
        @media screen and (min-width: 768px) {
            /* width: 50%; */
            margin-top: unset;
            padding-right: 2.5rem;
        }
    }
`;

const Text = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* width: 350px; */
    width: 85%;
    @media screen and (min-width: 768px) {
        width: 80%;
        max-width: 400px;
        order: 2;
    }
    @media screen and (min-width: 1200px) {
        max-width: 500px;
    }
    .heading {
        text-align: center;
        margin-bottom: 2rem;
        @media screen and (min-width: 768px) {
            text-align: left;
        }
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media screen and (min-width: 768px) {
            align-items: flex-start;
            justify-content: left;
        }
        .para {
            color: #02073e;
            margin-bottom: 2rem;
            @media screen and (min-width: 768px) {
                text-align: left;
            }
        }
        .button {
            font-family: 'DM Sans', sans-serif;
            padding: 0.8rem 1.5rem;
            border-radius: 50px;
            color: white;
            background: var(--primary-color);
            outline: none;
            border: 1.5px solid white;
            cursor: pointer;
            font-size: 0.875rem;
            display: inline-block;
            transition: all 0.25s;
            font-weight: 500;
            &:hover {
                box-shadow: rgb(0 0 0 / 50%) 0px 12px 24px -10px;
            }
            @media screen and (min-width: 1600px) {
                padding: 0.8rem 1.8rem;
                font-size: 1rem;
            }
        }
    }
`;
