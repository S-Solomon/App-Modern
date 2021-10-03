import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { InnerLayout, OuterLayout } from "../styles/Layout"
import bannerBg from '../assets/bannerBg.png'
import Navbar from "../components/navbar/Navbar"
import mobile from '../assets/mobile.svg'
import watchvideo from '../assets/watchvideo.svg'
import paypal from '../assets/paypal.svg'
import google from '../assets/google.svg'
import dropbox from '../assets/dropbox.svg'


export default function Header() {
    const [scrollHeight, setScrollHeight] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollHeight(position);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [scrollHeight])

    return (
        <HeaderStyled>
            <Navbar isScrolling={scrollHeight} />
            <OuterLayout>
                <InnerLayout>
                    <HeroWrapper>
                        <LeftArea>
                            <h1>Experience your ultimate mobile application</h1>
                            <p>
                                Get your blood tests delivered at let home
                                collect sample from the victory of the
                                managements that supplies best design system
                                guidelines ever.
                            </p>
                            <div className="buttonGroup">
                                <div className="button-started" aria-label="Get Started">Get Started</div>
                                <div className="button-video" aria-label="Watch Video">
                                    <span>
                                        <img src={watchvideo} alt="" />
                                    </span>
                                    Watch Video
                                </div>
                            </div>
                            <div className="sponsor">
                                <div className="text">Sponsored by :</div>
                                <div className="tech">
                                    <a href="www.paypal.com" target="_blank">
                                        <img src={paypal} alt="" />
                                    </a>
                                    <a href="www.google.com" target="_blank">
                                        <img src={google} alt="" />
                                    </a>
                                    <a href="www.dropbox.com" target="_blank">
                                        <img src={dropbox} alt="" />
                                    </a>
                                </div>
                            </div>
                        </LeftArea>
                        <RightArea>
                            <div className="wrapper">
                                <img src={mobile} alt="a smartphone" />
                            </div>
                        </RightArea>
                    </HeroWrapper>
                </InnerLayout>
            </OuterLayout>
        </HeaderStyled>
    );
}


const HeaderStyled = styled.header`
    min-height: 100vh;
    width: 100%;
    background-image: url(${bannerBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top left;
    background-color: var(--primary-color);
    overflow: hidden;
`;

const HeroWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    
`;


const LeftArea = styled.div`
    color: white;
    h1 {
        line-height: 1.2;
        margin-bottom: 1.5rem;
        @media (min-width: 375px) {
            font-size: 2.5rem;
        }
        @media (min-width: 500px) {
            font-size: 3.2rem;
        }
        @media (min-width: 768px) {
            width: 450px;
        }
    }
    p {
        line-height: 2;
        letter-spacing: 1.1;
        font-size: 1rem;
        margin-bottom: 2rem;
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }
    .buttonGroup {
        display: flex;
        align-items: center;
        .button-started {
            font-family: 'DM Sans', sans-serif;
            padding: 0.8rem 1.5rem;
            border-radius: 50px;
            color: var(--primary-color);
            background: white;
            outline: none;
            border: 1.5px solid white;
            cursor: pointer;
            font-size: 0.875rem;
            display: inline-block;
            transition: all 0.25s;
            font-weight: 500;
        }
        .button-video {
            display: flex;
            align-items: center;
            padding: 11px 20px 10px;
            font-family: 'DM Sans', sans-serif;
            cursor: pointer;
            line-height: 1.2;
            -webkit-transition: all 0.25s;
            transition: all 0.25s;
            font-weight: 500;
            background-color: transparent;
            color: white;
            font-size: 0.875rem;
            span {
                display: inline-block;
                margin-right: 0.6rem;
            }
        }
    }
    .sponsor {
        display: flex;
        flex-direction: column;
        padding-top: 2.2rem;
        @media (min-width: 768px) {
            flex-direction: row;
        }
        .text {
            padding-bottom: 0.625rem;
            opacity: 0.6;
            @media (min-width: 768px) {
                width: 30%;
            }
        }
        .tech {
            display: flex;
            align-items: center;
            a {
                margin-right: 1.6rem;
                img {
                    width: 5rem;
                    height: auto;
                    @media (min-width: 768px) {
                        width: 4rem;
                    }
                }
            }
        }
    }
`;



const RightArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .wrapper {
        img {
            display: none;
            margin: 0 auto;
            min-width: 0;
            max-width: 100%;
            height: auto;
            @media (min-width: 768px) {
                display: unset;
                width: 100%;
            }
        }
    }
`;