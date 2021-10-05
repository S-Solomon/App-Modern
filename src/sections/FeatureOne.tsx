import React from 'react'
import styled from 'styled-components'
import { InnerLayout, OuterLayout } from '../styles/Layout'
import FeatureOneData from '../data/FeatureOneData'

const FeatureOne = () => {
    return (
        <React.Fragment>
            <OuterLayout>
                <InnerLayout>
                    <FeatureOneStyled>
                        <div className="container">
                            <div className="topic">
                                <p className="subtitle">Quality features</p>
                                <h2 className="primary-title">
                                    Meet exciting feature of app
                                </h2>
                            </div>
                            <div className="items-wrapper">
                                {FeatureOneData.map((data) => (
                                    <div className="items" key={data.id}>
                                        <div className="image-container">
                                            <img src={data.img} alt="" />
                                        </div>
                                        <div className="text-container">
                                            <h2 className="secondary-title">
                                                {data.title}
                                            </h2>
                                            <div className="para">
                                                {data.text}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FeatureOneStyled>
                </InnerLayout>
            </OuterLayout>
        </React.Fragment>
    );
}

export default FeatureOne


const FeatureOneStyled = styled.section`
    .container {
        margin: 0 auto;
        @media screen and (min-width: 480px) {
            padding: 0 1.9rem;
        }
        @media screen and (min-width: 768px){
            max-width: 780px;
        }
        @media screen and (min-width: 1024px){
            max-width: 1020px;
        }
        @media screen and (min-width: 480px){} */
        .topic {
            text-align: center;
            margin-bottom: 3.1rem;
            @media screen and (min-width: 1024px){
                margin-bottom: 4rem;
            }
            @media screen and (min-width: 120px){
                margin-bottom: 4.6rem;
            }
            .subtitle {
                @media screen and (min-width: 640px) {
                    font-size: .9rem;
                }
            }
            .primary-title {
                @media screen and (min-width: 640px) {
                    font-size: 1.8rem;
                }
                @media screen and (min-width: 1620px) {
                    font-size: 2.3rem;
                }
            }
        }
        .items-wrapper {
            display: grid;
            grid-template-columns: 1fr;
            margin: 0 auto;
            gap: 2.2rem 0;
            @media screen and (min-width: 768px) {
                grid-template-columns: repeat(2, 1fr);
            }
            @media screen and (min-width: 1024px) {
                grid-template-columns: repeat(3, 1fr);
            }
            .items {
                display: flex;
                flex-direction: column;
                padding: 0 1rem;
                @media screen and (min-width: 768px) {
                    padding: 0 1.6rem;
                }
                @media screen and (min-width: 1620px) {
                    padding: 0 3.1rem;
                }
                .image-container {
                    margin: 0 auto;
                    img {
                        min-width: 0;
                        max-width: 100%;
                        width: 5rem;
                        margin-bottom: 1rem;
                        @media screen and (min-width: 480px) {
                            width: 5.6rem;
                        }
                        @media screen and (min-width: 640px) {
                            margin-bottom: 1.25rem;
                        }
                        @media screen and (min-width: 1220px) {
                            margin-bottom: 1.6rem;
                            width: 6.25rem;
                        }
                        @media screen and (min-width: 1366px) {
                            width: auto;
                        }
                    }
                }
                .text-container {
                    text-align: center;
                    h2 {
                        margin-bottom: 0.6rem;
                        @media screen and (min-width: 1220px) {
                            font-size: 1.2rem;
                            margin-bottom: 1rem;
                        }
                    }
                    .para {
                        @media screen and (min-width: 768px) {
                            line-height: 1.9;
                        }
                        @media screen and (min-width: 1024px) {
                            line-height: 2;
                        }
                    }
                }
            }
        }
    }
`;