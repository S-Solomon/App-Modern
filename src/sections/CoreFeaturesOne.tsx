import React from 'react'
import styled from 'styled-components'
import { OuterLayout } from '../styles/Layout'
import mobileThumb from '../assets/corefeatures1/mobileThumb.png'
import coreOne from '../data/CoreOne'

const CoreFeaturesOne = () => {
    return (
        <CoreFeaturesOneStyled>
            <OuterLayout>
                <Wrapper>
                    <ImageContainer>
                        <img src={mobileThumb} alt="" />
                    </ImageContainer>
                    <TextContainer>
                        <div className="topic-wrapper">
                            <div className="topic">
                                <div className="container">
                                    <p className="subtitle" >Core features</p>
                                    <h2 className="primary-title">Smart Jackpots that you may love this anytime & anywhere</h2>
                                </div>
                            </div>
                        </div>
                        <div className="content-wrapper">
                            {
                                coreOne.map((item) => (
                                    <div className="item" key={item.id}>
                                        <img src={item.img} alt="" />
                                        <div className="text-wrapper">
                                            <h2 className="secondary-title">{item.title}</h2>
                                            <div className="para">{item.text}</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </TextContainer>
                </Wrapper>
            </OuterLayout>
        </CoreFeaturesOneStyled>
    )
}

export default CoreFeaturesOne


const CoreFeaturesOneStyled = styled.section`
    position: relative;
    @media screen and (min-width: 768px) {
        padding: 0.63rem 0;
    }
    @media screen and (min-width: 1220px) {
        padding: 3.13rem 0;
    }
    &::before {
        position: absolute;
        content: '';
        top: auto;
        left: 0;
        bottom: 100px;
        background: linear-gradient(-157deg, #f6fafd, #f9fcfc, #fcfdfc);
        height: 350px;
        width: 50%;
        z-index: -1;
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
        @media screen and (min-width: 480px) {
            bottom: 0;
            height: 550px;
        }
        @media screen and (min-width: 640px) {
            height: 60%;
        }
        @media screen and (min-width: 768px) {
            top: 50%;
            bottom: auto;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
        }
    }
`;


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`


const ImageContainer = styled.div`
    order: 2;
    @media screen and (min-width: 480px) {
        padding: 0 1.56rem;
    }
    @media screen and (min-width: 640px) {
        padding-left: 0;
    }
    @media screen and (min-width: 768px) {
        -webkit-order: 0;
        -ms-flex-order: 0;
        order: 0;
    }
    @media screen and (min-width: 1024px) {
        padding-left: 3.13rem;
    }
    @media screen and (min-width: 1220px) {
        padding-left: 5.94rem;
        padding-right: 4.7rem;
    }
    @media screen and (min-width: 1366px)  {
        padding-right: 5.94rem;
    }
    img {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        max-width: 100%;
        height: auto;
    }
`;


const TextContainer = styled.div`
    min-width: 0;
    width: 100%;
    flex-shrink: 0;
    @media screen and (min-width: 480px) {
        width: 28.13rem;
    }
    @media screen and (min-width: 640px) {
        width: 34.38rem;
        padding-right: auto;
    }
    @media screen and (min-width: 768px) {
        width: 21.88rem;
    }
    @media screen and (min-width: 1024px) {
        width: 31.25rem;
    }
    @media screen and (min-width: 1220px) {
        width: 35.63rem;
        padding-right: 80px;
    }
    .topic-wrapper {
        margin: 0 0 0.95rem 0;
        text-align: center;
        margin-bottom: 15px;
        @media screen and (min-width: 768px) {
            text-align: left;
        }
        @media screen and (min-width: 1024px) {
            padding-left: 2.12rem;
            margin-bottom: 0.3rem;
        }
        @media screen and (min-width: 1366px) {
            padding-left: 3.44rem;
        }
        .topic {
            display: flex;
            flex-direction: column;
            .container {
                display: flex;
                flex-direction: column;
                margin-top: -5px;
                width: 100%;
            }
        }
    }

    .content-wrapper {
        margin-top: 4rem;
        display: grid;
        grid-gap: 0.94rem 0;
        grid-template-columns: repeat(1, 1fr);
        padding: 0 0px 2.2rem;
        @media screen and (min-width: 1024px) {
            padding: 0 1.25rem 2.5rem;
        }
        @media screen and (min-width: 1366px) {
            padding: 0 2.5rem 2.5rem;
        }
        @media screen and (min-width: 1620px) {
            padding: 0;
        }
        .item {
            display: flex;
            align-items: flex-start;
            margin: 0 auto;
            border-radius: 10px;
            transition: all 0.3s;
            background-color: white;
            width: 100%;
            min-width: 0;
            padding: 0 17px 20px;
            &:hover {
                box-shadow: 0px 8px 24px rgb(69 88 157 / 7%);
            }
            @media screen and (min-width: 480px) {
                width: 85%;
            }
            @media screen and (min-width: 768px) {
                padding: 0 0 20px;
                width: 100%;
            }
            @media screen and (min-width: 1024px) {
                padding: 20px 15px 17px;
            }
        }
        img {
            max-width: 100%;
            height: auto;
            width: 50px;
            height: auto;
            -webkit-flex-shrink: 0;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            margin-right: 15px;
            @media screen and (min-width: 480px) {
                margin-right: 20px;
            }
            @media screen and (min-width: 640px) {
                width: 55px;
            }
        }
        .text-wrapper {
            margin-top: -5px;
            .secondary-title {
                @media screen and (min-width: 1024px)  {
                    margin-bottom: 15px;
                }
            }
            .para {
                
            }
        }
    }
`;