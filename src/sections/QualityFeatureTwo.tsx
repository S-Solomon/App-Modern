import React from 'react'
import styled from 'styled-components'
import QualityTwoData from '../data/QualityTwoData'
import { InnerLayout, OuterLayout } from '../styles/Layout'

const QualityFeatureTwo = () => {
    return (
        <QualityFeatureTwoStyled>
            <OuterLayout>
                <InnerLayout>
                    <Wrapper>
                        <Heading>
                            <p className="subtitle">QUALITY FEATURES</p>
                            <h2 className="primary-title">
                                Meet exciting feature of app
                            </h2>
                        </Heading>
                        <Content>
                            {
                                QualityTwoData.map((item) => (
                                    <div className="item" key={item.id}>
                                        <img src={item.img} alt="" />
                                        <div>
                                            <h2 className="secondary-title">{item.title}</h2>
                                            <div className="para">{item.text}</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Content>
                    </Wrapper>
                </InnerLayout>
            </OuterLayout>
        </QualityFeatureTwoStyled>
    );
}

export default QualityFeatureTwo


const QualityFeatureTwoStyled = styled.section``

const Wrapper = styled.div``

const Heading = styled.div`
    text-align: center;
    margin-bottom: 50px;
    margin-top: -5px;
    width: 100%;
    @media screen and (min-width: 640px) {
        margin-bottom: 60px;
    }
    @media screen and (min-width: 1024px) {
        margin-bottom: 65px;
    }
    @media screen and (min-width: 1220px) {
        margin-bottom: 75px;
    }
`;

const Content = styled.div`
    display: grid;
    gap: 37px 0;
    grid-template-columns: 1fr;
    @media screen and (min-width: 480px) {
        width: 80%;
    }
    @media screen and (min-width: 640px) {
        grid-gap: 45px 30px;
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 1024px) {
        grid-gap: 50px 30px;
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1620px) {
        padding-top: 15px;
        grid-gap: 90px 70px;
    }
    .item {
        display: flex;
        align-items: flex-start;
        img {
            width: 60px;
            height: auto;
            max-width: 100%;
            margin-right: 15px;
            @media screen and (min-width: 480px) {
                margin-right: 20px;
            }
            @media screen and (min-width: 1024px) {
                width: 55px;
                margin-right: 15px;
            }
            @media screen and (min-width: 1220px) {
                width: 70px;
                margin-right: 20px;
            }
            @media screen and (min-width: 1620px) {
                width: 80px;
                margin-right: 25px;
            }
        }
    }
`;