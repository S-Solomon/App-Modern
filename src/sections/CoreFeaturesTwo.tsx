import React from 'react'
import styled from 'styled-components'
import { InnerLayout, OuterLayout } from '../styles/Layout'
import companies from '../assets/corefeatures2/companies.png'

const CoreFeaturesTwo = () => {
    return (
        <CoreFeaturesTwoStyled>
            <InnerLayout>
                <OuterLayout>
                    <Wrapper>
                        <Text>
                            <div className="heading">
                                <p className="subtitle">CORE FEATURES</p>
                                <h2 className="primary-title">
                                    Smart Jackpots that you may love this
                                    anytime & anywhere
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
                                <div className="button">Get Started</div>
                            </div>
                        </Text>
                        <Image>
                            <img src={companies} alt="" />
                        </Image>
                    </Wrapper>
                </OuterLayout>
            </InnerLayout>
        </CoreFeaturesTwoStyled>
    );
}

export default CoreFeaturesTwo

const CoreFeaturesTwoStyled = styled.section`
    margin-top: -15px;
    @media screen and (min-width: 768px) {
        margin-top: -25px;
    }
`

const Wrapper = styled.div`
    display: flex;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    @media screen and (min-width: 768px) {
        width: 80%;
        max-width: 400px;
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

const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        display: none;
        @media screen and (min-width: 768px) {
            display: unset;
            width: 100%;
        }
    }
`